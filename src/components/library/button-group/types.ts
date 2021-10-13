import React from 'react';
import { ActionButton, NavigationButton } from '../button/index';
import { StandardProps } from '../index';

/**
 * Defines how the buttons should be placed
 * @default left
 */
export type ButtonGroupPosition = 'left' | 'right' | 'center' | 'space-between';

/**
 * Interface for the buttongroup component. Expects a list of button with a specific type
 */
export interface ButtonGroupProps extends Omit<StandardProps, 'children'> {
  children: React.ReactElement<typeof ActionButton | typeof NavigationButton>[];
  position?: ButtonGroupPosition;
}
