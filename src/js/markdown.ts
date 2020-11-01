// Packages
import marked from 'marked'

// Constants
const user = 'didiercatz'
const repo = 'functional-programming'
const path = 'README.md'

// const url = `https://api.github.com/repos/${user}/${repo}/contents/${path}`
const url: string =
	'https://raw.githubusercontent.com/didiercatz/functional-programming/main/README.md'

// Bind main element to main variable
const main = document.querySelector('main')

// Fetch markdown content and parse into HTML
fetch(url)
	.then((res) => res.text())
	.then((content) => {
		main.innerHTML = marked(content)
	})
