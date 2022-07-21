import {CSSObject} from "@mantine/styles/lib/tss";
import {MantineTheme} from "@mantine/styles/lib/theme/types";
import {ButtonStylesParams} from "@mantine/core";

declare type ProviderStyles = Record<string, Record<string, CSSObject> | ((theme: MantineTheme, params: any) => Record<string, CSSObject>)>;

//https://mantine.dev/theming/mantine-provider/#styles-on-mantineprovider
export const globalComponentStyles: ProviderStyles = {
    Button: (theme) => ({
        // Shared button styles are applied to all buttons
        root: {height: "auto", padding: '12px 16px', borderRadius: theme.radius.md},
    }),
}
