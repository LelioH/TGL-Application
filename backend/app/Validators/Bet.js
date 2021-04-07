'use strict'

class Bet {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      '*.*.type_id': 'required',
      '*.*.numbers': 'required'
    }
  }
}

module.exports = Bet
