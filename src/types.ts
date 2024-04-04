export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  zip: number;
  birthdate: string;
  city: string;
};

export type SortingFunction<T> = (a: T, b: T) => number;
export type Predicate<T> = (item: T) => boolean;
