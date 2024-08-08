import Building from './5-building'

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
	super(sqft);
	if (typeof(floors) === 'number') this._floors = floors
	else throw new TypeError('Floors must be a number')
    }

    get sqft() {
	return super.sqft;
    }

    set sqft(sq) {
	super.sqft(sq);
    }

    get floors() {
	return this._floors;
    }

    set floors(fl) {
	if (typeof(fl) === 'number') this._floors = fl
	else throw new TypeError('Floors must be a number')
    }

    evacuateWarningMessage() {
	return `Evacuate slowly the ${this._floors} floors`;
    }
}
