import test from 'ava';

import {sorted} from '@iterable-iterator/sorted';
import {lexicographical} from '@total-order/lex';
import {increasing} from '@total-order/primitive';

import {KeyError} from './_fixtures.js';

import {dict} from '#module';

const lex = lexicographical(increasing);

test(dict.name, (t) => {
	const d = dict();

	t.is(dict().len(), 0, 'empty len');

	t.is(dict().has('x'), false, 'empty has');

	t.is(dict([['x', -1]]).len(), 1, 'mapping len');

	t.is(dict([['x', -1]]).has('x'), true, 'mapping has');

	t.deepEqual(dict([['x', -1]]).get('x'), -1, 'mapping get');

	t.is(dict(new Map([['x', -1]])).len(), 1, 'Map len');

	t.is(dict(new Map([['x', -1]])).has('x'), true, 'Map has');

	t.deepEqual(dict(new Map([['x', -1]])).get('x'), -1, 'Map get');

	t.is(dict(dict([['x', -1]])).len(), 1, 'dict len');

	t.is(dict(dict([['x', -1]])).has('x'), true, 'dict has');

	t.deepEqual(dict(dict([['x', -1]])).get('x'), -1, 'dict get');

	t.is(dict().set('x', -1).len(), 1, 'set len');

	t.is(dict().set('x', -1).has('x'), true, 'set has');

	t.deepEqual(dict().set('x', -1).get('x'), -1, 'set get');

	t.is(dict().set('x', -1).delete('x').len(), 0, 'delete len');

	t.is(dict().set('x', -1).delete('x').has('x'), false, 'delete has');

	t.is(dict().set('x', -1).clear().len(), 0, 'clear len');

	t.is(dict().set('x', -1).clear().has('x'), false, 'clear has');

	t.is(dict().set('x', -1).copy().len(), 1, 'copy len');

	t.is(dict().set('x', -1).copy().has('x'), true, 'copy has');

	t.deepEqual(dict().set('x', -1).copy().get('x'), -1, 'copy get');

	t.is(dict().getdefault('x'), null, 'empty getdefault null');

	t.deepEqual(dict().getdefault('x', -2), -2, 'empty getdefault');

	t.deepEqual(
		dict([['x', -1]]).getdefault('x', -2),
		-1,
		'mapping getdefault null',
	);

	t.deepEqual(dict([['x', -1]]).getdefault('x'), -1, 'mapping getdefault');

	t.is(dict().setdefault('x'), null, 'empty setdefault null');

	t.deepEqual(dict().setdefault('x', -2), -2, 'empty setdefault');

	t.deepEqual(
		dict([['x', -1]]).setdefault('x', -2),
		-1,
		'mapping setdefault null',
	);

	t.deepEqual(dict([['x', -1]]).setdefault('x'), -1, 'mapping setdefault');

	d.clear().setdefault('x');

	t.is(d.get('x'), null, 'empty setdefault null get');

	d.clear().setdefault('x', -2);

	t.deepEqual(d.get('x'), -2, 'empty setdefault -2 get');

	d.clear().set('x', -1);

	t.deepEqual(d.pop('x'), -1, 'pop value');

	t.is(d.len(), 0, 'pop len');

	d.clear().set('x', -1);

	t.deepEqual(d.pop('x', -2), -1, 'pop value -1 default -2');

	t.is(d.len(), 0, 'pop len default');

	t.deepEqual(d.pop('x', -2), -2, 'pop value empty default -2');

	d.clear().set('x', -1);

	t.deepEqual(d.popitem(), ['x', -1], 'popitem');

	t.is(d.len(), 0, 'popitem len');

	d.clear().set('x', -1).set('y', -2);

	t.deepEqual(sorted(increasing, d.keys()), ['x', 'y'], 'keys');

	t.deepEqual(sorted(increasing, d.values()), [-2, -1], 'values');

	t.deepEqual(
		sorted(lex, d.items()),
		[
			['x', -1],
			['y', -2],
		],
		'items',
	);

	d.clear().update([
		['x', -1],
		['y', -2],
	]);

	t.deepEqual(
		sorted(lex, d.items()),
		[
			['x', -1],
			['y', -2],
		],
		'update mapping',
	);

	d.clear().update(
		new Map([
			['x', -1],
			['y', -2],
		]),
	);

	t.deepEqual(
		sorted(lex, d.items()),
		[
			['x', -1],
			['y', -2],
		],
		'update Map',
	);

	d.clear().update(
		dict([
			['x', -1],
			['y', -2],
		]),
	);

	t.deepEqual(
		sorted(lex, d.items()),
		[
			['x', -1],
			['y', -2],
		],
		'update dict',
	);

	d.clear();

	t.throws(d.get.bind(d, 'x'), {instanceOf: KeyError}, 'get raises');

	t.throws(d.delete.bind(d, 'x'), {instanceOf: KeyError}, 'delete raises');

	t.throws(d.popitem.bind(d), {instanceOf: KeyError}, 'popitem raises');

	t.throws(d.pop.bind(d, 'x'), {instanceOf: KeyError}, 'pop raises');

	t.deepEqual(dict.fromkeys('abc', -1).get('b'), -1, 'fromkeys default -1');

	t.is(dict.fromkeys('abc').get('b'), null, 'fromkeys default null');

	t.true(dict.fromkeys('abc').isequal(dict.fromkeys('abc')), 'isequal 1');
	t.false(dict.fromkeys('abc').isequal(dict.fromkeys('abcd')), 'isequal 2');
	t.false(dict.fromkeys('abc').isequal(dict.fromkeys('abd')), 'isequal 3');
	t.false(
		dict.fromkeys('abc', 1).isequal(dict.fromkeys('abc', 2)),
		'isequal 3',
	);
});
