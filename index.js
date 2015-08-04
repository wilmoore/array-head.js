'use strict'

/*!
 * exports.
 */

module.exports = first

/**
 * Returns the first element of the array or `undefined` given an empty or non-array value.
 *
 * @param {Array} input
 * array.
 *
 * @return {*|undefined}
 * First element of the array or `undefined` given an empty or non-array value.
 */

function first (val) {
  return Object(val) === val && typeof val.length === 'number' ? val[0] : void 0
}
