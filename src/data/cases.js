//FORM
import formLogin from '#/clients/form/image2.png';
import formDash from '#/clients/form/image1.png';
import formRevit from '#/clients/form/image3.png';
//NWO
import nwoCase from "#/clients/nwo/case-image.webp";
//HES
import hesImage from '#/clients/hes/slider/image1.png'
import hesImage2 from '#/clients/hes/slider/image2.png'
import React from 'react'

export const cases = [
    {
        id: "form",
        card:{
            image: hesImage2,
            client:"cases.form.client",
            title:"cases.form.case.landing.title",
            text:"cases.form.case.landing.text",
            discipline:"cases.form.case.landing.discipline",
            route:"/cases/form"
        },
        landing: {
            client:"cases.form.client",
            discipline:"cases.form.case.landing.discipline",
            title:"cases.form.case.landing.title",
            text:"cases.form.case.landing.text",
        },
        introduction:{
            title:"cases.form.case.introduction.title",
            text:"cases.form.case.introduction.text",
        },
        bullets: "cases.form.case.bullets",
        result:{
            title:"cases.form.case.result.title",
            text:"cases.form.case.result.text",
        },
        images: [
            formLogin, formDash, formRevit
        ],
        conclusion:{
            title:"cases.form.case.conclusion.title",
            text:"cases.form.case.conclusion.text",
        },
    },
    {
        id: "hes",
        card:{
            image:hesImage2,
            client:"cases.hes.client",
            title:"cases.hes.case.landing.title",
            text:"cases.hes.case.landing.text",
            discipline:"cases.hes.case.landing.discipline",
            route:"/cases/hes"
        },
        landing: {
            client:"cases.heshes.client",
            discipline:"cases.heshes.case.landing.discipline",
            title:"cases.heshes.case.landing.title",
            text:"cases.heshes.case.landing.text",
        },
        introduction:{
            title:"cases.hes.case.introduction.title",
            text:"cases.hes.case.introduction.text",
        },
        bullets: "cases.hes.case.bullets",
        result:{
            title:"cases.hes.case.result.title",
            text:"cases.hes.case.result.text",
        },
        images:[
            hesImage, hesImage2,
        ],
        conclusion:{
            title:"cases.hes.case.conclusion.title",
            text:"cases.hes.case.conclusion.text",
        },
    },
    {
        id: "nwo",
        card:{
            image:nwoCase,
            client:"cases.nwo.client",
            title:"cases.nwo.case.landing.title",
            text:"cases.nwo.case.landing.text",
            discipline:"cases.nwo.case.landing.discipline",
            route:"/cases/nwo"
        },
        landing: {
            client:"cases.nwo.client",
            discipline:"cases.nwo.case.landing.discipline",
            title:"cases.nwo.case.landing.title",
            text:"cases.nwo.case.landing.text",
        },
        introduction:{
            title:"cases.nwo.case.introduction.title",
            text:"cases.nwo.case.introduction.text",
        },
        bullets: "cases.nwo.case.bullets",
        result:{
            title:"cases.nwo.case.result.title",
            text:"cases.nwo.case.result.text",
        },
        images:[
            hesImage, hesImage2,
        ],
        conclusion:{
            title:"cases.nwo.case.conclusion.title",
            text:"cases.nwo.case.conclusion.text",
        },
    },
    {
        id: "protonise",
        card:{
            image:hesImage2,
            client:"cases.hes.client",
            title:"cases.hes.case.landing.title",
            text:"cases.hes.case.landing.text",
            discipline:"cases.hes.case.landing.discipline",
            route:"/cases/hes"
        },
        landing: {
            client:"cases.heshes.client",
            discipline:"cases.heshes.case.landing.discipline",
            title:"cases.heshes.case.landing.title",
            text:"cases.heshes.case.landing.text",
        },
        introduction:{
            title:"cases.hes.case.introduction.title",
            text:"cases.hes.case.introduction.text",
        },
        bullets: "cases.hes.case.bullets",
        result:{
            title:"cases.hes.case.result.title",
            text:"cases.hes.case.result.text",
        },
        images:[
            hesImage, hesImage2,
        ],
        conclusion:{
            title:"cases.hes.case.conclusion.title",
            text:"cases.hes.case.conclusion.text",
        },
    },
];
