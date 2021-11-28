import { useEffect, useState } from "react";

type SearchFilters = {
  title: string;
  dateAflopend: boolean; //boolean
  author: string;
  tags?: string[];
};

type SearchAble = {
  title: string;
  date: string; //boolean
  author: string;
  tags?: string[];
};

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

export const useSearchFilter = (items: SearchAble[]) => {
  const [searchItems, setSearchItems] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    setSearchItems(items);
  }, [items]);

};
