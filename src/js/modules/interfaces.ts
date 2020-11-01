export interface TariefDeel {
	/**
	 * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
	 *
	 * @type {number}
	 * @memberof TariefDeel
	 */
	AreaManagerId: number

	/**
	 * Identificatiecode van een tariefberekening
	 *
	 * @type {string}
	 * @memberof TariefDeel
	 */
	FareCalculationCode: string

	/**
	 * Datum waarop een tariefdeel ingaat. Het tariefdeel is een onderdeel van de tariefberekening die aan een parkeer- of verblijfsregeling is gekoppeld. Met behulp van tariefdelen worden door de gebiedsbeheerder of parkeerexploitant o.a. lineaire of progressieve tarieven gedefinieerd.
	 *
	 * @type {number}
	 * @memberof TariefDeel
	 */
	StartDateFarePart: number

	/**
	 * Waarde die aangeeft vanaf welke minuut in dit tarief dit tariefdeel geldt.
	 *
	 * @type {number}
	 * @memberof TariefDeel
	 */
	StartDurationFarePart: number

	/**
	 * Waarde die aangeeft tot welke minuut in dit tarief dit tariefdeel geldt. Bijzonderheden: Een tariefdeel van 0 tot 180 minuten wordt aangegeven met begintijd 0 en eindtijd 180. Als de eindtijd niet van onbeperkte duur is dan moet deze gelijk zijn aan de starttijd van het eropvolgend tariefdeel.
	 *
	 * @type {number}
	 * @memberof TariefDeel
	 */
	EndDurationFarePart: number

	/**
	 * Het bedrag in EUR dat per stapgrootte van het tariefdeel wordt geteld.
	 *
	 * @type {number}
	 * @memberof TariefDeel
	 */
	AmountFarePart: number

	/**
	 * De stapgrootte in minuten waarmee het AmountFarePart rekent.
	 *
	 * @type {number}
	 * @memberof TariefDeel
	 */
	StepSizeFarePart: number

	/**
	 * Datum waarop een tariefdeel niet meer geldig is.
	 *
	 * @type {number}
	 * @memberof TariefDeel
	 */
	EndDateFarePart: number

	/**
	 * Het totaalbedrag van alle voorgaande tariefdelen binnen hetzelfde tarief.
	 *
	 * @type {number}
	 * @memberof TariefDeel
	 */
	AmountCumulative: number
}
