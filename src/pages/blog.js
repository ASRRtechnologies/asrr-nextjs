import React from 'react'
import Application from '@/layout/Application'
import Layout from '@/layout/Layout'
import BlogPage from "@/blog/Preview";

function Blog () {

	return (
		<Application>
			<Layout>
				<BlogPage/>
			</Layout>
		</Application>
	)
}

export default Blog
