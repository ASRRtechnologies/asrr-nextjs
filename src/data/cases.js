import formLogo from "#/clients/form/form-gray.svg"
import form from '#/clients/form/case-image.jpg'
import protonise from '#/clients/protonise/case-image.jpg'
import nwoCase from '#/clients/nwo/case-image.jpg'
import nwoLogo from "#/clients/nwo/nwo-gray.svg"

import hesLogo from "#/clients/hes/hes-gray.svg"
import hesLanding from "#/clients/hes/landing.png"
import hesImage from "#/clients/hes/slider/image1.png"
import hesImage2 from "#/clients/hes/slider/image2.png"
import hesResult from "#/clients/hes/result.png"
import hesCase from '#/clients/hes/case-image.jpg'


export const clients = [
    {image:formLogo, alt:"form"},
    {image:nwoLogo, alt:"nwo"},
    {image:hesLogo, alt:"hes"}
];

export const cases = [
    {
        "id": "hes",
        "landing": hesLanding,
        "slider": [hesImage, hesImage2],
        "result": hesResult,
        "title_1": "projects.hes.case.title_1",
        "text_1": "projects.hes.case.text_1",
        "title_2": "projects.hes.case.title_2",
        "text_2": "projects.hes.case.text_2",
        "title_3": "projects.hes.case.title_3",
        "text_3": "projects.hes.case.text_3",
        "preview": "projects.hes.case.preview",
        "preview_link": "projects.hes.case.preview_link",
        "title_4": "Other Cases",
        "demo": true,
        "url": "https://kind-aryabhata-bca490.netlify.com",
        "card":{
            "image": hesCase,
            "client": 'projects.hes.client',
            "title": 'projects.hes.title',
            "alt": 'hes',
            "discipline": 'projects.hes.discipline',
            "text": 'projects.hes.text',
        }
    },
    {
        "id": "form",
        "landing": hesLanding,
        "slider": [hesImage, hesImage2],
        "result": hesResult,
        "title_1": "projects.form.case.title_1",
        "text_1": "projects.form.case.text_1",
        "title_2": "projects.form.case.title_2",
        "text_2": "projects.form.case.text_2",
        "title_3": "projects.form.case.title_3",
        "text_3": "projects.form.case.text_3",
        "preview": "projects.form.case.preview",
        "preview_link": "projects.form.case.preview_link",
        "title_4": "Other Cases",
        "demo": true,
        "url": "https://www.google.com",
        "card":{
            "image": hesCase,
            "client": 'projects.form.client',
            "title": 'projects.form.title',
            "alt": 'form',
            "discipline": 'projects.form.discipline',
            "text": 'projects.form.text',
        }
    },
    {
        "id": "form",
        "landing": hesLanding,
        "slider": [hesImage, hesImage2],
        "result": hesResult,
        "title_1": "projects.nwo.case.title_1",
        "text_1": "projects.nwo.case.text_1",
        "title_2": "projects.nwo.case.title_2",
        "text_2": "projects.nwo.case.text_2",
        "title_3": "projects.nwo.case.title_3",
        "text_3": "projects.nwo.case.text_3",
        "preview": "projects.nwo.case.preview",
        "preview_link": "projects.nwo.case.preview_link",
        "title_4": "Other Cases",
        "demo": false,
        "url": "https://www.google.com",
        "card":{
            "image": hesCase,
            "client": 'projects.nwo.client',
            "title": 'projects.nwo.title',
            "alt": 'nwo',
            "discipline": 'projects.nwo.discipline',
            "text": 'projects.nwo.text',
        }
    },
    {
        "id": "esp",
        "landing": hesLanding,
        "slider": [hesImage, hesImage2],
        "result": hesResult,
        "title_1": "projects.esp.case.title_1",
        "text_1": "projects.esp.case.text_1",
        "title_2": "projects.esp.case.title_2",
        "text_2": "projects.esp.case.text_2",
        "title_3": "projects.esp.case.title_3",
        "text_3": "projects.esp.case.text_3",
        "preview": "projects.esp.case.preview",
        "preview_link": "projects.esp.case.preview_link",
        "title_4": "Other Cases",
        "demo": false,
        "url": "https://www.google.com",
        "card":{
            "image": hesCase,
            "client": 'projects.esp.client',
            "title": 'projects.esp.title',
            "alt": 'esp',
            "discipline": 'projects.esp.discipline',
            "text": 'projects.esp.text',
        }
    },
    {
        "id": "protonise",
        "landing": hesLanding,
        "slider": [hesImage, hesImage2],
        "result": hesResult,
        "title_1": "projects.protonise.case.title_1",
        "text_1": "projects.protonise.case.text_1",
        "title_2": "projects.protonise.case.title_2",
        "text_2": "projects.protonise.case.text_2",
        "title_3": "projects.protonise.case.title_3",
        "text_3": "projects.protonise.case.text_3",
        "preview": "projects.protonise.case.preview",
        "preview_link": "projects.protonise.case.preview_link",
        "title_4": "Other Cases",
        "demo": false,
        "url": "https://www.google.com",
        "card":{
            "image": hesCase,
            "client": 'projects.protonise.client',
            "title": 'projects.protonise.title',
            "alt": 'protonise',
            "discipline": 'projects.protonise.discipline',
            "text": 'projects.protonise.text',
        }
    },
    {
        "id": "aapjes",
        "landing": hesLanding,
        "slider": [hesImage, hesImage2],
        "result": hesResult,
        "title_1": "projects.aapjes.case.title_1",
        "text_1": "projects.aapjes.case.text_1",
        "title_2": "projects.aapjes.case.title_2",
        "text_2": "projects.aapjes.case.text_2",
        "title_3": "projects.aapjes.case.title_3",
        "text_3": "projects.aapjes.case.text_3",
        "preview": "projects.aapjes.case.preview",
        "preview_link": "projects.aapjes.case.preview_link",
        "title_4": "Other Cases",
        "demo": false,
        "url": "https://www.google.com",
        "card":{
            "image": hesCase,
            "client": 'projects.aapjes.client',
            "title": 'projects.aapjes.title',
            "alt": 'aapjes',
            "discipline": 'projects.aapjes.discipline',
            "text": 'projects.aapjes.text',
        }
    }
];
