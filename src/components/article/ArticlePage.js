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
import {NextSeo} from "next-seo";


function ArticlePage(props) {
    let {basePath, data, type} = props;
    let sectionNumber = 0;
    let quoteNumber = 0;

    return <>
        <NextSeo
            title={data.name}
            titleTemplate='ASRR | %s'
            description={data.description}
            openGraph={{
                title: data.name,
                description: data.description,
                // url: 'https://www.example.com/articles/article-title',
                type: 'article',
                article: {
                    // publishedTime: '2017-06-21T23:04:13Z',
                    // modifiedTime: '2018-01-21T18:04:43Z',
                    // expirationTime: '2022-12-21T22:04:11Z',
                    // section: 'Section II',
                    // authors: [
                    //     'https://www.example.com/authors/@firstnameA-lastnameA',
                    //     'https://www.example.com/authors/@firstnameB-lastnameB',
                    // ],
                    tags: data.tags,
                },
                images: [
                    {
                        url: 'https://www.asrr.nl/assets/images/asrr-banner.jpg',
                        width: 850,
                        height: 650,
                        alt: 'ASRR Banner',
                    },
                ],
            }}
        />
        <ArticleBody className="keywords">

            <KeyWords keyWords={[type, data.name]} compact/>

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
    </>

}

export default ArticlePage;
