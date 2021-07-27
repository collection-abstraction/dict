import {KeyError} from '@failure-abstraction/error';
import {constant} from '@iterable-iterator/mapping';

export default function _Dict(Map) {
	const Dict = function (mapping = null) {
		this.container = new Map(mapping);
	};

	Dict.prototype.len = function () {
		return this.container.size;
	};

	Dict.prototype.isequal = function (other) {
		if (this.len() !== other.len()) return false;

		for (const [key, value] of other) {
			if (!this.has(key)) return false;

			if (this.get(key) !== value) return false;
		}

		return true;
	};

	Dict.prototype.__missing__ = function (key) {
		throw new KeyError(key);
	};

	Dict.prototype.get = function (key) {
		if (!this.container.has(key)) return this.__missing__(key);

		return this.container.get(key);
	};

	Dict.prototype.set = function (key, value) {
		this.container.set(key, value);

		return this;
	};

	Dict.prototype.delete = function (key) {
		if (!this.container.delete(key)) throw new KeyError();

		return this;
	};

	Dict.prototype.has = function (key) {
		return this.container.has(key);
	};

	Dict.prototype.clear = function () {
		this.container.clear();

		return this;
	};

	Dict.prototype.copy = function () {
		return new Dict(this.items());
	};

	Dict.fromkeys = function (seq, value = null) {
		return new Dict(constant(seq, value));
	};

	Dict.prototype.getdefault = function (key, dflt = null) {
		if (this.has(key)) return this.get(key);

		return dflt;
	};

	Dict.prototype.setdefault = function (key, dflt = null) {
		if (this.has(key)) return this.get(key);

		this.set(key, dflt);

		return dflt;
	};

	Dict.prototype.pop = function (key, dflt = null) {
		if (this.has(key)) {
			const value = this.get(key);

			this.delete(key);

			return value;
		}

		if (arguments.length < 2) throw new KeyError();

		return dflt;
	};

	Dict.prototype.popitem = function () {
		if (this.len() === 0) throw new KeyError();

		const key = this.keys().next().value;

		return [key, this.pop(key)];
	};

	Dict.prototype.keys = function () {
		return this.container.keys();
	};

	Dict.prototype.values = function () {
		return this.container.values();
	};

	Dict.prototype.items = function () {
		return this.container.entries();
	};

	Dict.prototype.update = function (mapping) {
		for (const [key, value] of mapping) this.set(key, value);
	};

	Dict.prototype[Symbol.iterator] = Dict.prototype.items;

	return Dict;
}
