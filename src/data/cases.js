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
        landing: {
            backgroundImage: {
                extension: 'jpg'
            }
        },
        readMore: true,
        tags: [
            "development", "technology"
        ],
        sections: [
            {
                line: true,
                title: true,
                type: "paragraph",
                length: 3,
                image: {
                    square: true,
                    extension: 'png',
                }
            },
            {
                title: false,
                type: "paragraph",
                length: 2,
            },

        ],
    },
    {
        type: "case",
        name: "hsfn",
        readMore: true
    }
];
