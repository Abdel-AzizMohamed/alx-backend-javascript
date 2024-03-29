/* eslint-disable */

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (
      this.constructor !== Building &&
      this.evacuationWarningMessage === undefined
    ) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage'
      );
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') throw TypeError('sqft must be a number');
    this._sqft = value;
  }
}
