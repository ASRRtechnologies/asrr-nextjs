import React, {useState, createContext, useContext, useEffect} from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import theme from "./theme.js";

const defaultContextData = {
    dark: true,
    toggle: () => {}
};

const ThemeContext = createContext(defaultContextData);
const useTheme = () => useContext(ThemeContext);

const useEffectDarkMode = () => {
    const [themeState, setThemeState] = useState({
        dark: false,
        hasThemeMounted: false,
     });

    useEffect(() => {
        const lsDark = localStorage.getItem("dark") === "true";
        setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true });
    }, []);

    return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
    const [themeState, setThemeState] = useEffectDarkMode();

    if (!themeState.hasThemeMounted) {
        return <div />;
    }

    const toggle = () => {
        const dark = !themeState.dark;
        localStorage.setItem("dark", JSON.stringify(dark));
        setThemeState({ ...themeState, dark });
    };

    const computedTheme = themeState.dark ? theme("dark") : theme("light");

    return (
        <EmotionThemeProvider theme={computedTheme}>
            <ThemeContext.Provider
                value={{
                    dark: themeState.dark,
                    toggle,
                }}
            >
                {children}
            </ThemeContext.Provider>
        </EmotionThemeProvider>
    );
};

export { ThemeProvider, useTheme, ThemeContext };
