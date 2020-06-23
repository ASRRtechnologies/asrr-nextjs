import React, {useEffect, useState, useRef} from 'react';
import useI18n from "../../hooks/use-i18n";
import EN from "../../locales/en";
import NL from "../../locales/nl";
import styled from "@emotion/styled";

const Wrapper = styled('div')`
    box-shadow: ${props => props.theme.header.shadow};
    a{color: ${props => props.theme.fonts.title}!important;};
    background-color: ${props => props.theme.header.background};
`
function Language(props) {
    const i18n = useI18n();
    const [languages, setLanguage] = useState([]);
    const [menuOpen, setMenuOpen ] = useState(false);
    const node = useRef()

    //Set languages to the ones which arent equal to the locale
    // const filterLanguages = () => filterLanguage(languages.filter((x) => x !== i18n.activeLocale));;
    const setSelectedLanguage = (language) => {
        console.log(window.localStorage.getItem("language"));
        if (window.localStorage.getItem("language") === "en" || window.localStorage.getItem("language")=== false) {
            i18n.locale('en', EN);
            setLanguage(["nl"]);
        } else {
            i18n.locale('nl', NL);
            setLanguage(["en"])
        }
    };

    const setUnselectedLanguages = (language) => {
        if (language === "nl") {
            i18n.locale('nl', NL)
            window.localStorage.setItem("language", "nl");
            setLanguage(["en"])
        } else if (language === "en") {
            i18n.locale('en', EN)
            window.localStorage.setItem("language", "en");
            setLanguage(["nl"])
        } else {
            i18n.locale('en', EN)
            window.localStorage.setItem("language", "en");
            setLanguage(["nl"])
        }
    };


    const handleClick = e => {
        if (node.current.contains(e.target)) {
            return
        }
        // outside click
        setMenuOpen(false)
    }

    useEffect(() => {
        setSelectedLanguage();
        document.addEventListener('mousedown', handleClick)

        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, []);

    return (
        <div ref={node} className="language">
            <a onClick={() => setMenuOpen(!menuOpen)}>{i18n.activeLocale.toUpperCase()}</a>

            <div onClick={() => setMenuOpen(!menuOpen)} className={`${menuOpen ? "chev is-active" : "chev"}`}>
                <div className="chev chev-down">
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
            <Wrapper className={`menu ${menuOpen ? "menuOpen" : "menu"}`}>
                {languages.map((d) => <span><a onClick={() => {setUnselectedLanguages(d)}}>{d.toUpperCase()}</a></span>)}
            </Wrapper>
        </div>
    );
}

export default Language;
