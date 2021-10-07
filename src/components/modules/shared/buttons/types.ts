import {ReactElement} from "react";

export type ButtonMode = "darkmode" | "dark" | "light";

export interface ButtonThemeProps {
    theme?: {
        button: {
            dark: {
                background: string,
                shadow: string,
                font: string,
                border: string
            }
            light: {
                background: string,
                shadow: string,
                font: string,
                border: string
            }
            darkmode: {
                background: string,
                shadow: string,
                font: string,
                border: string
            }
        }
    }
}

export type NavigationButtonProps = ButtonThemeProps & {
    buttonType: "navigation", href: string, title: string, mode: ButtonMode, className?: string
}

export type NormalButtonProps = ButtonThemeProps & {
    buttonType: "normal", href?: never, title: string, mode: ButtonMode, className?: string
}

export type SubmitButtonProps = ButtonThemeProps & {
    buttonType: "submit", href?: never, title: string, mode: ButtonMode, className?: string
}

export type IconButtonProps = ButtonThemeProps & {
    buttonType: "icon", href?: never, title?: never, mode: ButtonMode, className?: string, children: ReactElement<SVGElement>, [x: string] : any
}

export type ButtonTypeProps = (
    | NavigationButtonProps
    | NormalButtonProps
    | SubmitButtonProps
    | IconButtonProps
    )

export interface ButtonProps {
    buttonType: ButtonTypeProps,
}
