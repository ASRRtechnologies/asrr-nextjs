import { SerializedStyles } from '@emotion/react';
import {
  ButtonStyleDefault,
  ButtonStyleDefaultHoverDisabled,
  ButtonStyleDisabled,
  ButtonStyleOutlined,
  ButtonStyleOutlinedHoverDisabled
} from '@/library/button/shared-styles/ButtonStyles';
import { ButtonStyle } from '@/library/button/types';

/**
 * Hook that takes in a button-style a prop and returns a serialized css object
 */
export const useButtonStyles = (styles: ButtonStyle): SerializedStyles => {
  switch (styles) {
    case 'default':
      return ButtonStyleDefault;
    case 'outlined':
      return ButtonStyleOutlined;
    case 'hover-disabled-outlined':
      return ButtonStyleOutlinedHoverDisabled;
    case 'hover-disabled-default':
      return ButtonStyleDefaultHoverDisabled;
    case 'disabled':
      return ButtonStyleDisabled;
    default:
      return ButtonStyleDefault;
  }
};
