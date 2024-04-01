import { useState, useEffect } from 'react';
import { SortingFunction, Predicate, User } from '../types';

export const useFormattedData = (initialData: User[]) => {
  const [data, _] = useState<User[]>(initialData);
  const [formattedData, setFormattedData] = useState<User[]>(initialData);

  const search = (searchTerm: string) => {
    const filteredData = data.filter((user) =>
      Object.values(user).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFormattedData(filteredData);
    return useFormattedData(filteredData);
  };

  const filter = (predicate: Predicate<User>) => {
    const filteredData = data.filter(predicate);
    setFormattedData(filteredData);
    return useFormattedData(filteredData);
  };

const sortBy = (filterCriteria: string | SortingFunction<User>) => {
  let sortedData;
  if (typeof filterCriteria === 'string') {
    sortedData = [...formattedData].sort((a, b) => (a[filterCriteria as keyof User] as string).localeCompare(b[filterCriteria as keyof User] as string));
  } else {
    sortedData = [...formattedData].sort(filterCriteria);
  }
  setFormattedData(sortedData);
  return useFormattedData(sortedData);
};

  useEffect(() => {
    setFormattedData(data);
  }, [data]);

  return { formatted: formattedData, search, filter, sortBy };
};

