export type ButtonMode = 'darkmode' | 'dark' | 'light';

export interface ButtonThemeProps {
  theme?: {
    button: {
      dark: {
        background: string;
        shadow: string;
        font: string;
        border: string;
      };
      light: {
        background: string;
        shadow: string;
        font: string;
        border: string;
      };
      darkmode: {
        background: string;
        shadow: string;
        font: string;
        border: string;
      };
    };
  };
}

export type NavigationButtonProps = ButtonThemeProps & {
  buttonType: 'navigation';
  href: string;
};

export type NormalButtonProps = ButtonThemeProps & {
  buttonType: 'normal';
  href?: never;
};

export type SubmitButtonProps = ButtonThemeProps & {
  buttonType: 'submit';
  href?: never;
};

export type IconButtonProps = ButtonThemeProps & {
  buttonType: 'icon';
  href?: never;
  title?: never;
};

export type ButtonTypeProps =
  | NavigationButtonProps
  | NormalButtonProps
  | SubmitButtonProps
  | IconButtonProps;

export interface ButtonProps extends ButtonThemeProps {
  buttonType: ButtonTypeProps;
  className?: string;
  title: string;
  mode: ButtonMode;

  [x: string]: any;
}
