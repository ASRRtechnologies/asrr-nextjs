import useI18n from "./use-i18n";


export default function t(path) {
    let i18n = useI18n();

    let translation = i18n.t(path);

    if (translation === undefined) {
        console.log(`Missing: ${translation}`)
        return path;
    }

    return translation;
}
