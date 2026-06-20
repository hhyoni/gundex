import { createContext, useContext, useState } from 'react';
import { addToList, removeFromList, isInList } from '../lib/compareLogic';

const CompareContext = createContext(null);

export function CompareProvider({ children }) {
  const [compareList, setCompareList] = useState([]);

  const addToCompare = (gun) => {
    const next = addToList(compareList, gun);
    const added = next.length !== compareList.length;
    if (added) setCompareList(next);
    return added;
  };

  const removeFromCompare = (id) =>
    setCompareList((list) => removeFromList(list, id));

  const clearCompare = () => setCompareList([]);

  const isInCompare = (id) => isInList(compareList, id);

  return (
    <CompareContext.Provider
      value={{ compareList, addToCompare, removeFromCompare, clearCompare, isInCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  return useContext(CompareContext);
}
