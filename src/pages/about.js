import React, {useEffect} from 'react'
import Application from "@/layout/Application";
import SmallLanding from "@/landing/SmallLanding";
import ArticlePage from "@/article/ArticlePage"
import useI18n from "../hooks/use-i18n";
import t from "../hooks/translator";
import Contact from "../components/contact/Preview";
import {useHeader} from "../context/navigation/HeaderContext";
import {about} from "../data/about"
import {NextSeo} from "next-seo";

function Page({data, query}) {
    const i18n = useI18n();
    const header = useHeader();

    useEffect(() => {
        header.setHeaderWhite(true)
    }, []);

    let basePath = `${data.name}.article`;

    return (<>

        <Application>
            <SmallLanding title={t(`${basePath}.headline`)} background={`/assets/images/${data.name}/${data.name}-landing.${data.landing.backgroundImage.extension}`}/>

            <ArticlePage type={"information"}
                         data={data}
                         basePath={basePath}
            />

            <Contact/>

        </Application>
        </>
    )
}

Page.getInitialProps = ({query}) => {
    let data = about.find(c => c.name === "about");
    console.log(data)
    return {
        data,
        query
    }
};

export default Page

