import React from 'react';
import Sun from '@/icons/Sun';
import Moon from '@/icons/Moon';
import Button from '@/modules/shared/buttons/Button';

const MoonButton = ({ toggleDarkmode, visible }) => {
  return (
    <Button
      title={undefined}
      onClick={toggleDarkmode}
      mode={visible ? 'darkmode' : 'light'}
      children={<Moon />}
      buttonType={{
        buttonType: 'icon',
      }}
    />
  );
};

const SunButton = ({ toggleDarkmode, visible }) => {
  return (
    <Button
      title={undefined}
      onClick={toggleDarkmode}
      mode={visible ? 'darkmode' : 'light'}
      children={<Sun />}
      buttonType={{
        buttonType: 'icon',
      }}
    />
  );
};

function DarkMode({ darkmode, toggleDarkmode, visible }) {
  return (
    <>
      {darkmode ? (
        <SunButton visible={visible} toggleDarkmode={toggleDarkmode} />
      ) : (
        <MoonButton visible={visible} toggleDarkmode={toggleDarkmode} />
      )}
    </>
  );
}

export default DarkMode;
