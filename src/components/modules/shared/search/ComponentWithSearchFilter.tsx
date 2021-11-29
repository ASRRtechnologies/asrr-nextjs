import React from "react";
import useSearchFilter, { SearchFilters } from "@/modules/shared/search/useSearchFilter";
import Select from "react-select";
import { GeneralArticleProps } from "@/modules/shared/article/types";
import Section from "@/modules/shared/section/Section";
import { authorFilterOptions, dateFilterOptions, tagFilterOptions } from "../../../../data/searchfilter/searchOptions";

interface SearchFilterProps {
  render: (searchItems: GeneralArticleProps[]) => React.ReactElement;
  searchItems: GeneralArticleProps[];
}

function SearchFilter(props: SearchFilterProps) {
  const { searchItems, activeFilters, toggleFilters } = useSearchFilter(
    props.searchItems
  );

  const toggleSingleFilter = (
    e: { value: any; label: string },
    filter: keyof SearchFilters
  ) => {
    toggleFilters(filter, e.value);
  };

  const toggleMultiFilter = (e: any, filter: keyof SearchFilters) => {
    toggleFilters(filter, e);
  };

  return (
    <Section>
      <span>
        <h5>Datum</h5>
        <Select
          defaultValue={dateFilterOptions.filter(
            ({ value }) => value === activeFilters.dateDescending
          )}
          isClearable={false}
          options={dateFilterOptions}
          isSearchable={false}
          onChange={(e) => toggleSingleFilter(e, 'dateDescending')}
        />
      </span>

      <span>
        <h5>Tags</h5>
        <Select
          defaultValue={tagFilterOptions.filter(({ value }) =>
            activeFilters.tags.includes(value)
          )}
          isMulti={true}
          name="tags"
          isClearable={true}
          isSearchable={true}
          options={tagFilterOptions}
          classNamePrefix="select"
          onChange={(e) => toggleMultiFilter(e, "tags")}
        />
      </span>

      <span>
        <h5>Tags</h5>
        <Select
          defaultValue={authorFilterOptions.filter(({ value }) =>
            activeFilters.authors.includes(value)
          )}
          isMulti={true}
          name="tags"
          isClearable={true}
          isSearchable={true}
          options={authorFilterOptions}
          classNamePrefix="select"
          onChange={(e) => toggleMultiFilter(e, "tags")}
        />
      </span>
      {props.render(searchItems)}
    </Section>
  );
}

export default SearchFilter;
