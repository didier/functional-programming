const marked = require('marked')

const user = 'didiercatz'
const repo = 'functional-programming'
const path = 'README.md'

// const url = `https://api.github.com/repos/${user}/${repo}/contents/${path}`
const url = 'https://raw.githubusercontent.com/didiercatz/functional-programming/main/README.md'

const main = document.querySelector('main')

fetch(url)
  .then(res => res.text())
  .then(content => { 
    main.innerHTML = marked(content)
  })

