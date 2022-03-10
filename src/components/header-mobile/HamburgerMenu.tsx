import React from 'react';
import hamburgerStyles from './hamburger.module.scss';
import styled from '@emotion/styled';

type HamburgerStyle = {
  visible: boolean;
  open: boolean;
  theme: {
    navigation: {
      backgroundMobile: string;
      shadow: string;
      font: string;
      fontWhite: string;
    };
  };
};

const StyledHamburgerMenu = styled('nav')<HamburgerStyle>`
  .${hamburgerStyles.barOne} {
    background-color: ${(props) =>
      props.open || props.visible
        ? props.theme.navigation.font
        : props.theme.navigation.fontWhite};
  }

  .${hamburgerStyles.barTwo} {
    background-color: ${(props) =>
      props.open || props.visible
        ? props.theme.navigation.font
        : props.theme.navigation.fontWhite};
  }

  .${hamburgerStyles.barThree} {
    background-color: ${(props) =>
      props.open || props.visible
        ? props.theme.navigation.font
        : props.theme.navigation.fontWhite};
  }
`;

function HamburgerMenu({ open, onClick, visible }) {
  return (
    <StyledHamburgerMenu
      visible={visible}
      open={open}
      onClick={onClick}
      className={`${hamburgerStyles.hamburger} ${
        open && hamburgerStyles.hamburgerOpen
      }`}
      theme={undefined}
    >
      <div className={hamburgerStyles.barOne} />
      <div className={hamburgerStyles.barTwo} />
      <div className={hamburgerStyles.barThree} />
    </StyledHamburgerMenu>
  );
}

export default HamburgerMenu;
