import React from 'react'
import useI18n from "../../hooks/use-i18n";

export default function Page({data}) {
	const i18n = useI18n();

	return (
		<div className="portfolio-page">

		</div>
	)
}

export async function getStaticProps(context) {

	return {
		props: {
			data: cases.filter((data => cases.id === context.params.name))[0]
		}, // will be passed to the page component as props
	}
}