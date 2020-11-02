//FORM
import formLogin from '#/clients/form/image2.png';
import formDash from '#/clients/form/image1.png';
import formRevit from '#/clients/form/image3.png';
//NWO
import nwoCase from "#/clients/nwo/case-image.webp";
import login from "#/clients/nwo/image1.png";
import nwoScreens from "#/clients/nwo/nwo-screns.jpg";
import cpu from "#/clients/nwo/cpu.jpg";
import cpuSlot from "#/clients/nwo/cpu-slot.jpg";
import ram from "#/clients/nwo/nwo-ram.jpg";
import threadripper from "#/clients/nwo/threadripper.jpg";

//HES
import hesImage from '#/clients/hes/slider/image1.png'
import hesImage2 from '#/clients/hes/slider/image2.png'
import React from 'react'

export const cases = [
    {
        type: "case",
        name: "form",
        readMore: true,
        tags: [
            "development", "technology"
        ],
        content: [
            {
                type: "paragraph",
                title: true
            },
            {
                type: "paragraph",
                title: false
            },
            {
                type: "image",
                format: "png"
            },
            {
                type: "paragraph",
                title: true
            },
            {
                type: "paragraph",
                title: false
            },
            {
                type: "paragraph",
                title: false
            }
        ],
        image: "https://r2m.se/wp-content/uploads/2018/01/microservices-768x448.png"
    },
    {
        type: "case",
        name: "hsfn",
        readMore: true
    }
];
