import { render, screen } from '@testing-library/react-native';
import { CompareProvider } from '../context/CompareContext';
import DetailScreen from './DetailScreen';

function renderDetail(id) {
  render(
    <CompareProvider>
      <DetailScreen route={{ params: { id } }} />
    </CompareProvider>
  );
}

test('총기 이름과 제원을 보여준다', () => {
  renderDetail('ak-47');
  expect(screen.getByText('AK-47')).toBeTruthy();
  expect(screen.getByText('7.62×39mm')).toBeTruthy();
  expect(screen.getByText('3.47 kg')).toBeTruthy();
});

test('분류는 한글로 보여준다', () => {
  renderDetail('ak-47');
  expect(screen.getByText('소총')).toBeTruthy();
});

test('없는 id면 안내 문구를 보여준다', () => {
  renderDetail('없는총');
  expect(screen.getByText('총기 정보를 찾을 수 없어요.')).toBeTruthy();
});
