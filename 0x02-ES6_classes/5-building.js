/* eslint-disable class-methods-use-this */
export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) this.evacuationWarningMessage();
    if (typeof (sqft) === 'number') this._sqft = sqft;
    else throw new TypeError('Sqft must be a number');
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sq) {
    if (typeof (sq) === 'number') this._sqft = sq;
    else throw new TypeError('Sqft must be a number');
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
