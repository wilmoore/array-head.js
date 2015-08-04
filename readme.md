# array-head
> Returns the first element of the array or `undefined` given an empty or non-array value.

[![Build Status](http://img.shields.io/travis/wilmoore/array-head.js.svg)](https://travis-ci.org/wilmoore/array-head.js) [![Code Climate](https://codeclimate.com/github/wilmoore/array-head.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/array-head.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install array-head --save
```

> You can also use Duo, Bower or [download the files manually](https://github.com/wilmoore/array-head.js/releases).

###### npm stats

[![npm](https://img.shields.io/npm/v/array-head.svg)](https://www.npmjs.org/package/array-head) [![NPM downloads](http://img.shields.io/npm/dm/array-head.svg)](https://www.npmjs.org/package/array-head) [![Dependency Status](https://gemnasium.com/wilmoore/array-head.js.svg)](https://gemnasium.com/wilmoore/array-head.js)

## API Example

###### Pointful

```js
var first = require('array-head')
first([25, 20, 15, 10])
//=> 25
```

###### Pointfree Style

```js
var first = require('array-head')
var lists = [
  ['a', 'b', 'c'],
  [1, 2, 3]
]

lists.map(first)
//=> ['a', 1]
```

## API

### `first(val)`

###### arguments

 - `val (Array)` Array.

###### returns

 - `(*)` First element of the array or `undefined` given an empty or non-array value.

## Alternatives

 - `x => x[0]`
 - `function (x) { return x[0] }`

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/array-head.js.svg)](https://github.com/wilmoore/array-head.js/blob/master/license)
