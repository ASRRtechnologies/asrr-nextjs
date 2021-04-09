/**
 * Props which the Header expects when rendering the different types of buttons
 */
import {StandardProps} from "@/utillities/global_types";
import HeaderTab from "@/utillities/header/sub-components/HeaderTab";


// export type HeaderProps = NavigationButtonProps | ActionButtonProps

export type HeaderTab = typeof HeaderTab

export interface HeaderSectionProps extends StandardProps<HeaderTab> {

}
