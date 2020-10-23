// Packages
const csv = require('csvtojson')

// Path to CSV file
const csvFilePath = './data/data.csv'

// Convert CSV to JSON
const data = async () => csv().fromFile(csvFilePath)

// Get JSON data


/**
 * 
 * @param {String} string String to replace parts of
 * @param {String} replace Part of string to replace
 * @param {String} replaceBy Part to replace with
 * @returns `String`
 */
const replaceAll = (string, replace, replaceBy) => {
  const regex = new RegExp(replace, 'g')
  const newString = string.replace(regex, replaceBy)
  return newString
}

/**
 * Replace string by multiple values from array
 * 
 * @param {String} string String to replace parts of
 * @param {Array} replaceArray Array of items which to replace the string with
 * @param {String} replaceBy String to replace the parts of the first string with
 * @returns `String`
 */
const replaceByArray = (string, replaceArray, replaceBy) => { 
  let newString = string
  // return replaceArray.forEach(item => replaceAll(string, item, replaceBy))
  // console.log(newString)
  return newString
}


if (process.env.NODE_ENV === 'development') {
  // Expected output: hond-hond-hond
  console.log('replaceAll:\n', replaceAll('hond-kat-kat', 'kat', 'hond'))

  // Expected output: cavia-cavia-cavia
  console.log('replaceByArray:\n', replaceByArray('hond-kat-kat', ['hond', 'kat'], 'cavia'))
}

/**
 * Capitalizes the first letter of a given string
 * 
 * @param {String} string String of which to capitalize the first letter.
 * @returns `String` with capitalized first letter
 */
const capitalizeFirst = (string) => (
  string.charAt(0).toUpperCase() + string.slice(1)
)


module.exports = {
  data,
  replaceAll,
  replaceByArray,
  capitalizeFirst
}