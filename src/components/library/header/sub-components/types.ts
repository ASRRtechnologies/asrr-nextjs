/**
 * Props which the Header expects when rendering the different types of buttons
 */
import { StandardProps } from '@/library/index';
import HeaderTab from '@/library/header/sub-components/HeaderTab';


// export type HeaderProps = NavigationButtonProps | ActionButtonProps

export type HeaderTab = typeof HeaderTab

export interface HeaderSectionProps extends StandardProps<HeaderTab> {

}
