import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const caseDirectory = join(process.cwd(), 'public', 'content', 'written', 'case', 'nl')
const articleDirectory = join(process.cwd(), 'public', 'content', 'written', 'artikel', 'nl')
const newsDirectory = join(process.cwd(), 'public', 'content', 'written', 'nieuws', 'nl')

export function getCaseSlugs () {
	return walkSync(caseDirectory)
}

export function getArticleSlugs () {
	return walkSync(articleDirectory)
}

export function getNewsSlugs () {
	return walkSync(newsDirectory)
}

// List all files in a directory in Node.js recursively in a synchronous fashion
const walkSync = function (dir, filelist) {
	var fs = fs || require('fs'),
		files = fs.readdirSync(dir)
	filelist = filelist || []
	files.forEach(function (file) {
		if (fs.statSync(dir + '/' + file).isDirectory()) {
			filelist = walkSync(dir + '/' + file, filelist)
		} else {
			if (file.endsWith('.md')) {
				console.log(dir, file)
				let post = {
					directory: dir,
					file: file,
				}

				filelist.push(post)
			}
		}
	})
	return filelist
}

export function getPostBySlug (slug, fields = []) {

	const fullPath = slug.directory + '/' + slug.file
	const fileContents = fs.readFileSync(fullPath, 'utf8')
	const { data, content } = matter(fileContents)

	const items = {}

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
	})

	return items
}

export function getAllCases (fields = []) {
	const slugs = getCaseSlugs()
	const posts = slugs.map((slug) => getPostBySlug(slug, fields))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
	return posts
}

export function getAllArticles (fields = []) {
	const slugs = getArticleSlugs()
	const posts = slugs.map((slug) => getPostBySlug(slug, fields))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
	return posts
}

export function getAllNews (fields = []) {
	const slugs = getNewsSlugs()
	const posts = slugs.map((slug) => getPostBySlug(slug, fields))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
	return posts
}
