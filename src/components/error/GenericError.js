import React from 'react';
import Animation from "@/animation/Animation";
import Section from "@/layout/Section";
import Button from "@/Button";
import {useRouter} from "next/router";
import Title from "@/text/Title";
import Wave from "react-wavify";
import {useTheme} from "../../context/theme/ThemeContext";

function GenericError(props) {
    const darkmode = useTheme().dark;
    const router = useRouter();

    return (
        <Animation animation="fade-up" delay="200">
            <Section containerClassName="error-page" className="error-page">
                <div>
                    <Title title="error.title" text="error.text"/>
                    <Button className="center" custom title="error.button" to="" onClick={() => router.back()}/>
                </div>

                <div>
                    <div className="landing-wave">
                        <Wave fill="#ff6961"
                            // fill={`${darkmode ? "#1a1a1a" : "#F3F4F5"}`}
                              paused={false}
                              options={{
                                  height: 50,
                                  amplitude: 50,
                                  speed: 0.25,
                                  points: 7
                              }}
                        />
                        <div className="position-absolute-wave">
                            <Wave
                                fill={`${darkmode ? "#131313" : "#FBFBFB"}`}
                                paused={false}
                                options={{
                                    height: 15,
                                    amplitude: 15,
                                    speed: 0.35,
                                    points: 6
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Section>
        </Animation>
    );
}

export default GenericError;