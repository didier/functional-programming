// Packages
import { arc, DefaultArcObject, select } from 'd3'
import {
	EYE_SPACING,
	EYE_RADIUS,
	STROKE_WIDTH,
	Y_OFFSET,
	EYEBROW_WIDTH,
	EYEBROW_HEIGHT
} from './constants'

/**
 * Sets the dimensions of the svg 'canvas' to the full width and height of the viewport.
 */
function setCanvasDimensions(): void {
	// Select the svg as `canvas`
	const canvas = document.querySelector('svg')

	// Set width and height attributes
	canvas.setAttribute('width', `${window.innerWidth}`)
	canvas.setAttribute('height', `${window.innerHeight}`)
}

// window.addEventListener('resize', setCanvasDimensions)
// window.addEventListener('load', setCanvasDimensions)

const svg = select('svg')

const width: number = +svg.attr('width')
const height: number = +svg.attr('height')

// svg.style('background-color', 'red')

const g = svg
	.append('g')
	.attr('transform', `translate(${width / 2}, ${height / 2})`)

const head = g
	.append('circle')
	.attr('r', height / 2)
	.attr('fill', 'yellow')
	.attr('stroke', 'black')
	.attr('stroke-width', STROKE_WIDTH)

const eyes = g.append('g').attr('transform', `translate(0, ${Y_OFFSET})`)
const eyebrows = eyes.append('g').attr('transform', `translate(0, ${Y_OFFSET})`)

eyebrows
	.transition()
	.duration(1500)
	.attr('transform', `translate(0, ${Y_OFFSET - 25})`)
	.transition()
	.duration(1500)
	.attr('transform', `translate(0, ${Y_OFFSET})`)

const leftEye = eyes
	.append('circle')
	.attr('r', EYE_RADIUS)
	.attr('cx', -EYE_SPACING)

const leftEyebrow = eyebrows
	.append('rect')
	.attr('x', -EYE_SPACING - EYEBROW_WIDTH / 2)
	.attr('width', EYEBROW_WIDTH)
	.attr('height', EYEBROW_HEIGHT)

const rightEyebrow = eyebrows
	.append('rect')
	.attr('x', EYE_SPACING - EYEBROW_WIDTH / 2)
	.attr('width', EYEBROW_WIDTH)
	.attr('height', EYEBROW_HEIGHT)

const rightEye = eyes
	.append('circle')
	.attr('r', EYE_RADIUS)
	.attr('cx', EYE_SPACING)

const mouthProperties: DefaultArcObject = {
	innerRadius: EYE_RADIUS * 3,
	outerRadius: EYE_RADIUS * 4,
	startAngle: Math.PI / 2,
	endAngle: (Math.PI * 3) / 2
}

const mouth = g.append('path').attr('d', arc()(mouthProperties))
