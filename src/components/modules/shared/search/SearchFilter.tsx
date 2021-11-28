import React from 'react';
import { SearchFilters } from '@/modules/shared/search/useSearchFilter';
import Select from 'react-select';

interface SearchFilterProps {
  filterList: SearchFilters;
}

function SearchFilter(props: SearchFilterProps) {
  const { filterList } = props;

  return (
    <div>
      <span>
        <p>Datum Sorteren:</p>
        <span>
          <input
            type="radio"
            id="datum-aflopend"
            name="aflopend"
            value={'true'}
            checked={filterList.dateDescending}
          />
          <label htmlFor="datum-aflopend">Datum aflopend</label>
        </span>
        <span>
          <input
            type="radio"
            id="datum-oplopend"
            name="oplopend"
            value={'false'}
            checked={!filterList.dateDescending}
          />
          <label htmlFor="datum-oplopend">Datum Oplopend</label>
        </span>
      </span>
    </div>
  );
}

export default SearchFilter;
