import React, {useState, createContext, useContext, useEffect} from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import theme from "./theme.js";

const defaultContextData = {
    loadAnimation:false,
    dark: true,
    disableAnimation: () => {},
    toggle: () => {}
};

const ThemeContext = createContext(defaultContextData);
const useTheme = () => useContext(ThemeContext);

const useEffectDarkMode = () => {
    const [themeState, setThemeState] = useState({
        dark: false,
        hasThemeMounted: false,

     });

    const [animationState, setAnimation] = useState({
        loadAnimation: false
    });

    useEffect(() => {
        console.log(localStorage.getItem("dark"));
        const lsDark = localStorage.getItem("dark") === "true";
        // const lsDark = localStorage.getItem("dark") === "true" || localStorage.getItem("dark") === null;
        setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true });
    }, []);

    return [themeState, setThemeState, animationState, setAnimation];
};

const ThemeProvider = ({ children }) => {
    const [themeState, setThemeState, animationState, setAnimation] = useEffectDarkMode();

    if (!themeState.hasThemeMounted) {
        return <div />;
    }

    const disableAnimation = () => {
        setAnimation({loadAnimation:false});
    };

    const toggle = () => {
        setAnimation({loadAnimation:true});
        const dark = !themeState.dark;
        localStorage.setItem("dark", JSON.stringify(dark));
        setThemeState({ ...themeState, dark });
    };

    const computedTheme = themeState.dark ? theme("dark") : theme("light");

    return (
        <EmotionThemeProvider theme={computedTheme}>
            <ThemeContext.Provider
                value={{
                    animation: animationState.loadAnimation,
                    dark: themeState.dark,
                    toggle,
                    disableAnimation
                }}
            >
                {children}
            </ThemeContext.Provider>
        </EmotionThemeProvider>
    );
};

export { ThemeProvider, useTheme, ThemeContext };