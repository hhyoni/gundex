export const CATEGORIES = [
  { code: 'pistol', label: '권총' },
  { code: 'rifle', label: '소총' },
  { code: 'shotgun', label: '산탄총' },
  { code: 'smg', label: '기관단총' },
  { code: 'sniper', label: '저격소총' },
  { code: 'machinegun', label: '기관총' },
];

export function categoryLabel(code) {
  const found = CATEGORIES.find((c) => c.code === code);
  return found ? found.label : code;
}
