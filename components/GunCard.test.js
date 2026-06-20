import { render, screen, fireEvent } from '@testing-library/react-native';
import GunCard from './GunCard';

const gun = {
  id: 'ak-47',
  name: 'AK-47',
  category: 'rifle',
  caliber: '7.62×39mm',
  imageUrl: 'https://example.com/x.jpg',
};

test('이름과 분류·구경을 보여준다', () => {
  render(<GunCard gun={gun} onPress={() => {}} />);
  expect(screen.getByText('AK-47')).toBeTruthy();
  expect(screen.getByText('소총 · 7.62×39mm')).toBeTruthy();
});

test('누르면 onPress가 호출된다', () => {
  const onPress = jest.fn();
  render(<GunCard gun={gun} onPress={onPress} />);
  fireEvent.press(screen.getByTestId('gun-card'));
  expect(onPress).toHaveBeenCalled();
});
