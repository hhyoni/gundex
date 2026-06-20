import { getAllGuns, getGunById, getGunsByCategory, searchGuns } from './gunData';

test('getAllGuns는 모든 총기를 반환한다', () => {
  expect(getAllGuns().length).toBeGreaterThanOrEqual(8);
});

test('getGunById는 id로 한 개를 찾는다', () => {
  expect(getGunById('ak-47').name).toBe('AK-47');
});

test('getGunById는 없는 id면 undefined', () => {
  expect(getGunById('없는총')).toBeUndefined();
});

test("getGunsByCategory('pistol')는 권총만 반환한다", () => {
  const result = getGunsByCategory('pistol');
  expect(result.length).toBeGreaterThan(0);
  expect(result.every((g) => g.category === 'pistol')).toBe(true);
});

test("getGunsByCategory('all')는 전체를 반환한다", () => {
  expect(getGunsByCategory('all').length).toBe(getAllGuns().length);
});

test('searchGuns는 이름 부분일치(대소문자 무시)로 찾는다', () => {
  const result = searchGuns('ak');
  expect(result.some((g) => g.id === 'ak-47')).toBe(true);
});

test('searchGuns는 제조사로도 찾는다', () => {
  const result = searchGuns('glock');
  expect(result.some((g) => g.id === 'glock-17')).toBe(true);
});

test('searchGuns는 빈 문자열이면 전체를 반환한다', () => {
  expect(searchGuns('   ').length).toBe(getAllGuns().length);
});
