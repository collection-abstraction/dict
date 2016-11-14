[js-collections-dict](http://aureooms.github.io/js-collections-dict)
==

Collections library for JavaScript. Parent is
[js-data-structures](https://github.com/aureooms/js-data-structures).

JavaScript version of
[Python's collections library](https://docs.python.org/3.6/library/collections.html)
together with
[Python's heapq library](https://docs.python.org/3.6/library/heapq.html)
and
[Python's bisect library](https://docs.python.org/3.6/library/bisect.html).

```js
let {
	heapq , bisect ,
	namedtuple ,
	deque ,
	set ,
	dict , defaultdict , ordereddict , counter , chainmap
} = collections ;
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-collections-dict.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-collections-dict/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-collections-dict.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-collections-dict)
[![Build Status](http://img.shields.io/travis/aureooms/js-collections-dict.svg?style=flat)](https://travis-ci.org/aureooms/js-collections-dict)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-collections-dict.svg?style=flat)](https://coveralls.io/r/aureooms/js-collections-dict)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-collections-dict.svg?style=flat)](https://david-dm.org/aureooms/js-collections-dict#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-collections-dict.svg?style=flat)](https://david-dm.org/aureooms/js-collections-dict#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-collections-dict.svg?style=flat)](https://codeclimate.com/github/aureooms/js-collections-dict)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-collections-dict.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-collections-dict)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-collections-dict.svg?style=flat)](https://github.com/aureooms/js-collections-dict/issues)
[![Documentation](https://aureooms.github.io/js-collections-dict/badge.svg)](https://aureooms.github.io/js-collections-dict/source.html)

### Some changes w.r.t. Python's API

#### `heapq`

```js
let array = [ 2 , 1 , 3 ] ;
let heap = heapq.heapify( compare.increasing , array ) ;
array[0] ; // 1
heapq.heappop( heap ) ; // 1
heapq.heappop( heap ) ; // 2
heapq.heappop( heap ) ; // 3
array.length ; // 0
```
#### `set`

##### `set( iterable = null ) -> this`
##### `set.inclusion( A , B ) -> {-1,0,1}`
##### `set.prototype[Symbol.iterator]( ) -> iterable`
##### `set.prototype.keys( ) -> iterable`
##### `set.prototype.len( ) -> integer`
##### `set.prototype.has( key ) -> boolean`
##### `set.prototype.isdisjoint( other ) -> boolean`
##### `set.prototype.isequal( other ) -> boolean`
##### `set.prototype.issubset( other ) -> boolean`
##### `set.prototype.ispropersubset( other ) -> boolean`
##### `set.prototype.issuperset( other ) -> boolean`
##### `set.prototype.ispropersuperset( other ) -> boolean`
##### `set.prototype.union( ...others ) -> set`
##### `set.prototype.intersection( ...others ) -> set`
##### `set.prototype.difference( ...others ) -> set`
##### `set.prototype.symmetric_difference( other ) -> set`
##### `set.prototype.copy( ) -> set`
##### `set.prototype.update( ...others ) -> this`
##### `set.prototype.intersection_update( ...others ) -> this`
##### `set.prototype.difference_update( ...others ) -> this`
##### `set.prototype.symmetric_difference_update( other ) -> this`
##### `set.prototype.add( key ) -> this`
##### `set.prototype.remove( key ) -> this`
##### `set.prototype.discard( key ) -> this`
##### `set.prototype.pop( ) -> key`
##### `set.prototype.clear( ) -> this`
