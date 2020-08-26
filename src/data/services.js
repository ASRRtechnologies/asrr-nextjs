import Consultancy from "@/icons/Consultancy";
import Coding from "@/icons/Coding";
import Analytics from "@/icons/Analytics";
import Analytics2 from "@/icons/Analytics2";
import React from "react";
import Hardware from "@/icons/Hardware";
import Team from '../components/icons/Team'
import Workspace from '../components/icons/Workspace'
import CustomMade from '../components/icons/CustomMade'
import CustomMade2 from '../components/icons/CustomMade2'
import WebApplications from '../components/icons/WebApplications'

export const previewServices = [
    {
        route: 'service-cards.consultancy.route',
        title: 'service-cards.consultancy.preview.title',
        text: 'service-cards.consultancy.preview.text',
        landingText:'service-cards.consultancy.preview.landingText',
        icon: <Consultancy/>
    },
    {
        route: 'service-cards.full-stack.route',
        title: 'service-cards.full-stack.preview.title',
        text: 'service-cards.full-stack.preview.text',
        landingText:'service-cards.full-stack.preview.landingText',
        icon: <Coding/>
    },
    {
        route: 'service-cards.hardware.route',
        title: 'service-cards.hardware.preview.title',
        text: 'service-cards.hardware.preview.text',
        landingText:'service-cards.hardware.preview.landingText',
        icon: <Hardware/>
    },
];

export const services = [
    {
        id:"teams",
        title: 'service-cards.teams.title',
        text: 'service-cards.teams.text',
        preview_title: 'service-cards.teams.preview.title',
        preview_text: 'service-cards.teams.preview.text',
        icon: <Team/>
    },
    {
        id:"full-stack-development",
        title: 'service-cards.full-stack.title',
        text: 'service-cards.full-stack.text',
        preview_title: 'service-cards.full-stack.preview.title',
        preview_text: 'service-cards.full-stack.preview.text',
        icon: <Coding/>
    },
    {
        id:"workspace",
        title: 'service-cards.workspace.title',
        text: 'service-cards.workspace.text',
        preview_title: 'service-cards.workspace.preview.title',
        preview_text: 'service-cards.workspace.preview.text',
        icon: <Workspace/>
    },
    {
        id:"custom-work",
        title: 'service-cards.custom-work.title',
        text: 'service-cards.custom-work.text',
        preview_title: 'service-cards.custom-work.preview.title',
        preview_text: 'service-cards.custom-work.preview.text',
        icon: <CustomMade2/>
    },
    {
        id:"web-applications",
        title: 'service-cards.web-applications.title',
        text: 'service-cards.web-applications.text',
        preview_title: 'service-cards.web-applications.preview.title',
        preview_text: 'service-cards.web-applications.preview.text',
        icon: <WebApplications/>
    },
    {
        id:"data-analytics",
        title: 'service-cards.data-analytics.title',
        text: 'service-cards.data-analytics.text',
        preview_title: 'service-cards.data-analytics.preview.title',
        preview_text: 'service-cards.data-analytics.preview.text',
        icon: <Analytics2/>
    },
    {
        id:"it-consultancy",
        title: 'service-cards.consultancy.title',
        text: 'service-cards.consultancy.text',
        preview_title: 'service-cards.consultancy.preview.title',
        preview_text: 'service-cards.consultancy.preview.text',
        icon: <Consultancy/>
    },
    {
        id:"custom-hardware",
        title: 'service-cards.hardware.title',
        text: 'service-cards.hardware.text',
        preview_title: 'service-cards.hardware.preview.title',
        preview_text: 'service-cards.hardware.preview.text',
		icon: <Hardware/>
    },
];

