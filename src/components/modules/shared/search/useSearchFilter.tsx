import { useEffect, useState } from "react";
import { Author } from "../../../../data/Authors";
import { GeneralArticleProps } from "@/modules/shared/article/types";

export type SearchFilters = {
  dateDescending: boolean; //boolean
  authors: string[];
  tags?: string[];
};

type SearchAble = GeneralArticleProps;

//Loops over an array and returns an array of properties
const getPropertiesFromObject = (
  items: SearchAble[],
  property: keyof SearchAble
) => {
  return items.map((item) => item[property]);
};

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

const filterAuthors = (items: SearchAble[], tagsSelected: string[]) => {
  if (tagsSelected.length > 0) {
    return [...items].filter(({ info }) =>
      info.tags.some((item) => tagsSelected.includes(item))
    );
  }
  return items;
};

const useSearchFilter = (items: SearchAble[]) => {
  const [searchItems, setSearchItems] = useState([]);

  const [activeFilters, setActiveFilters] = useState<SearchFilters>({
    dateDescending: true,
    authors: [],
    tags: [],
  });

  const toggleFilters = (property: keyof SearchFilters, value) => {
    setActiveFilters({
      ...activeFilters,
      [property]: value,
    });
  };

  const filterItems = () => {
    return filterTags(
      sortDates(items, activeFilters.dateDescending),
      activeFilters.tags
    );
  };

  useEffect(() => {
    const filteredItems = filterItems();
    setSearchItems(filteredItems);
  }, [items, activeFilters]);

  return { searchItems, activeFilters, toggleFilters };
};

export default useSearchFilter;
