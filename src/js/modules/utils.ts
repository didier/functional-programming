/**
 * Exports the Information Design survey data.
 *
 * @description uses the `require` syntax to avoid fiddling with top-level async
 */
export const data = require('../../d3/data/data.json')

/**
 * Replaces all occurences of a substring within a string with a specified value.
 *
 * @param {String} string String to replace parts of
 * @param {String} replace Part of string to replace
 * @param {String} replaceBy Part to replace with
 * @returns `String`
 */
export function replaceAll(
	string: string,
	replace: string,
	replaceBy: string
): string {
	const regex = new RegExp(replace, 'g')
	const newString = string.replace(regex, replaceBy)
	return newString
}

/**
 * Replace string by multiple values from array.
 *
 * @param {String} string String to replace parts of.
 * @param {Array} replaceArray Array of items which to replace the string with
 * @param {String} replaceBy String to replace the parts of the first string with
 * @returns `String` of which parts from the `replaceArray` have been replaced by `replaceBy`
 */
export function replaceByArray(
	string: string,
	replaceArray: string[],
	replaceBy: string
): string {
	// TODO: Fix replaceArray function
	let newString: string = string
	// return replaceArray.forEach((item) => replaceAll(string, item, replaceBy));
	//  Return something so TS doesn't yell at me.
	return newString
}

/**
 * Capitalizes the first letter of a given string.
 *
 * @param {String} string String of which to capitalize the first letter
 * @returns `String` with capitalized first letter
 */
export function capitalizeFirst(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * Removes excessive whitespace at the start or end of an object's property.
 *
 * @param {object[]} data - An array of objects
 * @param {string} property - The property to be trimmed
 * @returns {[]} - The cleaned array of objects
 */
export function removeWhitespace(data: object[], property: string): object[] {
	return data.map((item: any) => {
		const trimmed: string = item[property].trim()
		return { [property]: trimmed }
	})
}

// Utility Function 'tests' — in the leanest sense of the word.
if (process.env.NODE_ENV === 'development') {
	// Expected output: hond-hond-hond
	console.log('replaceAll:\n', replaceAll('hond-kat-kat', 'kat', 'hond'))

	// Expected output: cavia-cavia-cavia
	console.log(
		'replaceByArray:\n',
		replaceByArray('hond-kat-kat', ['hond', 'kat'], 'cavia')
	)
}
