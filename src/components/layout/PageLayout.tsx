import React from 'react'
import Head from 'next/head'
import styled from "@emotion/styled";

type LayoutDarkModeProps = {
    theme: {
        layout: {
            background: string
        }
    }
}

const StyledLayout = styled("div")<LayoutDarkModeProps>`
  background: ${props => props.theme.layout.background};
`

interface LayoutProps {
    children: React.ReactElement | React.ReactElement[],
    title: string,
    content: string,
    className?: string,

    [x: string]: any,
}

function PageLayout(props: LayoutProps) {
    const {children, title, text, className} = props;

    return (
        <StyledLayout className={className} {...props}>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="description" content={text}/>
                <title>{title}</title>
            </Head>
            {children}
        </StyledLayout>
    );
}

export default PageLayout;
