import { useMemo, useState } from 'react';
import { Predicate, SortingFunction, User } from '../types';

export const useFormattedData = (initialData: User[]) => {
  const [formattedData, setFormattedData] = useState<User[]>(initialData);

  const search = (searchTerm: string) => {
    const filteredData = formattedData.filter((user) =>
      Object.values(user).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFormattedData(filteredData);
  };

    const filter = useMemo(() => {
      const filterFunction = (predicate: Predicate<User>) => {
        const filteredData = initialData.filter(predicate);
        setFormattedData(filteredData);
      };
      return filterFunction;
    }, [initialData]);

const sortBy = (filterCriteria: keyof User | SortingFunction<User>) => {
  let sortedData;
  if (typeof filterCriteria === 'string') {
    sortedData = [...formattedData].sort((a, b) => (a[filterCriteria] as string).localeCompare(b[filterCriteria] as string));
  } else {
    sortedData = [...formattedData].sort(filterCriteria);
  }
  setFormattedData(sortedData);
};

  return { formatted: formattedData, search, filter, sortBy };
};

