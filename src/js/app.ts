const marked = require('marked')

const user: string = 'didiercatz'
const repo: string = 'functional-programming'
const path: string = 'README.md'

// const url = `https://api.github.com/repos/${user}/${repo}/contents/${path}`
const url: string =
	'https://raw.githubusercontent.com/didiercatz/functional-programming/main/README.md'

const main: HTMLElement = document.querySelector('main')

fetch(url)
	.then((res) => res.text())
	.then((content) => {
		main.innerHTML = marked(content)
	})
