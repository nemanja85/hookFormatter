export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: 'Male' | 'Female';
  zip: number;
  birthdate: string;
  city: string;
};


export type SortingFunction<T> = (a: T , b: T) => number;
export type Predicate<T> = (item: T) => boolean;

// export type FormattedData = {
//   formatted: User[];
//   filter: (predicate: (data: User) => unknown) => void;
//   sortBy: (filterCriteria: string | SortingFunction<User>) => void;
//   search: (value: string) => void;
// };
