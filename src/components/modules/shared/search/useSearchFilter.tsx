import { useEffect, useState } from 'react';
import { Author, authors } from '../../../../data/Authors';
import { tags } from '../../../../data/Tags';
import { GeneralArticleProps } from '@/modules/shared/article/types';

export type SearchFilters = {
  dateDescending: boolean; //boolean
  authors: Author[];
  tags?: string[];
};

type SearchAble = GeneralArticleProps;

//Searchbalk - input op titel naam
// datum: oplopend | aflopend - radio button
// tags: checkbox of list of tags
// author: checkbox of list of authors

//Loops over an array and returns an array of properties
const getPropertiesFromObject = (
  items: SearchAble[],
  property: keyof SearchAble
) => {
  return items.map((item) => item[property]);
};

const useSearchFilter = (items: SearchAble[]) => {
  const [searchItems, setSearchItems] = useState(items);
  const [filterList] = useState<SearchFilters>({
    dateDescending: true,
    authors: authors,
    tags: tags,
  });

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

  useEffect(() => {
    setSearchItems(items);
  }, [items, activeFilters]);

  return { searchItems, filterList, activeFilters, toggleFilters };
};

export default useSearchFilter;
