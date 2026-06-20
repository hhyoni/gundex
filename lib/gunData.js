import guns from '../data/guns.json';

export function getAllGuns() {
  return guns;
}

export function getGunById(id) {
  return guns.find((gun) => gun.id === id);
}

export function getGunsByCategory(category) {
  if (category === 'all') return guns;
  return guns.filter((gun) => gun.category === category);
}

export function searchGuns(query) {
  const q = query.trim().toLowerCase();
  if (q === '') return guns;
  return guns.filter(
    (gun) =>
      gun.name.toLowerCase().includes(q) ||
      gun.manufacturer.toLowerCase().includes(q)
  );
}
