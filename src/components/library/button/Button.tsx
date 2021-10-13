import React from 'react';
import { ButtonProps } from '@/library/button/types';
import NavigationButton from '@/library/button/sub-components/NavigationButton';
import ActionButton from '@/library/button/sub-components/ActionButton';

function Button(props: ButtonProps) {

  const renderComponent = () => {
    if (props.type === 'navigation-button')
      return <NavigationButton {...props} />;

    if (props.type === 'action-button')
      return <ActionButton {...props} />;

    throw new Error('Header component type not specified');
  };

  return (
    <>
      {renderComponent()}
    </>
  );
}

export default Button;
