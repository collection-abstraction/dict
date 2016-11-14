'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._Dict = exports._dict = exports.Dict = exports.dict = undefined;

var _Dict2 = require('./_Dict');

var _Dict3 = _interopRequireDefault(_Dict2);

var _dict2 = require('./_dict');

var _dict3 = _interopRequireDefault(_dict2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dict = (0, _Dict3.default)(Map); // use native Map implementation
var dict = (0, _dict3.default)(Dict);

exports.default = dict;
exports.dict = dict;
exports.Dict = Dict;
exports._dict = _dict3.default;
exports._Dict = _Dict3.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJEaWN0IiwiTWFwIiwiZGljdCIsIl9kaWN0IiwiX0RpY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPLG9CQUFPQyxHQUFQLENBQWIsQyxDQUE0QjtBQUM1QixJQUFNQyxPQUFPLG9CQUFPRixJQUFQLENBQWI7O2tCQUVlRSxJO1FBR2RBLEksR0FBQUEsSTtRQUNBRixJLEdBQUFBLEk7UUFDQUcsSztRQUNBQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9EaWN0IGZyb20gJy4vX0RpY3QnIDtcbmltcG9ydCBfZGljdCBmcm9tICcuL19kaWN0JyA7XG5cbmNvbnN0IERpY3QgPSBfRGljdCggTWFwICkgOyAvLyB1c2UgbmF0aXZlIE1hcCBpbXBsZW1lbnRhdGlvblxuY29uc3QgZGljdCA9IF9kaWN0KCBEaWN0ICkgO1xuXG5leHBvcnQgZGVmYXVsdCBkaWN0IDtcblxuZXhwb3J0IHtcblx0ZGljdCAsXG5cdERpY3QgLFxuXHRfZGljdCAsXG5cdF9EaWN0ICxcbn0gO1xuIl19