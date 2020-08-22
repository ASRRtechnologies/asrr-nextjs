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
        title: 'service-cards.consultancy.preview.title',
        text: 'service-cards.consultancy.preview.text',
        icon: <Consultancy/>
    },
    {
        title: 'service-cards.full-stack.preview.title',
        text: 'service-cards.full-stack.preview.text',
        icon: <Coding/>
    },
    {
        title: 'service-cards.hardware.preview.title',
        text: 'service-cards.hardware.preview.text',
        icon: <Hardware/>
    },
];

export const services = [
    {
        id:"teams",
        id_nl:"teams",
        title: 'service-cards.teams.title',
        text: 'service-cards.teams.text',
        preview_title: 'service-cards.teams.preview.title',
        preview_text: 'service-cards.teams.preview.text',
        icon: <Team/>
    },
    {
        id:"full-stack",
        id_nl:"full-stack",
        title: 'service-cards.full-stack.title',
        text: 'service-cards.full-stack.text',
        preview_title: 'service-cards.full-stack.preview.title',
        preview_text: 'service-cards.full-stack.preview.text',
        icon: <Coding/>
    },
    {
        id:"workspace",
        id_nl:"werkplekken",
        title: 'service-cards.workspace.title',
        text: 'service-cards.workspace.text',
        preview_title: 'service-cards.workspace.preview.title',
        preview_text: 'service-cards.workspace.preview.text',
        icon: <Workspace/>
    },
    {
        id:"custom-work",
        id_nl:"maatwerk",
        title: 'service-cards.custom-work.title',
        text: 'service-cards.custom-work.text',
        preview_title: 'service-cards.custom-work.preview.title',
        preview_text: 'service-cards.custom-work.preview.text',
        icon: <CustomMade2/>
    },
    {
        id:"web-applications",
        id_nl:"web-applicaties",
        title: 'service-cards.web-applications.title',
        text: 'service-cards.web-applications.text',
        preview_title: 'service-cards.web-applications.preview.title',
        preview_text: 'service-cards.web-applications.preview.text',
        icon: <WebApplications/>
    },
    {
        id:"data-analytics",
        id_nl:"data-analytics",
        title: 'service-cards.data-analytics.title',
        text: 'service-cards.data-analytics.text',
        preview_title: 'service-cards.data-analytics.preview.title',
        preview_text: 'service-cards.data-analytics.preview.text',
        icon: <Analytics2/>
    },
    {
        id:"consultancy",
        id_nl:"consultancy",
        title: 'service-cards.consultancy.title',
        text: 'service-cards.consultancy.text',
        preview_title: 'service-cards.consultancy.preview.title',
        preview_text: 'service-cards.consultancy.preview.text',
        icon: <Consultancy/>
    },
    {
        id:"hardware",
        id_nl:"hardware",
        title: 'service-cards.hardware.title',
        text: 'service-cards.hardware.text',
        preview_title: 'service-cards.hardware.preview.title',
        preview_text: 'service-cards.hardware.preview.text',
		icon: <Hardware/>
    },
];

