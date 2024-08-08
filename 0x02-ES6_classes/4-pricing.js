/* eslint-disable class-methods-use-this */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) === 'number') this._amount = amount;
    else throw new TypeError('Amount must be a number');
    if (currency instanceof Currency) this._currency = currency;
    else throw new TypeError('Currency must be a currency');
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof (amount) === 'number') this._amount = amount;
    else throw new TypeError('Amount must be a number');
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) this._currency = currency;
    else throw new TypeError('Currency must be a currency');
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency._name} (${this._currency._code})`;
  }

  convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number') throw new TypeError('Amount must be a number');
    if (typeof (conversionRate) !== 'number') throw new TypeError('ConversionRate must be a number');
    return amount * conversionRate;
  }
}
