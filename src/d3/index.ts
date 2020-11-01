import { csv, scaleLinear, select } from 'd3'
import { TariefDeel } from '../js/modules/interfaces'
// Ask Parcel for the bundled URL of the data file.
import csvPath from './data/opendata-tariefdeel.csv'

const svg = select('svg')

svg.style('background', 'red')

const height: number = +svg.attr('height')
const width: number = +svg.attr('width')

const circle = svg
	.append('circle')
	.attr('r', 30)
	.attr('cx', width / 2)
	.attr('cy', height / 2)

/**
 * Renders a visualisation based on the data it receives.
 *
 * @param {TariefDeel[]} data The data to render
 */
function render(data: TariefDeel[]): void {
	const xScale = scaleLinear()

	svg
		.selectAll('rect')
		.data(data)
		.enter()
		.append('rect')
		.attr('width', 30)
		.attr('height', 30)
}

// Grab CSV path from Parcel's compiled bundle and parse it with `d3-dsv`
csv(csvPath)
	// Turn all numeric strings into numbers
	.then((data) => {
		return data.map((object: any) => ({
			AreaManagerId: +object['AreaManagerId'],
			FareCalculationCode: object['FareCalculationCode'],
			StartDateFarePart: +object['StartDateFarePart'],
			StartDurationFarePart: +object['StartDurationFarePart'],
			EndDurationFarePart: +object['EndDurationFarePart'],
			AmountFarePart: +object['AmountFarePart'],
			StepSizeFarePart: +object['StepSizeFarePart'],
			EndDateFarePart: +object['EndDateFarePart'],
			AmountCumulative: +object['AmountCumulative']
		}))
	})
	// Render cleaned data
	.then(render)
