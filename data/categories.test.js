import { CATEGORIES, categoryLabel } from './categories';

test('분류 6종이 있다', () => {
  expect(CATEGORIES).toHaveLength(6);
});

test('코드값을 한글 표시값으로 바꾼다', () => {
  expect(categoryLabel('rifle')).toBe('소총');
  expect(categoryLabel('pistol')).toBe('권총');
});

test('모르는 코드는 그대로 반환한다', () => {
  expect(categoryLabel('unknown')).toBe('unknown');
});
