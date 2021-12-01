import { useEffect, useState } from "react";
import { GeneralArticleProps } from "@/modules/shared/article/types";

export type SearchFilters = {
  dateDescending: boolean; //boolean
  authors: { value: string; label: string }[];
  tags?: string[];
};

type SearchAble = GeneralArticleProps;

const sortDates = (items: SearchAble[], descending: boolean) => {
  //Important dont mutate props, use spread for new array otherwise errors
  return [...items].sort((a, b) => {
    const d1 = new Date(a.info.date).getTime();
    const d2 = new Date(b.info.date).getTime();

    if (descending) {
      if (d1 < d2) {
        return 1;
      }
      return -1;
    }

    if (d1 < d2) {
      return -1;
    }
    return 1;
  });
};

const filterTags = (items: SearchAble[], tagsSelected: string[]) => {
  if (tagsSelected.length > 0) {
    return [...items].filter(({ info }) =>
      info.tags.some((item) => tagsSelected.includes(item))
    );
  }
  return items;
};

const filterAuthors = (
  items: SearchAble[],
  authorsSelected: { value: string; label: string }[]
) => {
  if (authorsSelected.length > 0) {
    const authors = authorsSelected.map(({ value }) => value); //Get selected authors in string form
    return [...items].filter((data) => {
      return authors.includes(data.info.author);
    });
  }
  return items;
};

const useSearchFilter = (items: SearchAble[]) => {
  const [searchItems, setSearchItems] = useState([]);

  const [activeFilters, setActiveFilters] = useState<SearchFilters>({
    dateDescending: true,
    authors: [],
    tags: []
  });

  const toggleFilters = (property: keyof SearchFilters, value) => {
    setActiveFilters({
      ...activeFilters,
      [property]: value
    });
  };

  //TODO use functional chaining for better readability
  const filterItems = () => {
    return filterAuthors(
      filterTags(
        sortDates(items, activeFilters.dateDescending),
        activeFilters.tags
      ),
      activeFilters.authors
    );
  };

  useEffect(() => {
    const filteredItems = filterItems();
    setSearchItems(filteredItems);
  }, [items, activeFilters]);

  return { searchItems, activeFilters, toggleFilters };
};

export default useSearchFilter;
