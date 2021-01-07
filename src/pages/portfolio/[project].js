import React, {useEffect} from 'react'
import Section from '@/layout/Section'
import Layout from '@/layout/Application'
import {getAllPosts} from "../../../lib/api";
import {useRouter} from "next/router";
import matter, {stringify} from "gray-matter";
import BigLanding from "@/landing/BigLanding";
import ReactMarkdown from "react-markdown";
import FullScreenVideo from "@/projecten/comps/FullScreenVideo";
import ProjectSlider from "@/projecten/comps/ProjectSlider";
import GalleryGrid from "@/projecten/comps/GalleryGrid";
import Map from "@/map/Map";
import MoreProjects from "@/projecten/comps/MoreProjects";

function Page({allProjects, data, basePath}) {

	const router = useRouter();

	useEffect(() => {



	});

	const Paragraph = ({children}) => {
		return (
			<Section className="section-paragraph">
				<div className="project-paragraph">
					{children}
				</div>
			</Section>
		)
	};

	const getRandomProject = () => {
		let numOfProjectsToShow = 2;
		let projectsToShow = [];

		//Remove current page project
		let uniqueProjects = allProjects.filter((project) => {
			return project.title !== data.title && project.discipline !== data.discipline
		});

		//Get random number between 0 and num of projects
		function randomIntFromInterval(min, max) { // min and max included
			return Math.floor(Math.random() * (max - min + 1) + min);
		}

		//In case of one project
		if(uniqueProjects.length === 1) {
			return uniqueProjects[0]
		}

		else {
			//loop twice
			for(let i =0; i < numOfProjectsToShow; i++){
				//push random project in projects to show array
				projectsToShow.push(uniqueProjects[randomIntFromInterval(0, uniqueProjects.length - 1)]);
				//remove the pushed project form the uniqueProjects so that isnt possible by chance to add twice the same projects
				uniqueProjects = uniqueProjects.filter(val => !projectsToShow.includes(val));
			}
			return projectsToShow;
		}
	};

	return (
		<Layout>
			<BigLanding title={data.landing.title} text={data.landing.text}
						image={`${basePath}/${data.landing.image}`}/>
			<Paragraph>
				<ReactMarkdown source={data.content}/>
			</Paragraph>
			<FullScreenVideo video={`${basePath}/${data.project_video}`}/>
			<ProjectSlider basePath={basePath} title="Main" images={data.slider}/>
			<GalleryGrid title="Techniek" images={data.grid} basePath={basePath}/>
			<Map lat={data.coordinates.latitude} lng={data.coordinates.longitude}/>
			<ProjectSlider basePath={basePath} title="Overige" images={data.slider_2}/>
			<MoreProjects projects={getRandomProject()}/>
		</Layout>
	)
}

export async function getStaticProps({params}) {
	const {discipline, project} = params;
	let content = await import(`public/content/projects/${discipline.toLowerCase()}/${project.toLowerCase()}/${project.toLowerCase()}.md`);
	let parsedContent = matter(content.default);
	let data = parsedContent.data;
	const basePath = `/content/projects/${discipline.toLowerCase()}/${project.toLowerCase()}`;

	const allProjects = getAllPosts([
		'title',
		'discipline',
		'projectCoverImage',
		'projectCoverDescription',
		'location',
	]);

	return {
		props: {allProjects, basePath, data},
	}
}

export async function getStaticPaths() {

	const allProjects = await getAllPosts([
		'title',
		'discipline',
	]);

	const paths = allProjects.map(project => ({
		params: {discipline: project.discipline.toLowerCase(), project: project.title.toLowerCase()},
	}));

	return {paths, fallback: false}

}

export default Page
