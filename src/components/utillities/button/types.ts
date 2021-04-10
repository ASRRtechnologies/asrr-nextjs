/**
 * List of types of buttons needed to render the proper button
 */
import {StandardProps} from "@/utillities/global_types";

declare type ButtonType = "navigation-button" | "action-button";

/**
 * List of types of buttons needed to render the proper button
 */
export declare type ButtonStyle =
    "default"
    | "outlined"
    | "disabled"
    | "hover-disabled-outlined"
    | "hover-disabled-default"
    | "text-only"

/**
 * Interface that all buttons inherit
 */
export interface BaseButtonProps extends StandardProps {
    text: string,
    type: ButtonType,
    buttonStyle?: ButtonStyle
}

/**
 * Header used for performing navigations in nextjs
 */
export interface NavigationButtonProps extends BaseButtonProps {
    to: string,
    type: "navigation-button"
}

/**
 * Native dom button used for performing form or functional methods
 */
export interface ActionButtonProps extends BaseButtonProps {
    onClick: () => void,
    type: "action-button"
}

/**
 * Props which the Header expects when rendering the different types of buttons
 */
export type ButtonProps = NavigationButtonProps | ActionButtonProps
