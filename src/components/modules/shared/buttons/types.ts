export type ButtonMode = "darkmode" | "dark" | "light";

export interface ButtonThemeProps {
    theme?: {
        button: {
            dark: {
                background: string,
                shadow: string,
                font: string
            }
            light: {
                background: string,
                shadow: string,
                font: string
            }
            darkmode: {
                background: string,
                shadow: string,
                font: string
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

export type ButtonTypeProps = (
    | NavigationButtonProps
    | NormalButtonProps
    | SubmitButtonProps
    )

export interface ButtonProps {
    buttonType: ButtonTypeProps,
}
