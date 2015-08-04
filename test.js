'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var first = require('./')

/*!
 * tests.
 */

test('first()', function (t) {
  t.equal(first(['Hello', 'There']), 'Hello', 'Returns first element of array')
  t.equal(first([]), undefined, 'Returns `undefined` for empty array')
  t.equal(first(1), undefined, 'Returns `undefined` for non-array')
  t.end()
})
