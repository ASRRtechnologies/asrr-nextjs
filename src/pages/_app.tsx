import {useState} from 'react';
import {AppProps} from 'next/app';
import {setCookies} from 'cookies-next';
import Head from 'next/head';
import {ColorScheme, ColorSchemeProvider, MantineProvider} from '@mantine/core';
import {NotificationsProvider} from '@mantine/notifications';
import {HeaderMenu} from "../components/header/desktop/Header";
import {darkTheme, lightTheme} from "../theme/theme";
import {globalComponentStyles} from "../styles/global-component-styles";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
    const {Component, pageProps} = props;
    const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

    const toggleColorScheme = (value?: ColorScheme) => {
        const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
        setColorScheme(nextColorScheme);
        setCookies('mantine-color-scheme', nextColorScheme, {maxAge: 60 * 60 * 24 * 30});
    };

    return (
        <>
            <Head>
                <title>Mantine next example</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                <link rel="shortcut icon" href="/favicon.svg"/>
            </Head>

            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider styles={globalComponentStyles}
                                 theme={colorScheme === "light" ? lightTheme : darkTheme}
                                 withGlobalStyles
                                 withNormalizeCSS>
                    <NotificationsProvider>
                        <>
                            <HeaderMenu/>
                            <Component {...pageProps} />
                        </>
                    </NotificationsProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    );
}

// App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
//   colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
// });
