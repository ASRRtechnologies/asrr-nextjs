/**
 * List of types of buttons needed to render the proper button
 */
declare type ButtonType = "navigation-button" | "action-button";

/**
 * Interface that all buttons inherit
 */
export interface BaseButtonProps {
    text: string,
    type: ButtonType
}

/**
 * Button used for performing navigations in nextjs
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
 * Props which the Button expects when rendering the different types of buttons
 */
export type ButtonProps = NavigationButtonProps | ActionButtonProps
