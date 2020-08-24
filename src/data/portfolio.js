import form from '#/clients/form/case-image.jpg'
import protonise from '#/clients/protonise/case-image.jpg'
import hes from '#/clients/hes/case-image.jpg'
import nwo from '#/clients/nwo/case-image.jpg'

export const disciplines = [
	{title:'cases.disciplines.all'},
	{title:'cases.disciplines.bim'},
	{title:'cases.disciplines.web'},
];

export const previewCases = [
	{
		image: form,
		client: 'cases.form.client',
		title: 'cases.form.title',
		alt: 'form',
		discipline: 'cases.form.discipline',
		text: 'cases.form.text',
		id:"form"

	},
	{
		image: hes,
		client: 'cases.hes.client',
		title: 'cases.hes.title',
		alt: 'hes',
		discipline: 'cases.hes.discipline',
		text: 'cases.hes.text',
		id:"hes"
	},
	{
		image: nwo,
		client: 'cases.nwo.client',
		title: 'cases.nwo.title',
		alt: 'nwo',
		discipline: 'cases.nwo.discipline',
		text: 'cases.nwo.text',
		id:"nwo"
	},
];

export const portfolio = [
	{
		id:"form",
		image: form,
		client: 'cases.form.client',
		title: 'cases.form.title',
		alt: 'form',
		discipline: 'cases.form.discipline',
		text: 'cases.form.text',
	},
	{
		id:"protonise",
		image: protonise,
		client: 'cases.protonise.client',
		title: 'cases.protonise.title',
		alt: 'protonise',
		discipline: 'cases.protonise.discipline',
		text: 'cases.protonise.text',
	},
	{
		id:"hes",
		image: hes,
		client: 'cases.hes.client',
		title: 'cases.hes.title',
		alt: 'hes',
		discipline: 'cases.hes.discipline',
		text: 'cases.hes.text',
	},
	{
		id:"now",
		image: nwo,
		client: 'cases.nwo.client',
		title: 'cases.nwo.title',
		alt: 'nwo',
		discipline: 'cases.nwo.discipline',
		text: 'cases.nwo.text',
	},
];
