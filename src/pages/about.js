import React, {useEffect} from 'react'
import Application from "@/layout/Application";
import {useHeader} from "../context/navigation/HeaderContext";

function Page({data, query}) {

    const header = useHeader();

    useEffect(() => {
        header.setHeaderWhite(true)
    }, []);

    return (<>

        <Application>

        </Application>
        </>
    )
}

Page.getInitialProps = ({query}) => {

};

export default Page

