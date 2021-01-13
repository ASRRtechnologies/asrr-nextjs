import form from '#/clients/form/case-image.jpg'
import protonise from '#/clients/protonise/case-image.jpg'
import hes from '#/clients/hes/case-image.png'
import nwo from '#/clients/nwo/case-image.webp'
import esp from '#/clients/esp/esp-cover.jpg'
import aapjes from '#/clients/aapjes/case-image.jpg'

export const previewCases = [
	{
		image: form,
		client: 'cases.form.client',
		title: 'cases.form.title',
		alt: 'form',
		discipline: 'cases.form.discipline',
		text: 'cases.form.text',
		id: 'form',

	},
	{
		image: hes,
		client: 'cases.hes.client',
		title: 'cases.hes.title',
		alt: 'hes',
		discipline: 'cases.hes.discipline',
		text: 'cases.hes.text',
		id: 'hes',
	},
	{
		image: nwo,
		client: 'cases.nwo.client',
		title: 'cases.nwo.title',
		alt: 'nwo',
		discipline: 'cases.nwo.discipline',
		text: 'cases.nwo.text',
		id: 'nwo',
	},
];

export const portfolio = [
	{
		id: 'nwo',
		image: nwo
	},
	{
		id: 'form',
		image: form
	},
	{
		id: 'hes',
		image: hes
	},
	{
		id: 'protonise',
		image: protonise
	},
	{
		id: 'esp',
		image: esp,
		href: "https://espconsultancy.nl"
	},
	{
		id: 'aapjes',
		image: aapjes,
		href: "https://de-kleine-aapjes.vercel.app/"
	}
];
