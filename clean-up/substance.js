const { data, replaceByArray, replaceAll } = require('../utils')

async function substance() { 

  const json = await data()

  const substancesDirty = json.map(entry => { 
    return entry['Wat is je favoriete drug? (of geen)']
  })

  const substancesClean = substancesDirty
    .map(entry => { 
    // Replace Hasjiesj with Hasj
      return replaceAll(entry.toLowerCase(), 'Hasjiesj', 'Hasj')
    })

  console.log(substancesClean)
}

substance()