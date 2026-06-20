import { render, screen, fireEvent } from '@testing-library/react-native';
import { Button } from 'react-native';
import { CompareProvider, useCompare } from '../context/CompareContext';
import CompareScreen from './CompareScreen';

const ak = { id: 'ak-47', name: 'AK-47', category: 'rifle', caliber: '7.62×39mm', weight: '3.47 kg', length: '880 mm', year: 1949, country: '소련 (러시아)', imageUrl: 'x' };
const glock = { id: 'glock-17', name: 'Glock 17', category: 'pistol', caliber: '9×19mm', weight: '0.625 kg', length: '186 mm', year: 1982, country: '오스트리아', imageUrl: 'x' };

function Seeder() {
  const { addToCompare } = useCompare();
  return (
    <>
      <Button title="add-ak" onPress={() => addToCompare(ak)} />
      <Button title="add-glock" onPress={() => addToCompare(glock)} />
    </>
  );
}

function renderWith() {
  render(
    <CompareProvider>
      <Seeder />
      <CompareScreen />
    </CompareProvider>
  );
  // 실제 앱처럼 한 번에 하나씩 담는다 (각 누르기가 별도 렌더 → 상태 정상 누적)
  fireEvent.press(screen.getByText('add-ak'));
  fireEvent.press(screen.getByText('add-glock'));
}

test('2개 미만이면 안내 문구를 보여준다', () => {
  render(
    <CompareProvider>
      <CompareScreen />
    </CompareProvider>
  );
  expect(screen.getByText(/비교할 총기를 2개/)).toBeTruthy();
});

test('2개면 두 총의 이름과 제원을 나란히 보여준다', () => {
  renderWith();
  expect(screen.getByText('AK-47')).toBeTruthy();
  expect(screen.getByText('Glock 17')).toBeTruthy();
  expect(screen.getByText('7.62×39mm')).toBeTruthy();
  expect(screen.getByText('9×19mm')).toBeTruthy();
});
