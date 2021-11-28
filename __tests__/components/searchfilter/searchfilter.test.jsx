/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useSearchFilter from '../../../src/components/modules/shared/search/useSearchFilter';

describe('searchfilter', () => {
  it('given an input returns an array', () => {
    const { result } = renderHook(() => useSearchFilter([]));
    expect(Array.isArray(result.current.searchItems)).toBeTruthy();
  });


});
