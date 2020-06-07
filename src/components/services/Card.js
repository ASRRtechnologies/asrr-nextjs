import React from 'react';
import ReadMore from "../text/ReadMore";
import Section from "@/layout/Section";
import useI18n from "../../hooks/use-i18n";

function Card(props) {
    const i18n = useI18n();
    return (
        <div className="card">
            <h3>Application Dev</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s</p>
            <ReadMore  small to="/">{i18n.t("buttons.see.read")}</ReadMore>
        </div>
    );
}
export default Card;
