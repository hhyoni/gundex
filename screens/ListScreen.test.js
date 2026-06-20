import { render, screen, fireEvent } from '@testing-library/react-native';
import ListScreen from './ListScreen';

const navigation = { navigate: jest.fn() };

beforeEach(() => navigation.navigate.mockClear());

test('처음엔 전체 목록이 보인다 (AK-47 포함)', () => {
  render(<ListScreen navigation={navigation} />);
  expect(screen.getByText('AK-47')).toBeTruthy();
});

test("'권총' 필터를 누르면 권총만 보인다", () => {
  render(<ListScreen navigation={navigation} />);
  fireEvent.press(screen.getByText('권총'));
  expect(screen.getByText('Glock 17')).toBeTruthy();
  expect(screen.queryByText('AK-47')).toBeNull();
});

test('카드를 누르면 상세로 이동한다', () => {
  render(<ListScreen navigation={navigation} />);
  fireEvent.press(screen.getByText('AK-47'));
  expect(navigation.navigate).toHaveBeenCalledWith('Detail', { id: 'ak-47' });
});
