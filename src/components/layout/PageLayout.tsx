import React from 'react'
import Head from 'next/head'

interface LayoutProps {
    children: React.ReactElement | React.ReactElement[],
    title: string,
    content: string,
    className?: string,

    [x: string]: any,
}

function PageLayout(props: LayoutProps) {
    const {children, title, content, className} = props;

    return (
        <div className={className} {...props}>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="description" content={content}/>
                <title>{title}</title>
            </Head>
            {children}
        </div>
    );
}

export default PageLayout;
