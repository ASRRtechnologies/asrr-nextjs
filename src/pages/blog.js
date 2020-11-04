import React, {useEffect} from 'react'
import Application from '@/layout/Application'
import BlogPage from "@/blog/Blog";
import Contact from "@/contact/Preview";
import {useHeader} from "../context/navigation/HeaderContext";

function Blog () {

	const header = useHeader();
	useEffect(() => {
		header.setHeaderWhite(false)
	}, []);

	return (
		<Application>
			<BlogPage/>
			<Contact/>
		</Application>
	)
}

export default Blog
