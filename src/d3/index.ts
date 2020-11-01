import { csv, scaleLinear, select } from 'd3'
import { TariefDeel } from '../js/modules/interfaces'
// Ask Parcel for the bundled URL of the data file.
import csvPath from './data/opendata-tariefdeel.csv'

const svg = select('svg')

svg.style('background', 'red')

const height = +svg.attr('height')
const width = +svg.attr('width')

const circle = svg
	.append('circle')
	.attr('r', 30)
	.attr('cx', width / 2)
	.attr('cy', height / 2)

const render = (data: TariefDeel[]): void => {
	console.log(data)
	const xScale = scaleLinear()

	svg
		.selectAll('rect')
		.data(data)
		.enter()
		.append('rect')
		.attr('width', 30)
		.attr('height', 30)
}

csv(csvPath)
	.then((data) => {
		return data
	})
	.then((cleanedData) => render(cleanedData))
