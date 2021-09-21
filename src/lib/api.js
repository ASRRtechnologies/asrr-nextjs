import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

const caseDirectory = join(process.cwd(), 'public', 'content', 'written', 'case', 'nl');
const articleDirectory = join(process.cwd(), 'public', 'content', 'written', 'artikel', 'nl');
const newsDirectory = join(process.cwd(), 'public', 'content', 'written', 'nieuws', 'nl');
const serviceDirectory = join(process.cwd(), 'public', 'content', 'services', 'nl');
const teamDirectory = join(process.cwd(), 'public', 'content', 'team', 'nl');

export function getCaseSlugs () {
	return walkSync(caseDirectory)
}

export function getArticleSlugs () {
	return walkSync(articleDirectory)
}

export function getNewsSlugs () {
	return walkSync(newsDirectory)
}

export function getServicesSlugs () {
	return walkSync(serviceDirectory)
}

// export function getTeamSlugs () {
// 	return walkSync(teamDirectory)
// }

// List all files in a directory in Node.js recursively in a synchronous fashion
const walkSync = function (dir, filelist) {
	var fs = fs || require('fs'),
		files = fs.readdirSync(dir);
	filelist = filelist || [];
	files.forEach(function (file) {
		if (fs.statSync(dir + '/' + file).isDirectory()) {
			filelist = walkSync(dir + '/' + file, filelist)
		} else {
			if (file.endsWith('.md')) {
				let post = {
					directory: dir,
					file: file,
				};

				filelist.push(post)
			}
		}
	});
	return filelist
};

export function getPostBySlug (slug, fields = []) {
	const fullPath = slug.directory + '/' + slug.file;
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);
	const items = {};

	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = slug.file
		}
		if (field === 'content') {
			items[field] = content
		}

		if (data[field]) {
			items[field] = data[field]
		}
	});

	return items
}

const getSlugData = (slugs, fields) => {
	return slugs.map((slug) => getPostBySlug(slug, fields))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
}

export function getAllCases (fields = []) {
	const slugs = getCaseSlugs();
	return getSlugData(slugs, fields);
}

export function getAllArticles (fields = []) {
	const slugs = getArticleSlugs();
	return getSlugData(slugs, fields);
}

export function getAllNews (fields = []) {
	const slugs = getNewsSlugs();
	return getSlugData(slugs, fields);
}

export function getAllServices (fields = []) {
	const slugs = getServicesSlugs();
	return getSlugData(slugs, fields);
}

// export function getAllTeams (fields = []) {
// 	const slugs = getTeamSlugs();
// 	return getSlugData(slugs, fields);
// }
