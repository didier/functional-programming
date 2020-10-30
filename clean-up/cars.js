require('dotenv').config
const {
  API_KEY_NAME,
  API_KEY_ID,
  API_SECRET,
  APP_TOKEN,
  APP_SECRET
} = process.env

const fetch = require('node-fetch')
const fs = require('fs')

const TESLA_API = 'https://opendata.rdw.nl/resource/y4vt-i24s.json'

// Grab all cars registered by license plate
fetch('https://opendata.rdw.nl/resource/j3bj-9ts7.json?$limit=100000')
  .then(response => response.json())
  .then(data =>
    data.map(item => ({
      prijs: Number(item.catalogusprijs),
      merk: item.merk,
      kenteken: item.kenteken,
    }))
      .filter(item => item.prijs ? item.prijs : false)
      .sort((a, z) => z.prijs - a.prijs)
  )
  .then(console.log)
  .then(data => JSON.stringify(data))
