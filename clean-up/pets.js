// Utilities
const { replaceByArray } = require('../src/js/modules/utils')

// Cleaned up JSON file of the survey data, courtesy of Jonah Meijers <https://github.com/theonejonahgold>
const data = require('../src/d3/data/data.json')

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
  }
]

async function cleanUp() {
  // Get JSON data
  const json = data

  // Get only the animals row
  const petsData = json.map((entry) => {
    return entry['huisDieren']
  })

  // Get cleaned array of pets
  const cleanPets = petsData
    .map((entry) => {
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
    .map((entry) => replaceByArray(entry, ['dwerg teckel', 'hont'], 'hond'))

    // Remove all spaces and numbers
    .map((entry) => {
      return entry.replace(/[0-9]/g, '').replace(/ /g, ';')
    })
    // replace all strings that are not animals
    .map((entry) => {
      entry.split(';')
      return entry
    })

    .sort()
    // Replace all empty values with null
    .map((entry) => (entry === '' ? null : entry))

  console.log(cleanPets)
}

cleanUp()
