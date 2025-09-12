import { useCallback, useEffect, useState } from 'react';
import { Predicate, SortingFunction } from '../types';

export const useFormattedData = <T extends object>(initialData: T[]) => {
  const [formattedData, setFormattedData] = useState<T[]>(initialData);

  const search = <T>(searchTerm: string) => {
    const searchedData = formattedData.filter(item =>
      Object.values(item).some(value => {
        if (value === null || value === undefined) {
          return false;
        }
        return String(value).toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
    setFormattedData(searchedData);
  };

  const filter = useCallback(() => {
    return (predicate: Predicate<T>) => {
      if (typeof predicate !== 'function') {
        console.error('Predicate have to be function for filtering');
        return;
      }

      const filteredData = formattedData.filter(predicate);
      setFormattedData(filteredData);
    };
  }, [initialData, setFormattedData]);

  const sortBy = (filterCriteria: keyof T | SortingFunction<T>) => {
    let sortedData;
    if (typeof filterCriteria === 'string') {
      sortedData = [...formattedData].sort((a, b) =>
        a[filterCriteria] > b[filterCriteria] ? 1 : b[filterCriteria] > a[filterCriteria] ? -1 : 0
      );
      setFormattedData(sortedData);
      return;
    }
    if (typeof filterCriteria === 'function') {
      sortedData = [...formattedData].sort(filterCriteria);
      setFormattedData(sortedData);
      return;
    }
    throw new Error('Unsupported type!');
  };

  useEffect(() => {
    setFormattedData(formattedData);
  }, [formattedData]);

  return { formatted: formattedData, search, filter, sortBy };
};
