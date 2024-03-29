import React, {createContext, useEffect, useRef, useState} from 'react';
import rosetta from 'rosetta';
// import rosetta from 'rosetta/debug';

const i18n = rosetta();

export const defaultLanguage = 'nl';
export const languages = ['nl', 'en'];

export const I18nContext = createContext();

// default language
i18n.locale(defaultLanguage);

export default function I18n({ children, locale, lngDict }) {
  const [activeDict, setActiveDict] = useState(() => lngDict);
  const activeLocaleRef = useRef(locale || defaultLanguage);
  const [, setTick] = useState(0);
  const firstRender = useRef(true);

  // for initial SSR render
  if (locale && firstRender.current === true) {
    firstRender.current = false;
    i18n.locale(locale);
    i18n.set(locale, activeDict);
  }

  useEffect(() => {
    if (locale) {
      i18n.locale(locale);
      i18n.set(locale, activeDict);
      activeLocaleRef.current = locale;
      // force rerender
      setTick((tick) => tick + 1);
    }
  }, [locale, activeDict]);

  const i18nWrapper = {
    activeLocale: activeLocaleRef.current,
    t: (...args) => i18n.t(...args),
    locale: (l, dict) => {
      i18n.locale(l);
      activeLocaleRef.current = l;
      if (dict) {
        i18n.set(l, dict);
        setActiveDict(dict);
      } else {
        setTick((tick) => tick + 1);
      }
    }
  };

  return (
    <I18nContext.Provider value={i18nWrapper}>{children}</I18nContext.Provider>
  );
}
