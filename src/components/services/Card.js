import React from 'react';
import ReadMore from "../text/ReadMore";
import Section from "@/layout/Section";
import useI18n from "../../hooks/use-i18n";

function Card({title, text}) {
    const i18n = useI18n();
    return (
        <div className="card">
            <h3>{i18n.t(title)}</h3>
            <p>{i18n.t(text)}</p>
            <ReadMore  small to="/">{i18n.t("buttons.read")}</ReadMore>
        </div>
    );
}
export default Card;
