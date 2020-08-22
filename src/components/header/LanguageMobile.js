import React, {useEffect, useState} from 'react'
import useI18n from '../../hooks/use-i18n'
import EN from '../../locales/en'
import NL from '../../locales/nl'
import styled from '@emotion/styled'
import {motion} from "framer-motion";
import {useTheme} from "../../context/theme/ThemeContext";

const Wrapper = styled('div')`
    box-shadow: ${props => props.theme.header.shadow};
    a{color: ${props => props.theme.fonts.title}!important;};
    background-color: ${props => props.theme.header.background};

`

function Language(props) {
    const i18n = useI18n();
    const [languages, setLanguage] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);
    const darkmode = useTheme().dark;

    //Set languages to the ones which arent equal to the locale
    // const filterLanguages = () => filterLanguage(languages.filter((x) => x !== i18n.activeLocale));;

    const setSelectedLanguage = (language) => {
        if (window.localStorage.getItem('language') === 'en' || window.localStorage.getItem('language') === false) {
            i18n.locale('en', EN)
            setLanguage(['nl'])
        } else {
            i18n.locale('nl', NL)
            setLanguage(['en'])
        }
    }

    const setUnselectedLanguages = (language) => {
        if (language === 'nl') {
            i18n.locale('nl', NL)
            window.localStorage.setItem('language', 'nl')
            setLanguage(['en'])
        } else if (language === 'en') {
            i18n.locale('en', EN)
            window.localStorage.setItem('language', 'en')
            setLanguage(['nl'])
        } else {
            i18n.locale('en', EN)
            window.localStorage.setItem('language', 'en')
            setLanguage(['nl'])
        }

    }

    useEffect(() => {
        setSelectedLanguage()
    }, [])

    return (
        <div className="language-mobile">
            <a style={{color: "#ff6961"}} className="bold" onClick={() => setMenuOpen(!menuOpen)}>{i18n.activeLocale.toUpperCase()}</a>
            {languages.map((d) => <a className={`${!darkmode ? "animated-link-dark" : "animated-link-light"}`}

                                     onClick={() => {
                                         setUnselectedLanguages(d)
                                     }}>{d.toUpperCase()}</a>)}
        </div>
    )
}

export default Language
