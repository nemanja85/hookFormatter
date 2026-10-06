import { useCallback, useMemo, useState } from "react";
import type { Predicate, SortingFunction } from "../types";

type SortCriteria<T> = keyof T | SortingFunction<T>;

export function useFormattedData<T extends object>(initialData: T[]) {
  const [searchTerm, setSearchTerm] = useState("");
  const [predicate, setPredicate] = useState<Predicate<T> | null>(null);
  const [sortCriteria, setSortCriteria] = useState<SortCriteria<T> | null>(null);

  const formatted = useMemo(() => {
    let result = initialData;

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter((item) =>
          Object.values(item).some((value) => {
            if (value === null || value === undefined) return false;
            return String(value).toLowerCase().includes(term);
          }),
      );
    }

    if (predicate) {
      result = result.filter(predicate);
    }

    if (sortCriteria) {
      result = [...result].sort((a, b) => {
        if (typeof sortCriteria === "function") return sortCriteria(a, b);
        const av = a[sortCriteria];
        const bv = b[sortCriteria];
        if (av === bv) return 0;
        return av > bv ? 1 : -1;
      });
    }

    return result;
  }, [initialData, searchTerm, predicate, sortCriteria]);

  const search = useCallback((term: string) => setSearchTerm(term), []);
  const filter = useCallback((p: Predicate<T>) => setPredicate(() => p), []);
  const sortBy = useCallback((c: SortCriteria<T>) => setSortCriteria(c), []);
  const reset = useCallback(() => {
    setSearchTerm("");
    setPredicate(null);
    setSortCriteria(null);
  }, []);

  return { formatted, search, filter, sortBy, reset };
}