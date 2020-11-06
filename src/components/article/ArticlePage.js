import ArticleBody from "@/article/ArticleBody";
import KeyWords from "@/article/KeyWords";
import ArticleContent from "@/article/ArticleContent";
import ArticleTitle from "@/article/ArticleTitle";
import t from "../../hooks/translator";
import ArticleSection from "@/article/ArticleSection";
import ArticleParagraph from "@/article/ArticleParagraph";
import ArticleImage from "@/article/ArticleImage";
import Application from "@/layout/Application";
import React from "react";


function ArticlePage(props) {
    let {basePath, data, type} = props;
    let sectionNumber = 0;
    let quoteNumber = 0;

    return <ArticleBody className="keywords">

        <KeyWords keyWords={[type, data.name, data.description]} compact/>

        <ArticleContent>
            <ArticleTitle smallTitle={t(`${basePath}.smallTitle`)} title={t(`${basePath}.title`)}
                          subtitle={t(`${basePath}.subtitle`)}/>

            {data.sections.map(section => {
                if (section.type === "quote") {
                    quoteNumber++;
                    return <>
                        <blockquote
                            className="quote">{t(`${basePath}.quotes.${quoteNumber}`)}
                        </blockquote>
                        {section.source && <><p>-{section.source}</p></>}
                    </>
                }
                sectionNumber++;
                let paragraphNumber = 0;
                return <ArticleSection line={section.line}>
                    {/* Auto generated arrays */}
                    {[...Array(section.length)].map((x, i) => {
                        paragraphNumber++;
                        let paragraphPath = `${basePath}.sections.${sectionNumber}.paragraphs.${paragraphNumber}`;

                        return <ArticleParagraph
                            title={i === 0 && section.title && t(`${basePath}.sections.${sectionNumber}.title`)}
                            text={t(`${paragraphPath}`)}/>
                    })}

                    {/*Conditional for image*/}
                    {section.image &&
                    <ArticleImage square={section.image.square}
                                  subtitle={`${basePath}.sections.${sectionNumber}.image`}
                                  image={`/assets/images/${props.type}/${data.name}/${data.name}-${sectionNumber}.${section.image.extension}`}
                    />}
                </ArticleSection>

            })}
        </ArticleContent>
    </ArticleBody>

}

export default ArticlePage;
