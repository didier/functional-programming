require('dotenv').config
const fetch = require('node-fetch')
const { API_KEY_NAME, API_KEY_ID, API_SECRET, APP_TOKEN, APP_SECRET } = process.env

const TESLA_API = 'https://opendata.rdw.nl/resource/y4vt-i24s.json'

const api = fetch(`${TESLA_API}?$$app_token=${APP_TOKEN}`)
  .then(response => response.json())
  .then(data => console.log(data))