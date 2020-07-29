import Consultancy from "@/icons/Consultancy";
import Coding from "@/icons/Coding";
import React from "react";
import Hardware from "@/icons/Hardware";

export const disciplines = [
    {title: 'projects.disciplines.all'},
    {title: 'projects.disciplines.bim'},
    {title: 'projects.disciplines.web'},
];

export const previewServices = [
    {
        title: 'service-cards.consultancy.title',
        text: 'service-cards.consultancy.text',
        icon: <Consultancy/>
    },
    {
        title: 'service-cards.development.title',
        text: 'service-cards.development.text',
		icon:<Coding/>
    },
    {
        title: 'service-cards.hardware.title',
        text: 'service-cards.hardware.text',
		icon: <Hardware/>
    },
];

export const services = [
    {
        title: 'service-cards.web-applications.title',
        text: 'service-cards.web-applications.text',
    },
    {
        title: 'service-cards.back-end.title',
        text: 'service-cards.back-end.text',
    },
    {
        title: 'service-cards.data-analytics.title',
        text: 'service-cards.data-analytics.text',
    },
    {
        title: 'service-cards.servers.title',
        text: 'service-cards.servers.text',
    },
    {
        title: 'service-cards.consultancy.title',
        text: 'service-cards.consultancy.text',
    },
    {
        title: 'service-cards.power-bi.title',
        text: 'service-cards.power-bi.text',
    }
]
