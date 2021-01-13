import React from 'react'
import Footer from '../footer/Footer'
import Head from 'next/head'

function Application({children, title, content}) {

    return (
        <div className="application">
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="description" content={content}/>
                <title>{title}</title>
            </Head>
            {children}
        </div>
    );
}

export default Application;
