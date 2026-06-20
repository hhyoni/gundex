import { render, screen, fireEvent } from '@testing-library/react-native';
import { Text, Button } from 'react-native';
import { CompareProvider, useCompare } from './CompareContext';

const a = { id: 'a', name: 'A' };
const b = { id: 'b', name: 'B' };
const c = { id: 'c', name: 'C' };

function Harness() {
  const { compareList, addToCompare, removeFromCompare, clearCompare } = useCompare();
  return (
    <>
      <Text testID="count">{compareList.length}</Text>
      <Button title="add-a" onPress={() => addToCompare(a)} />
      <Button title="add-b" onPress={() => addToCompare(b)} />
      <Button title="add-c" onPress={() => addToCompare(c)} />
      <Button title="remove-a" onPress={() => removeFromCompare('a')} />
      <Button title="clear" onPress={() => clearCompare()} />
    </>
  );
}

function renderHarness() {
  render(
    <CompareProvider>
      <Harness />
    </CompareProvider>
  );
}

test('총을 담으면 개수가 늘어난다', () => {
  renderHarness();
  fireEvent.press(screen.getByText('add-a'));
  expect(screen.getByTestId('count').props.children).toBe(1);
});

test('최대 2개까지만 담긴다', () => {
  renderHarness();
  fireEvent.press(screen.getByText('add-a'));
  fireEvent.press(screen.getByText('add-b'));
  fireEvent.press(screen.getByText('add-c'));
  expect(screen.getByTestId('count').props.children).toBe(2);
});

test('빼기와 비우기가 동작한다', () => {
  renderHarness();
  fireEvent.press(screen.getByText('add-a'));
  fireEvent.press(screen.getByText('add-b'));
  fireEvent.press(screen.getByText('remove-a'));
  expect(screen.getByTestId('count').props.children).toBe(1);
  fireEvent.press(screen.getByText('clear'));
  expect(screen.getByTestId('count').props.children).toBe(0);
});
