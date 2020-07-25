import form from '#/clients/form/case-image.jpg'
import protonise from '#/clients/protonise/case-image.jpg'
import hes from '#/clients/hes/case-image.jpg'
import nwo from '#/clients/nwo/case-image.jpg'

export const disciplines = [
	{title:'projects.disciplines.all'},
	{title:'projects.disciplines.bim'},
	{title:'projects.disciplines.web'},
]

export const previewCases = [
	{
		image: form,
		client: 'projects.form.client',
		title: 'projects.form.title',
		alt: 'form',
		discipline: 'projects.form.discipline',
		text: 'projects.form.text',
		id:"form"

	},
	{
		image: hes,
		client: 'projects.hes.client',
		title: 'projects.hes.title',
		alt: 'hes',
		discipline: 'projects.hes.discipline',
		text: 'projects.hes.text',
		id:"hes"
	},
	{
		image: nwo,
		client: 'projects.nwo.client',
		title: 'projects.nwo.title',
		alt: 'nwo',
		discipline: 'projects.nwo.discipline',
		text: 'projects.nwo.text',
		id:"nwo"
	},
]

export const portfolio = [
	{
		image: form,
		client: 'projects.form.client',
		title: 'projects.form.title',
		alt: 'form',
		discipline: 'projects.form.discipline',
		text: 'projects.form.text',
	},
	{
		image: protonise,
		client: 'projects.protonise.client',
		title: 'projects.protonise.title',
		alt: 'form',
		discipline: 'projects.protonise.discipline',
		text: 'projects.protonise.text',
	},
	{
		image: hes,
		client: 'projects.hes.client',
		title: 'projects.hes.title',
		alt: 'hes',
		discipline: 'projects.hes.discipline',
		text: 'projects.hes.text',
	},
	{
		image: nwo,
		client: 'projects.nwo.client',
		title: 'projects.nwo.title',
		alt: 'nwo',
		discipline: 'projects.nwo.discipline',
		text: 'projects.nwo.text',
	},
];
