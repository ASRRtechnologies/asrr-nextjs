import React from 'react';
import useI18n from '../../hooks/use-i18n';
function Card(props) {
    const i18n = useI18n();
    return (
        <div className="testimonial-card">
            <span className="testimonial-card-image">
                <img src={i18n.t("home.stories." + props.client + ".picture")}/>
            </span>

            <h3>{i18n.t("home.stories." + props.client + ".contact")}</h3>
            <h4>{i18n.t("home.stories." + props.client + ".function")}</h4>
            <p>"{i18n.t("home.stories." + props.client + ".story")}"</p>
            <h4>{i18n.t("home.stories." + props.client + ".name")}</h4>
        </div>
    );
}

export default Card;
