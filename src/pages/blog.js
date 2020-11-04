import React from 'react'
import Application from '@/layout/Application'
import BlogPage from "@/blog/Blog";
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
