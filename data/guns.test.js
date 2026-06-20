import guns from './guns.json';
import { CATEGORIES } from './categories';

const REQUIRED = [
  'id', 'name', 'manufacturer', 'country', 'category', 'caliber',
  'weight', 'length', 'year', 'description', 'imageUrl', 'imageCredit', 'sourceUrl',
];
const VALID_CATEGORIES = CATEGORIES.map((c) => c.code);

test('총기 데이터가 8개 이상 있다', () => {
  expect(guns.length).toBeGreaterThanOrEqual(8);
});

test('모든 총기가 13개 필드를 전부 가진다', () => {
  for (const gun of guns) {
    for (const field of REQUIRED) {
      expect(gun[field] === undefined || gun[field] === '').toBe(false);
    }
  }
});

test('category는 정해진 6종 중 하나다', () => {
  for (const gun of guns) {
    expect(VALID_CATEGORIES).toContain(gun.category);
  }
});

test('id는 중복이 없다', () => {
  const ids = guns.map((g) => g.id);
  expect(new Set(ids).size).toBe(ids.length);
});

test('year는 숫자다', () => {
  for (const gun of guns) {
    expect(typeof gun.year).toBe('number');
  }
});
