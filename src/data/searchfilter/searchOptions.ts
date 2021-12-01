import { authors } from '../Authors';
import { tags } from '../Tags';

export const authorFilterOptions = authors.map(({ name }) => {
  return { value: name, label: name };
});

export const tagFilterOptions = tags.map((tag) => {
  return { value: tag, label: tag };
});

export const dateFilterOptions = [
  { value: true, label: 'Aflopend' },
  { value: false, label: 'Oplopend' },
];
