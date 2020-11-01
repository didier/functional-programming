const fetch = require('node-fetch')
const RATE_LIMIT = 10000

// Grab all cars registered by license plate
fetch(`https://opendata.rdw.nl/resource/j3bj-9ts7.json?$limit=${RATE_LIMIT}`)
  .then((response) => response.json())
  .then((data) =>
    data
      .map((item) => ({
        prijs: +item.catalogusprijs,
        merk: item.merk,
        kenteken: item.kenteken
      }))
      .filter((item) => (item.prijs ? item.prijs : false))
      .sort((a, z) => z.prijs - a.prijs)
  )
  .then(console.log)
  .then((data) => JSON.stringify(data))
