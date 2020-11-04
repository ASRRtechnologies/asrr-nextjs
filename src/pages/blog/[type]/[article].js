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
import {cases} from "../../../data/cases";
import useI18n from "../../../hooks/use-i18n";
import t from "../../../hooks/translator";
import Contact from "../../../components/contact/Preview";
import {blog} from "../../../data/blog";
import {useHeader} from "../../../context/navigation/HeaderContext";

function Page({data, query}) {
    const i18n = useI18n();
    const header = useHeader();

    useEffect(() => {
        header.setHeaderWhite(true)
    }, []);

    let basePath = `blog.${data.type}.${data.name}.content`;
    {
        console.log(data)
    }
    let sectionNumber = 0;

    return (
        <Application>
            <SmallLanding title={t(`${basePath}.landing.title`)}
                          background={`/assets/images/blog/${data.type}/${data.name}/${data.name}-landing.${data.landing.backgroundImage.extension}`}/>

            <ArticleBody className="keywords">

                <KeyWords keyWords={["blog", data.type, data.name, data.title]} compact/>

                <ArticleContent>
                    <ArticleTitle smallTitle={t(`${basePath}.smallTitle`)} title={t(`${basePath}.title`)}
                                  subtitle={t(`${basePath}.subtitle`)}/>

                    {data.sections.map(section => {
                        sectionNumber++;

                        if (section.type === "iframe") {
                            {
                                console.log(<div dangerouslySetInnerHTML={section.code}/>)
                            }
                            return <ArticleSection>
                                <div dangerouslySetInnerHTML={{__html: section.code}}/>
                            </ArticleSection>
                        }

                        let paragraphNumber = 0;
                        return <ArticleSection line={section.line}>
                            {[...Array(section.length)].map((x, i) => {

                                paragraphNumber++;
                                let paragraphPath = `${basePath}.sections.${sectionNumber}.paragraphs.${paragraphNumber}`;
                                return <ArticleParagraph
                                    title={i === 0 && section.title && t(`${basePath}.sections.${sectionNumber}.title`)}
                                    text={t(`${paragraphPath}.text`)}/>
                            })}
                            {section.image &&
                            <ArticleImage square={section.image.square}
                                          subtitle={`${basePath}.sections.${sectionNumber}.image`}
                                          image={section.image.src ? section.image.src : `/assets/images/blog/${data.type}/${data.name}/${data.name}-${sectionNumber}.${section.image.extension}`}
                            />}
                            {/*{section.iframe && <div dangerouslySetInnerHTML={{__html: section.code}}/>*/}

                            {/*}*/}
                        </ArticleSection>

                    })}
                </ArticleContent>

            </ArticleBody>
            <Contact/>

        </Application>
    )
}

Page.getInitialProps = ({query}) => {
    let breadCrumb = ["blog", query.type, query.article];

    let data = blog.find(b => (b.type === query.type) && (b.name === query.article))
    console.log(data)
    return {breadCrumb, data}
};

export default Page

