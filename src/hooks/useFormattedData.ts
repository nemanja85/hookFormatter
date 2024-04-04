import {useEffect, useMemo, useState} from 'react';
import {Predicate, SortingFunction} from '../types';

export const useFormattedData = <T extends object>(initialData: T[]) => {
  const [formattedData, setFormattedData] = useState<T[]>(initialData);

  const search = <T>(searchTerm: string) => {
    const searchedData = formattedData.filter((x) =>
      Object.values(x).some((value: any) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFormattedData(searchedData);
  };

  const filter = useMemo(() => {
    return (predicate: Predicate<T>) => {
      const filteredData = formattedData.filter(predicate);
      setFormattedData(filteredData);
    };
  }, [initialData]);

  const sortBy = (filterCriteria: keyof T | SortingFunction<T>) => {
    let sortedData;
    if (typeof filterCriteria === 'string') {
      sortedData = [...formattedData].sort((a, b) =>
       a[filterCriteria] > b[filterCriteria] ? 1 : b[filterCriteria] > a[filterCriteria] ? -1 : 0);
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
