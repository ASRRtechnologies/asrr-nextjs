import React from 'react';
import Title from "../text/Title";
import img from "../../../public/assets/images/landing/laptop.jpg"
import Section from "../layout/Section";

function Display({image}) {
    return (
        <Section>
            <div className="display">
                {/*<Title title={"Connecting everyone"} text="breath-taking"/>*/}
                <div className="image" style={{backgroundImage:`url(${image})`}}>
                    <img className="image" src={image}/>

                </div>
            </div>
        </Section>

    );
}

export default Display;
