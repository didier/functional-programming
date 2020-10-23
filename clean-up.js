const csv = require('csvtojson')

const animals = [
  { 
    includes: 'kat',
    name: 'Kat'
  },
  { 
    includes: 'rat',
    name: 'Rat'
  },
  { 
    includes: 'hon', // One person wrote 'hond' with a 't'... (hont) 🤦‍♂️
    name: 'Hond'
  },
  { 
    includes: 'dwergteckel',
    name: 'Hond'
  },
  { 
    includes: 'vogel',
    name: 'Vogel'
  },
  { 
    includes: 'konijn',
    name: 'Konijn'
  },
  { 
    includes: 'hamster',
    name: 'Hamster'
  },
  { 
    includes: 'kip',
    name: 'Kip'
  },
]

async function cleanUp() {

  // Path to CSV file
  const csvFilePath = './data/data.csv'

  // Convert CSV to JSON
  const convertToJSON = async (filePath) => csv().fromFile(filePath)

  // Get JSON data
  const json = await convertToJSON(csvFilePath)

  // Get only the animals row
  const petsData = json.map((entry) => {
    return entry['Welke huisdieren heb je? (naam; soort dier: scheiden door punt komma\'s, \'geen\' voor geen huisdier)']
  })
  
  // Get cleaned array of pets
  const cleanPets = petsData.map(entry => {
    // Replace blank entries with empty string
    const geen = new RegExp('geen', 'g')
    const space = new RegExp(' ', 'g')
    const nvt = new RegExp('n>v>t>', 'g')
    
    return entry
      .toLowerCase()
      .replace(geen, '')
      .replace(/'/g, '')
      .replace(/-/g, '')
      .replace(nvt, '')
  })
    
    // Correct all animal names
    .map((entry) => entry
      .replace('hont', 'hond')
      .replace('dwerg teckel', 'hond'))

    // Remove all spaces and numbers
    .map((entry) => {
      return entry
        .replace(/[0-9]/g, '')
        .replace(/ /g, ';')
    })
    // replace all strings that are not animals
    .map(entry => { 
      entry.split(';')
      return entry
    })
    
    .sort()
    // Replace all empty values with null
    .map(entry =>
      entry === ''
        ? null
        : entry
    )

  console.log(cleanPets)
}

cleanUp()