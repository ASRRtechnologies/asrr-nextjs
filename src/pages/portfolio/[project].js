import React, { useEffect } from 'react'
import Section from '@/layout/Section'
import Layout from '@/layout/Application'
import { getAllProjects } from '../../lib/api'
import { useRouter } from 'next/router'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import SmallLanding from '@/landing/SmallLanding'
import ArticleSection from '@/article/ArticleSection'
import ArticleTitle from '@/article/ArticleTitle'
import Article from '@/article/Article'
import ArticleBody from '@/article/ArticleBody'

function Page ({ allProjects, data, basePath }) {

	const router = useRouter()

	useEffect(() => {

	})

	const Paragraph = ({ children }) => {
		return (
			<Section className="section-paragraph">
				<div className="project-paragraph">
					{children}
				</div>
			</Section>
		)
	}

	const getRandomProject = () => {
		let numOfProjectsToShow = 2
		let projectsToShow = []

		//Remove current page project
		let uniqueProjects = allProjects.filter((project) => {
			return project.title !== data.title && project.discipline !== data.discipline
		})

		//Get random number between 0 and num of projects
		function randomIntFromInterval (min, max) { // min and max included
			return Math.floor(Math.random() * (max - min + 1) + min)
		}

		//In case of one project
		if (uniqueProjects.length === 1) {
			return uniqueProjects[0]
		} else {
			//loop twice
			for (let i = 0; i < numOfProjectsToShow; i++) {
				//push random project in projects to show array
				projectsToShow.push(uniqueProjects[randomIntFromInterval(0, uniqueProjects.length - 1)])
				//remove the pushed project form the uniqueProjects so that isnt possible by chance to add twice the same projects
				uniqueProjects = uniqueProjects.filter(val => !projectsToShow.includes(val))
			}
			return projectsToShow
		}
	}
	{console.log(data)}

	return (
		<Article project={data} basePath={basePath}/>
	)
}

export async function getStaticProps ({ params }) {
	const { project } = params
	let content = await import(`public/content/projects/nl/${project}/${project}.md`)
	let parsedContent = matter(content.default)
	let data = parsedContent.data
	const basePath = `/content/projects/nl/${project.toLowerCase()}`

	//Get all project info and only show their cards and titles for the read more part
	const allProjects = getAllProjects([
		'title',
		'card',
	])

	return {
		props: { allProjects, basePath, data },
	}
}

export async function getStaticPaths () {

	const allProjects = await getAllProjects([
		'title',
	])

	const paths = allProjects.map(project => ({
		params: { project: project.title.toLowerCase() },
	}))

	return { paths, fallback: false }

}

export default Page
