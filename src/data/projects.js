//FORM
import formCase from '#/clients/form/case-image.jpg'
import protonise from '#/clients/protonise/case-image.jpg'
//NWO
import nwoCase from '#/clients/nwo/case-image.jpg'
//HES
import hesLanding from "#/clients/hes/landing.png"
import hesImage from "#/clients/hes/slider/image1.png"
import hesImage2 from "#/clients/hes/slider/image2.png"
import hesResult from "#/clients/hes/result.png"
import hesCase from '#/clients/hes/case-image.jpg'
import React from "react";

export const projects = [
    {
        id: "form",
        landing: {
            client:"projects.form.client",
            discipline:"projects.form.case.landing.discipline",
            title:"projects.form.case.landing.title",
            text:"projects.form.case.landing.text",
        },
        introduction:{
            title:"projects.form.case.introduction.title",
            text:"projects.form.case.introduction.text",
        },
        bullets: "projects.form.case.bullets",
        result:{
            title:"projects.form.case.result.title",
            text:"projects.form.case.result.text",
        },
        images:[
            hesImage, hesImage2,
        ],
        conclusion:{
            title:"projects.form.case.conclusion.title",
            text:"projects.form.case.conclusion.text",
        },
    },
];
