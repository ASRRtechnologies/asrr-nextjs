import React from 'react';
import buttonStyles from './buttonStyles.module.scss';
import { ButtonProps } from '@/modules/shared/buttons/types';
import NavigationButton from '@/modules/shared/buttons/NavigationButton';
import NormalButton from '@/modules/shared/buttons/NormalButton';
import SubmitButton from '@/modules/shared/buttons/SubmitButton';
import IconButton from '@/modules/shared/buttons/IconButton';

const renderButton = (props: ButtonProps) => {
  switch (props.buttonType.buttonType) {
    case 'navigation':
      return (
        <NavigationButton
          {...props}
          className={`${props.className} ${buttonStyles.button}`}
        />
      );
    case 'normal':
      return (
        <NormalButton
          {...props}
          className={`${props.className} ${buttonStyles.button}`}
        />
      );
    case 'submit':
      return (
        <SubmitButton
          {...props}
          className={`${props.className} ${buttonStyles.button}`}
        />
      );
    case 'icon':
      return (
        <IconButton
          {...props}
          className={`${props.className} ${buttonStyles.button} ${buttonStyles.iconButton}`}
        >
          {props.children}
        </IconButton>
      );
  }
};

function Button(props: ButtonProps) {
  return <>{renderButton(props)}</>;
}

export default Button;
