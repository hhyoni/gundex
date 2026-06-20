import { render, screen, fireEvent } from '@testing-library/react-native';
import SearchScreen from './SearchScreen';

const navigation = { navigate: jest.fn() };

beforeEach(() => navigation.navigate.mockClear());

test('검색어를 입력하면 일치하는 총만 보인다', () => {
  render(<SearchScreen navigation={navigation} />);
  fireEvent.changeText(screen.getByPlaceholderText('총기 이름 검색'), 'glock');
  expect(screen.getByText('Glock 17')).toBeTruthy();
  expect(screen.queryByText('AK-47')).toBeNull();
});

test('결과 카드를 누르면 상세로 이동한다', () => {
  render(<SearchScreen navigation={navigation} />);
  fireEvent.changeText(screen.getByPlaceholderText('총기 이름 검색'), 'glock');
  fireEvent.press(screen.getByText('Glock 17'));
  expect(navigation.navigate).toHaveBeenCalledWith('Detail', { id: 'glock-17' });
});
