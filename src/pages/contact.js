import React, { useEffect } from 'react'
import ContactPage from '../components/contact/Contact'
import { useHeader } from '../context/navigation/HeaderContext'
import matter from 'gray-matter'

function Contact ({ data }) {
	const header = useHeader()
	useEffect(() => {
		header.setHeaderWhite(false)
	}, [])

	return (
		<>
			<ContactPage data={data}/>
		</>
	)
}



export default Contact
