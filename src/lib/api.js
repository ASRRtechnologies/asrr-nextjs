import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'public', 'content', 'projects', 'nl');

export function getPostSlugs() {
    return walkSync(postsDirectory)
}

// List all files in a directory in Node.js recursively in a synchronous fashion
const walkSync = function(dir, filelist) {
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
            filelist = walkSync(dir + '/' + file, filelist);
        }
        else {
            if(file.endsWith(".md")){
                console.log(dir, file);
                let post = {
                    directory: dir,
                    file: file
                };

                filelist.push(post);
            }
        }
    });
    return filelist;
};


export function getPostBySlug(slug, fields = []) {

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

export function getAllProjects(fields = []) {
    const slugs = getPostSlugs();
    const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
    return posts
}
