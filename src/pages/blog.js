import React from 'react'
import Application from '@/layout/Application'
import Layout from '@/layout/Layout'
import BlogPage from "@/blog/Blog";
import SmallLanding from "@/landing/SmallLanding";
import Contact from "@/contact/Preview";

function Blog () {

	return (
		<Application>
			{/*<SmallLanding title="Blog"/>*/}
			<BlogPage/>
			<Contact/>
		</Application>
	)
}

export default Blog
