'use strict'

import { some, map, endsWith } from 'lodash'

export default {
  HTML5MODE_SUFFIXES: ['plans', 'register', 'payment', 'donate', 'upsell', 'receipt'],
  TRANSITION_DURATION: 150,
  /**
   * Validate if path ends with one of the suffixes
   *
   * @param {String} p Path to validate
   * @param {Array<String>} arr Array of valid suffixes
   */
  pathEndsWithAny (p, arr) {
    return some(
      map(arr, v => {
        return endsWith(p, v)
      })
    )
  }
}
