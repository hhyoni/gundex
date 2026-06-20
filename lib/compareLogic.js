export function isInList(list, id) {
  return list.some((gun) => gun.id === id);
}

export function addToList(list, gun) {
  if (isInList(list, gun.id)) return list;
  if (list.length >= 2) return list;
  return [...list, gun];
}

export function removeFromList(list, id) {
  return list.filter((gun) => gun.id !== id);
}
