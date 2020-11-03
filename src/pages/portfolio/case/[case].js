import React, {useEffect} from 'react'
import Application from "@/layout/Application";
import SmallLanding from "@/landing/SmallLanding";
import KeyWords from "@/article/KeyWords";
import ArticleBody from "@/article/ArticleBody";
import ArticleParagraph from "@/article/ArticleParagraph";
import ArticleTitle from "@/article/ArticleTitle";
import ArticleContent from "@/article/ArticleContent";
import ArticleSection from "@/article/ArticleSection";
import ArticleImage from "@/article/ArticleImage";
import NextArticleWrapper from "@/article/NextArticleWrapper";
import NextArticleCard from "@/article/NextArticleCard";
import {cases} from "../../../data/cases";
import useI18n from "../../../hooks/use-i18n";

function Page({data, query}) {
    const i18n = useI18n();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let basePath = `cases.${data.name}.content`;

    return (
        <Application>
            <SmallLanding title={i18n.t(`${basePath}.landing.title`)}/>

            <ArticleBody className="keywords">

                <KeyWords keyWords={["Test", "2", "3"]}/>

                <ArticleContent>
                    <ArticleTitle title="Configurator in the making"/>

                    <ArticleSection line >

                        <ArticleParagraph title="Exploring the open world" text=" OpenAVN’s solutions for the home user
                        work with you to keep you protected however you use your computer.Torus protects you while you hang out online.
                        A simple yet powerful browser extension, Torus is your eyes and ears on the internet, watching out for you
                        wherever you browse. BrightScan, OpenAVN’s state-of-the-art malware threat detection software, picks up where Torus
                        leaves off, protecting your computer from harmful downloads the way Torus protects you from internet attacks.">
                        </ArticleParagraph>

                        <ArticleParagraph title="Exploring the open world" text=" OpenAVN’s solutions for the home user
                        work with you to keep you protected however you use your computer.Torus protects you while you hang out online.
                        A simple yet powerful browser extension, Torus is your eyes and ears on the internet, watching out for you
                        wherever you browse. BrightScan, OpenAVN’s state-of-the-art malware threat detection software, picks up where Torus
                        leaves off, protecting your computer from harmful downloads the way Torus protects you from internet attacks.">
                        </ArticleParagraph>

                        <ArticleImage square subtitle="Test working toch"/>

                    </ArticleSection>

                    <ArticleSection>

                        <ArticleParagraph title="Exploring the open world" text=" OpenAVN’s solutions for the home user
                        work with you to keep you protected however you use your computer.Torus protects you while you hang out online.
                        A simple yet powerful browser extension, Torus is your eyes and ears on the internet, watching out for you
                        wherever you browse. BrightScan, OpenAVN’s state-of-the-art malware threat detection software, picks up where Torus
                        leaves off, protecting your computer from harmful downloads the way Torus protects you from internet attacks.">
                        </ArticleParagraph>

                        <ArticleParagraph title="Exploring the open world" text=" OpenAVN’s solutions for the home user
                        work with you to keep you protected however you use your computer.Torus protects you while you hang out online.
                        A simple yet powerful browser extension, Torus is your eyes and ears on the internet, watching out for you
                        wherever you browse. BrightScan, OpenAVN’s state-of-the-art malware threat detection software, picks up where Torus
                        leaves off, protecting your computer from harmful downloads the way Torus protects you from internet attacks.">
                        </ArticleParagraph>

                        <ArticleImage square subtitle="Test working toch"/>

                    </ArticleSection>

                    <NextArticleWrapper>

                        <NextArticleCard/>
                        <NextArticleCard/>

                    </NextArticleWrapper>




                </ArticleContent>

            </ArticleBody>

        </Application>
    )
}

Page.getInitialProps = ({query}) => {
    let data = cases.find(c => c.name === query.case);

    return {
        data,
        query
    }
};

export default Page

