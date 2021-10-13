import { StandardProps } from '@/library/index';

/**
 * Div container that adheres to the global-max width
 */
export interface SubSectionProps extends StandardProps {
  maxWidth: boolean;
}

/**
 * Section container used for having even sections throughout the site
 */
export interface SectionProps extends StandardProps {
  padding: boolean;
}
