import { isInList, addToList, removeFromList } from './compareLogic';

const a = { id: 'a', name: 'A' };
const b = { id: 'b', name: 'B' };
const c = { id: 'c', name: 'C' };

test('isInList는 포함 여부를 알려준다', () => {
  expect(isInList([a], 'a')).toBe(true);
  expect(isInList([a], 'b')).toBe(false);
});

test('addToList는 새 총을 추가한다', () => {
  expect(addToList([a], b)).toEqual([a, b]);
});

test('addToList는 이미 있으면 추가하지 않는다', () => {
  expect(addToList([a], a)).toEqual([a]);
});

test('addToList는 2개가 차면 추가하지 않는다', () => {
  expect(addToList([a, b], c)).toEqual([a, b]);
});

test('addToList는 원본 배열을 바꾸지 않는다', () => {
  const list = [a];
  addToList(list, b);
  expect(list).toEqual([a]);
});

test('removeFromList는 id로 제거한다', () => {
  expect(removeFromList([a, b], 'a')).toEqual([b]);
});
