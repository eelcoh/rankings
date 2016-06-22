
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(rootX, rootY)
{
	var stack = [{ x: rootX, y: rootY }];
	while (stack.length > 0)
	{
		var front = stack.pop();
		var x = front.x;
		var y = front.y;
		if (x === y)
		{
			continue;
		}
		if (typeof x === 'object')
		{
			var c = 0;
			for (var key in x)
			{
				++c;
				if (!(key in y))
				{
					return false;
				}
				if (key === 'ctor')
				{
					continue;
				}
				stack.push({ x: x[key], y: y[key] });
			}
			if ('ctor' in x)
			{
				stack.push({ x: x.ctor, y: y.ctor});
			}
			if (c !== Object.keys(y).length)
			{
				return false;
			}
		}
		else if (typeof x === 'function')
		{
			throw new Error('Equality error: general function equality is ' +
							'undecidable, and therefore, unsupported');
		}
		else
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	var ord;
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}
	else if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b
			? EQ
			: a < b
				? LT
				: GT;
	}
	else if (x.ctor === '::' || x.ctor === '[]')
	{
		while (true)
		{
			if (x.ctor === '[]' && y.ctor === '[]')
			{
				return EQ;
			}
			if (x.ctor !== y.ctor)
			{
				return x.ctor === '[]' ? LT : GT;
			}
			ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
	}
	else if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}
	else
	{
		throw new Error('Comparison error: comparison is only defined on ints, ' +
						'floats, times, chars, strings, lists of comparable values, ' +
						'and tuples of comparable values.');
	}
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};
	for (var key in oldRecord)
	{
		var value = (key in updatedFields) ? updatedFields[key] : oldRecord[key];
		newRecord[key] = value;
	}
	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		var name = v.func ? v.func.name : v.name;
		return '<function' + (name === '' ? '' : ':') + name + '>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin' || v.ctor === 'Set_elm_builtin')
		{
			var name, list;
			if (v.ctor === 'Set_elm_builtin')
			{
				name = 'Set';
				list = A2(
					_elm_lang$core$List$map,
					function(x) {return x._0; },
					_elm_lang$core$Dict$toList(v._0)
				);
			}
			else
			{
				name = 'Dict';
				list = _elm_lang$core$Dict$toList(v);
			}
			return name + '.fromList ' + toString(list);
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p0) {
		var _p1 = _p0;
		return A2(f, _p1._0, _p1._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$snd = function (_p2) {
	var _p3 = _p2;
	return _p3._1;
};
var _elm_lang$core$Basics$fst = function (_p4) {
	var _p5 = _p4;
	return _p5._0;
};
var _elm_lang$core$Basics$always = F2(
	function (a, _p6) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$Never = function (a) {
	return {ctor: 'Never', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$oneOf = function (maybes) {
	oneOf:
	while (true) {
		var _p1 = maybes;
		if (_p1.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p3 = _p1._0;
			var _p2 = _p3;
			if (_p2.ctor === 'Nothing') {
				var _v3 = _p1._1;
				maybes = _v3;
				continue oneOf;
			} else {
				return _p3;
			}
		}
	}
};
var _elm_lang$core$Maybe$andThen = F2(
	function (maybeValue, callback) {
		var _p4 = maybeValue;
		if (_p4.ctor === 'Just') {
			return callback(_p4._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p5._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p6 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p6.ctor === '_Tuple2') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p6._0._0, _p6._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p7 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p7.ctor === '_Tuple3') && (_p7._0.ctor === 'Just')) && (_p7._1.ctor === 'Just')) && (_p7._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p7._0._0, _p7._1._0, _p7._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p8 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p8.ctor === '_Tuple4') && (_p8._0.ctor === 'Just')) && (_p8._1.ctor === 'Just')) && (_p8._2.ctor === 'Just')) && (_p8._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p8._0._0, _p8._1._0, _p8._2._0, _p8._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p9 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p9.ctor === '_Tuple5') && (_p9._0.ctor === 'Just')) && (_p9._1.ctor === 'Just')) && (_p9._2.ctor === 'Just')) && (_p9._3.ctor === 'Just')) && (_p9._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p9._0._0, _p9._1._0, _p9._2._0, _p9._3._0, _p9._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}


function range(lo, hi)
{
	var list = Nil;
	if (lo <= hi)
	{
		do
		{
			list = Cons(hi, list);
		}
		while (hi-- > lo);
	}
	return list;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,
	range: range,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return _elm_lang$core$Basics$not(
			A2(
				_elm_lang$core$List$any,
				function (_p2) {
					return _elm_lang$core$Basics$not(
						isOkay(_p2));
				},
				list));
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			_elm_lang$core$Native_List.range(
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						_elm_lang$core$List_ops['::'],
						f(x),
						acc);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (x, xs$) {
				return pred(x) ? A2(_elm_lang$core$List_ops['::'], x, xs$) : xs$;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return A2(_elm_lang$core$List_ops['::'], _p10._0, xs);
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$List_ops['::'], x, y);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return A2(
						_elm_lang$core$List_ops['::'],
						A2(f, x, _p11._0),
						accAcc);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				_elm_lang$core$Native_List.fromArray(
					[b]),
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$List_ops['::'], x, y);
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		_elm_lang$core$Native_List.fromArray(
			[]),
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$List_ops['::'], x, _p16),
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: A2(_elm_lang$core$List_ops['::'], x, _p15)
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Native_List.fromArray(
					[])
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$List_ops['::'], _p19._0, _p20._0),
				_1: A2(_elm_lang$core$List_ops['::'], _p19._1, _p20._1)
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_List.fromArray(
				[]),
			_1: _elm_lang$core$Native_List.fromArray(
				[])
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var step = F2(
				function (x, rest) {
					return A2(
						_elm_lang$core$List_ops['::'],
						sep,
						A2(_elm_lang$core$List_ops['::'], x, rest));
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_p21._1);
			return A2(_elm_lang$core$List_ops['::'], _p21._0, spersed);
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p22 = list;
			if (_p22.ctor === '[]') {
				return list;
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p22._0,
					A2(_elm_lang$core$List$take, n - 1, _p22._1));
			}
		}
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v23 = A2(_elm_lang$core$List_ops['::'], value, result),
					_v24 = n - 1,
					_v25 = value;
				result = _v23;
				n = _v24;
				value = _v25;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			_elm_lang$core$Native_List.fromArray(
				[]),
			n,
			value);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (result, callback) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$formatError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function addPublicModule(object, name, main)
{
	var init = main ? makeEmbed(name, main) : mainIsUndefined(name);

	object['worker'] = function worker(flags)
	{
		return init(undefined, flags, false);
	}

	object['embed'] = function embed(domNode, flags)
	{
		return init(domNode, flags, true);
	}

	object['fullscreen'] = function fullscreen(flags)
	{
		return init(document.body, flags, true);
	};
}


// PROGRAM FAIL

function mainIsUndefined(name)
{
	return function(domNode)
	{
		var message = 'Cannot initialize module `' + name +
			'` because it has no `main` value!\nWhat should I show on screen?';
		domNode.innerHTML = errorHtml(message);
		throw new Error(message);
	};
}

function errorHtml(message)
{
	return '<div style="padding-left:1em;">'
		+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
		+ '<pre style="padding-left:1em;">' + message + '</pre>'
		+ '</div>';
}


// PROGRAM SUCCESS

function makeEmbed(moduleName, main)
{
	return function embed(rootDomNode, flags, withRenderer)
	{
		try
		{
			var program = mainToProgram(moduleName, main);
			if (!withRenderer)
			{
				program.renderer = dummyRenderer;
			}
			return makeEmbedHelp(moduleName, program, rootDomNode, flags);
		}
		catch (e)
		{
			rootDomNode.innerHTML = errorHtml(e.message);
			throw e;
		}
	};
}

function dummyRenderer()
{
	return { update: function() {} };
}


// MAIN TO PROGRAM

function mainToProgram(moduleName, wrappedMain)
{
	var main = wrappedMain.main;

	if (typeof main.init === 'undefined')
	{
		var emptyBag = batch(_elm_lang$core$Native_List.Nil);
		var noChange = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			emptyBag
		);

		return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
			init: function() { return noChange; },
			view: function() { return main; },
			update: F2(function() { return noChange; }),
			subscriptions: function () { return emptyBag; }
		});
	}

	var flags = wrappedMain.flags;
	var init = flags
		? initWithFlags(moduleName, main.init, flags)
		: initWithoutFlags(moduleName, main.init);

	return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
		init: init,
		view: main.view,
		update: main.update,
		subscriptions: main.subscriptions,
	});
}

function initWithoutFlags(moduleName, realInit)
{
	return function init(flags)
	{
		if (typeof flags !== 'undefined')
		{
			throw new Error(
				'You are giving module `' + moduleName + '` an argument in JavaScript.\n'
				+ 'This module does not take arguments though! You probably need to change the\n'
				+ 'initialization code to something like `Elm.' + moduleName + '.fullscreen()`'
			);
		}
		return realInit();
	};
}

function initWithFlags(moduleName, realInit, flagDecoder)
{
	return function init(flags)
	{
		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Err')
		{
			throw new Error(
				'You are trying to initialize module `' + moduleName + '` with an unexpected argument.\n'
				+ 'When trying to convert it to a usable Elm value, I run into this problem:\n\n'
				+ result._0
			);
		}
		return realInit(result._0);
	};
}


// SETUP RUNTIME SYSTEM

function makeEmbedHelp(moduleName, program, rootDomNode, flags)
{
	var init = program.init;
	var update = program.update;
	var subscriptions = program.subscriptions;
	var view = program.view;
	var makeRenderer = program.renderer;

	// ambient state
	var managers = {};
	var renderer;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var results = init(flags);
		var model = results._0;
		renderer = makeRenderer(rootDomNode, enqueue, view(model));
		var cmds = results._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			renderer.update(view(model));
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, handleMsg, loop);
	}

	var task = A2(andThen, init, loop);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			var value = converter(cmdList._0);
			for (var i = 0; i < subs.length; i++)
			{
				subs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function send(value)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, value);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		var value = result._0;
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	mainToProgram: mainToProgram,
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,
	addPublicModule: addPublicModule,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(task, callback)
{
	return {
		ctor: '_Task_andThen',
		task: task,
		callback: callback
	};
}

function onError(task, callback)
{
	return {
		ctor: '_Task_onError',
		task: task,
		callback: callback
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		numSteps = step(numSteps, process);
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$lazy$Native_Lazy = function() {

function memoize(thunk)
{
    var value;
    var isForced = false;
    return function(tuple0) {
        if (!isForced) {
            value = thunk(tuple0);
            isForced = true;
        }
        return value;
    };
}

return {
    memoize: memoize
};

}();

var _elm_lang$lazy$Lazy$force = function (_p0) {
	var _p1 = _p0;
	return _p1._0(
		{ctor: '_Tuple0'});
};
var _elm_lang$lazy$Lazy$Lazy = function (a) {
	return {ctor: 'Lazy', _0: a};
};
var _elm_lang$lazy$Lazy$lazy = function (thunk) {
	return _elm_lang$lazy$Lazy$Lazy(
		_elm_lang$lazy$Native_Lazy.memoize(thunk));
};
var _elm_lang$lazy$Lazy$map = F2(
	function (f, a) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p2) {
				var _p3 = _p2;
				return f(
					_elm_lang$lazy$Lazy$force(a));
			});
	});
var _elm_lang$lazy$Lazy$map2 = F3(
	function (f, a, b) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p4) {
				var _p5 = _p4;
				return A2(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b));
			});
	});
var _elm_lang$lazy$Lazy$map3 = F4(
	function (f, a, b, c) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p6) {
				var _p7 = _p6;
				return A3(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c));
			});
	});
var _elm_lang$lazy$Lazy$map4 = F5(
	function (f, a, b, c, d) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p8) {
				var _p9 = _p8;
				return A4(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c),
					_elm_lang$lazy$Lazy$force(d));
			});
	});
var _elm_lang$lazy$Lazy$map5 = F6(
	function (f, a, b, c, d, e) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p10) {
				var _p11 = _p10;
				return A5(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c),
					_elm_lang$lazy$Lazy$force(d),
					_elm_lang$lazy$Lazy$force(e));
			});
	});
var _elm_lang$lazy$Lazy$apply = F2(
	function (f, x) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p12) {
				var _p13 = _p12;
				return A2(
					_elm_lang$lazy$Lazy$force,
					f,
					_elm_lang$lazy$Lazy$force(x));
			});
	});
var _elm_lang$lazy$Lazy$andThen = F2(
	function (a, callback) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p14) {
				var _p15 = _p14;
				return _elm_lang$lazy$Lazy$force(
					callback(
						_elm_lang$lazy$Lazy$force(a)));
			});
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;
	var i = 0;
	var is = [];
	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}
	return _elm_lang$core$Native_List.fromArray(is);
}

function toInt(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
		start = 1;
	}
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
	}
	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function toFloat(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		start = 1;
	}
	var dotCount = 0;
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if ('0' <= c && c <= '9')
		{
			continue;
		}
		if (c === '.')
		{
			dotCount += 1;
			if (dotCount <= 1)
			{
				continue;
			}
		}
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	return _elm_lang$core$Result$Ok(parseFloat(s));
}

function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[i - 1],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _Bogdanp$elm_combine$Combine$app = function (p) {
	var _p0 = p;
	if (_p0.ctor === 'Parser') {
		return _p0._0;
	} else {
		return _elm_lang$lazy$Lazy$force(_p0._0);
	}
};
var _Bogdanp$elm_combine$Combine$parse = F2(
	function (p, input) {
		return A2(
			_Bogdanp$elm_combine$Combine$app,
			p,
			{input: input, position: 0});
	});
var _Bogdanp$elm_combine$Combine$Context = F2(
	function (a, b) {
		return {input: a, position: b};
	});
var _Bogdanp$elm_combine$Combine$RecursiveParser = function (a) {
	return {ctor: 'RecursiveParser', _0: a};
};
var _Bogdanp$elm_combine$Combine$rec = function (t) {
	return _Bogdanp$elm_combine$Combine$RecursiveParser(
		_elm_lang$lazy$Lazy$lazy(
			function (_p1) {
				var _p2 = _p1;
				return _Bogdanp$elm_combine$Combine$app(
					t(
						{ctor: '_Tuple0'}));
			}));
};
var _Bogdanp$elm_combine$Combine$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _Bogdanp$elm_combine$Combine$primitive = _Bogdanp$elm_combine$Combine$Parser;
var _Bogdanp$elm_combine$Combine$bimap = F3(
	function (fok, ferr, p) {
		return _Bogdanp$elm_combine$Combine$Parser(
			function (cx) {
				var _p3 = A2(_Bogdanp$elm_combine$Combine$app, p, cx);
				if (_p3._0.ctor === 'Ok') {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Result$Ok(
							fok(_p3._0._0)),
						_1: _p3._1
					};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Result$Err(
							ferr(_p3._0._0)),
						_1: _p3._1
					};
				}
			});
	});
var _Bogdanp$elm_combine$Combine$map = F2(
	function (f, p) {
		return A3(_Bogdanp$elm_combine$Combine$bimap, f, _elm_lang$core$Basics$identity, p);
	});
var _Bogdanp$elm_combine$Combine$mapError = _Bogdanp$elm_combine$Combine$bimap(_elm_lang$core$Basics$identity);
var _Bogdanp$elm_combine$Combine$andThen = F2(
	function (p, f) {
		return _Bogdanp$elm_combine$Combine$Parser(
			function (cx) {
				var _p4 = A2(_Bogdanp$elm_combine$Combine$app, p, cx);
				if (_p4._0.ctor === 'Ok') {
					return A2(
						_Bogdanp$elm_combine$Combine$app,
						f(_p4._0._0),
						_p4._1);
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Result$Err(_p4._0._0),
						_1: _p4._1
					};
				}
			});
	});
var _Bogdanp$elm_combine$Combine$sequence = function (ps) {
	var accumulate = F3(
		function (acc, ps, cx) {
			accumulate:
			while (true) {
				var _p5 = ps;
				if (_p5.ctor === '[]') {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Result$Ok(
							_elm_lang$core$List$reverse(acc)),
						_1: cx
					};
				} else {
					var _p6 = A2(_Bogdanp$elm_combine$Combine$app, _p5._0, cx);
					if (_p6._0.ctor === 'Ok') {
						var _v6 = A2(_elm_lang$core$List_ops['::'], _p6._0._0, acc),
							_v7 = _p5._1,
							_v8 = _p6._1;
						acc = _v6;
						ps = _v7;
						cx = _v8;
						continue accumulate;
					} else {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Result$Err(_p6._0._0),
							_1: _p6._1
						};
					}
				}
			}
		});
	return _Bogdanp$elm_combine$Combine$Parser(
		function (cx) {
			return A3(
				accumulate,
				_elm_lang$core$Native_List.fromArray(
					[]),
				ps,
				cx);
		});
};
var _Bogdanp$elm_combine$Combine$fail = function (ms) {
	return _Bogdanp$elm_combine$Combine$Parser(
		function (cx) {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Result$Err(ms),
				_1: cx
			};
		});
};
var _Bogdanp$elm_combine$Combine$succeed = function (r) {
	return _Bogdanp$elm_combine$Combine$Parser(
		function (cx) {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Result$Ok(r),
				_1: cx
			};
		});
};
var _Bogdanp$elm_combine$Combine$andMap = F2(
	function (lp, rp) {
		return A2(
			_Bogdanp$elm_combine$Combine$andThen,
			lp,
			function (f) {
				return A2(
					_Bogdanp$elm_combine$Combine$andThen,
					rp,
					function (x) {
						return _Bogdanp$elm_combine$Combine$succeed(
							f(x));
					});
			});
	});
var _Bogdanp$elm_combine$Combine$between = F3(
	function (lp, rp, p) {
		return A2(
			_Bogdanp$elm_combine$Combine$andMap,
			A2(
				_Bogdanp$elm_combine$Combine$andMap,
				A2(
					_Bogdanp$elm_combine$Combine$map,
					_elm_lang$core$Basics$flip(
						function (_p7) {
							return _elm_lang$core$Basics$always(
								_elm_lang$core$Basics$always(_p7));
						}),
					lp),
				p),
			rp);
	});
var _Bogdanp$elm_combine$Combine$skip = function (p) {
	return A2(
		_Bogdanp$elm_combine$Combine$andThen,
		p,
		_elm_lang$core$Basics$always(
			_Bogdanp$elm_combine$Combine$succeed(
				{ctor: '_Tuple0'})));
};
var _Bogdanp$elm_combine$Combine$count = F2(
	function (n, p) {
		var accumulate = F2(
			function (x, acc) {
				return (_elm_lang$core$Native_Utils.cmp(x, 0) < 1) ? _Bogdanp$elm_combine$Combine$succeed(
					_elm_lang$core$List$reverse(acc)) : A2(
					_Bogdanp$elm_combine$Combine$andThen,
					p,
					function (res) {
						return A2(
							accumulate,
							x - 1,
							A2(_elm_lang$core$List_ops['::'], res, acc));
					});
			});
		return A2(
			accumulate,
			n,
			_elm_lang$core$Native_List.fromArray(
				[]));
	});
var _Bogdanp$elm_combine$Combine$string = function (s) {
	return _Bogdanp$elm_combine$Combine$Parser(
		function (cx) {
			if (A2(_elm_lang$core$String$startsWith, s, cx.input)) {
				var len = _elm_lang$core$String$length(s);
				var rem = A2(_elm_lang$core$String$dropLeft, len, cx.input);
				var pos = cx.position + len;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Ok(s),
					_1: _elm_lang$core$Native_Utils.update(
						cx,
						{input: rem, position: pos})
				};
			} else {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Err(
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$core$Basics_ops['++'],
								'expected ',
								_elm_lang$core$Basics$toString(s))
							])),
					_1: cx
				};
			}
		});
};
var _Bogdanp$elm_combine$Combine$parens = A2(
	_Bogdanp$elm_combine$Combine$between,
	_Bogdanp$elm_combine$Combine$string('('),
	_Bogdanp$elm_combine$Combine$string(')'));
var _Bogdanp$elm_combine$Combine$braces = A2(
	_Bogdanp$elm_combine$Combine$between,
	_Bogdanp$elm_combine$Combine$string('{'),
	_Bogdanp$elm_combine$Combine$string('}'));
var _Bogdanp$elm_combine$Combine$brackets = A2(
	_Bogdanp$elm_combine$Combine$between,
	_Bogdanp$elm_combine$Combine$string('['),
	_Bogdanp$elm_combine$Combine$string(']'));
var _Bogdanp$elm_combine$Combine$regex = function (pattern) {
	var pattern$ = A2(_elm_lang$core$String$startsWith, '^', pattern) ? pattern : A2(_elm_lang$core$Basics_ops['++'], '^', pattern);
	return _Bogdanp$elm_combine$Combine$Parser(
		function (cx) {
			var _p8 = A3(
				_elm_lang$core$Regex$find,
				_elm_lang$core$Regex$AtMost(1),
				_elm_lang$core$Regex$regex(pattern$),
				cx.input);
			if ((_p8.ctor === '::') && (_p8._1.ctor === '[]')) {
				var _p9 = _p8._0;
				var len = _elm_lang$core$String$length(_p9.match);
				var rem = A2(_elm_lang$core$String$dropLeft, len, cx.input);
				var pos = cx.position + len;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Ok(_p9.match),
					_1: _elm_lang$core$Native_Utils.update(
						cx,
						{input: rem, position: pos})
				};
			} else {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Err(
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$core$Basics_ops['++'],
								'expected input matching Regexp /',
								A2(_elm_lang$core$Basics_ops['++'], pattern$, '/'))
							])),
					_1: cx
				};
			}
		});
};
var _Bogdanp$elm_combine$Combine$while = function (pred) {
	var accumulate = F2(
		function (acc, cx) {
			accumulate:
			while (true) {
				var _p10 = _elm_lang$core$String$uncons(cx.input);
				if (_p10.ctor === 'Just') {
					var _p11 = _p10._0._0;
					if (pred(_p11)) {
						var pos = cx.position + 1;
						var c = A2(_elm_lang$core$String$cons, _p11, '');
						var _v11 = A2(_elm_lang$core$Basics_ops['++'], acc, c),
							_v12 = _elm_lang$core$Native_Utils.update(
							cx,
							{input: _p10._0._1, position: pos});
						acc = _v11;
						cx = _v12;
						continue accumulate;
					} else {
						return {ctor: '_Tuple2', _0: acc, _1: cx};
					}
				} else {
					return {ctor: '_Tuple2', _0: acc, _1: cx};
				}
			}
		});
	return _Bogdanp$elm_combine$Combine$Parser(
		function (cx) {
			var _p12 = A2(accumulate, '', cx);
			var res = _p12._0;
			var cx$ = _p12._1;
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Result$Ok(res),
				_1: cx$
			};
		});
};
var _Bogdanp$elm_combine$Combine$end = _Bogdanp$elm_combine$Combine$Parser(
	function (cx) {
		return _elm_lang$core$Native_Utils.eq(cx.input, '') ? {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Result$Ok(
				{ctor: '_Tuple0'}),
			_1: cx
		} : {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Result$Err(
				_elm_lang$core$Native_List.fromArray(
					['expected end of input'])),
			_1: cx
		};
	});
var _Bogdanp$elm_combine$Combine$or = F2(
	function (lp, rp) {
		return _Bogdanp$elm_combine$Combine$Parser(
			function (cx) {
				var res = A2(_Bogdanp$elm_combine$Combine$app, lp, cx);
				var _p13 = res;
				if (_p13._0.ctor === 'Ok') {
					return res;
				} else {
					var res$ = A2(_Bogdanp$elm_combine$Combine$app, rp, cx);
					var _p14 = res$;
					if (_p14._0.ctor === 'Ok') {
						return res$;
					} else {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Result$Err(
								A2(_elm_lang$core$Basics_ops['++'], _p13._0._0, _p14._0._0)),
							_1: cx
						};
					}
				}
			});
	});
var _Bogdanp$elm_combine$Combine$choice = function (xs) {
	return A3(
		_elm_lang$core$List$foldr,
		_Bogdanp$elm_combine$Combine$or,
		_Bogdanp$elm_combine$Combine$fail(
			_elm_lang$core$Native_List.fromArray(
				[])),
		xs);
};
var _Bogdanp$elm_combine$Combine$optional = F2(
	function (res, p) {
		return A2(
			_Bogdanp$elm_combine$Combine$or,
			p,
			_Bogdanp$elm_combine$Combine$succeed(res));
	});
var _Bogdanp$elm_combine$Combine$chainl = F2(
	function (p, op) {
		var accumulate = function (x) {
			return A2(
				_Bogdanp$elm_combine$Combine$or,
				A2(
					_Bogdanp$elm_combine$Combine$andThen,
					op,
					function (f) {
						return A2(
							_Bogdanp$elm_combine$Combine$andThen,
							p,
							function (y) {
								return accumulate(
									A2(f, x, y));
							});
					}),
				_Bogdanp$elm_combine$Combine$succeed(x));
		};
		return A2(_Bogdanp$elm_combine$Combine$andThen, p, accumulate);
	});
var _Bogdanp$elm_combine$Combine$chainr = F2(
	function (p, op) {
		var accumulate = function (x) {
			return A2(
				_Bogdanp$elm_combine$Combine$or,
				A2(
					_Bogdanp$elm_combine$Combine$andThen,
					op,
					function (f) {
						return A2(
							_Bogdanp$elm_combine$Combine$andThen,
							A2(_Bogdanp$elm_combine$Combine$andThen, p, accumulate),
							function (y) {
								return _Bogdanp$elm_combine$Combine$succeed(
									A2(f, x, y));
							});
					}),
				_Bogdanp$elm_combine$Combine$succeed(x));
		};
		return A2(_Bogdanp$elm_combine$Combine$andThen, p, accumulate);
	});
var _Bogdanp$elm_combine$Combine$maybe = function (p) {
	return _Bogdanp$elm_combine$Combine$Parser(
		function (cx) {
			var _p15 = A2(_Bogdanp$elm_combine$Combine$app, p, cx);
			if ((_p15.ctor === '_Tuple2') && (_p15._0.ctor === 'Ok')) {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Ok(
						_elm_lang$core$Maybe$Just(_p15._0._0)),
					_1: _p15._1
				};
			} else {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Ok(_elm_lang$core$Maybe$Nothing),
					_1: cx
				};
			}
		});
};
var _Bogdanp$elm_combine$Combine$many = function (p) {
	var accumulate = F2(
		function (acc, cx) {
			accumulate:
			while (true) {
				var _p16 = A2(_Bogdanp$elm_combine$Combine$app, p, cx);
				if ((_p16.ctor === '_Tuple2') && (_p16._0.ctor === 'Ok')) {
					var _p17 = _p16._1;
					if (_elm_lang$core$Native_Utils.eq(cx, _p17)) {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$List$reverse(acc),
							_1: cx
						};
					} else {
						var _v17 = A2(_elm_lang$core$List_ops['::'], _p16._0._0, acc),
							_v18 = _p17;
						acc = _v17;
						cx = _v18;
						continue accumulate;
					}
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$List$reverse(acc),
						_1: cx
					};
				}
			}
		});
	return _Bogdanp$elm_combine$Combine$Parser(
		function (cx) {
			var _p18 = A2(
				accumulate,
				_elm_lang$core$Native_List.fromArray(
					[]),
				cx);
			var res = _p18._0;
			var cx$ = _p18._1;
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Result$Ok(res),
				_1: cx$
			};
		});
};
var _Bogdanp$elm_combine$Combine$many1 = function (p) {
	return A2(
		_Bogdanp$elm_combine$Combine$andMap,
		A2(
			_Bogdanp$elm_combine$Combine$map,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$List_ops['::'], x, y);
				}),
			p),
		_Bogdanp$elm_combine$Combine$many(p));
};
var _Bogdanp$elm_combine$Combine$skipMany1 = function (p) {
	return A2(
		_Bogdanp$elm_combine$Combine$andThen,
		_Bogdanp$elm_combine$Combine$many1(
			_Bogdanp$elm_combine$Combine$skip(p)),
		_elm_lang$core$Basics$always(
			_Bogdanp$elm_combine$Combine$succeed(
				{ctor: '_Tuple0'})));
};
var _Bogdanp$elm_combine$Combine$sepBy1 = F2(
	function (sep, p) {
		return A2(
			_Bogdanp$elm_combine$Combine$andMap,
			A2(
				_Bogdanp$elm_combine$Combine$map,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$List_ops['::'], x, y);
					}),
				p),
			_Bogdanp$elm_combine$Combine$many(
				A2(
					_Bogdanp$elm_combine$Combine$andMap,
					A2(
						_Bogdanp$elm_combine$Combine$map,
						_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always),
						sep),
					p)));
	});
var _Bogdanp$elm_combine$Combine$sepBy = F2(
	function (sep, p) {
		return A2(
			_Bogdanp$elm_combine$Combine$or,
			A2(_Bogdanp$elm_combine$Combine$sepBy1, sep, p),
			_Bogdanp$elm_combine$Combine$succeed(
				_elm_lang$core$Native_List.fromArray(
					[])));
	});
var _Bogdanp$elm_combine$Combine$sepEndBy1 = F2(
	function (sep, p) {
		return A2(
			_Bogdanp$elm_combine$Combine$andMap,
			A2(
				_Bogdanp$elm_combine$Combine$map,
				_elm_lang$core$Basics$always,
				A2(_Bogdanp$elm_combine$Combine$sepBy1, sep, p)),
			_Bogdanp$elm_combine$Combine$maybe(sep));
	});
var _Bogdanp$elm_combine$Combine$sepEndBy = F2(
	function (sep, p) {
		return A2(
			_Bogdanp$elm_combine$Combine$or,
			A2(_Bogdanp$elm_combine$Combine$sepEndBy1, sep, p),
			_Bogdanp$elm_combine$Combine$succeed(
				_elm_lang$core$Native_List.fromArray(
					[])));
	});
var _Bogdanp$elm_combine$Combine$skipMany = function (p) {
	return A2(
		_Bogdanp$elm_combine$Combine$andThen,
		_Bogdanp$elm_combine$Combine$many(
			_Bogdanp$elm_combine$Combine$skip(p)),
		_elm_lang$core$Basics$always(
			_Bogdanp$elm_combine$Combine$succeed(
				{ctor: '_Tuple0'})));
};
var _Bogdanp$elm_combine$Combine$manyTill = F2(
	function (p, end) {
		var accumulate = F2(
			function (acc, cx) {
				accumulate:
				while (true) {
					var _p19 = A2(_Bogdanp$elm_combine$Combine$app, end, cx);
					if (_p19._0.ctor === 'Ok') {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Result$Ok(
								_elm_lang$core$List$reverse(acc)),
							_1: _p19._1
						};
					} else {
						var _p20 = A2(_Bogdanp$elm_combine$Combine$app, p, cx);
						if ((_p20.ctor === '_Tuple2') && (_p20._0.ctor === 'Ok')) {
							var _v21 = A2(_elm_lang$core$List_ops['::'], _p20._0._0, acc),
								_v22 = _p20._1;
							acc = _v21;
							cx = _v22;
							continue accumulate;
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Result$Err(_p19._0._0),
								_1: _p19._1
							};
						}
					}
				}
			});
		return _Bogdanp$elm_combine$Combine$Parser(
			accumulate(
				_elm_lang$core$Native_List.fromArray(
					[])));
	});

var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
_Bogdanp$elm_combine$Combine_Infix_ops['<|>'] = _Bogdanp$elm_combine$Combine$or;
var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
_Bogdanp$elm_combine$Combine_Infix_ops['*>'] = F2(
	function (lp, rp) {
		return A2(
			_Bogdanp$elm_combine$Combine$andMap,
			A2(
				_Bogdanp$elm_combine$Combine$map,
				_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always),
				lp),
			rp);
	});
var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
_Bogdanp$elm_combine$Combine_Infix_ops['<*'] = F2(
	function (lp, rp) {
		return A2(
			_Bogdanp$elm_combine$Combine$andMap,
			A2(_Bogdanp$elm_combine$Combine$map, _elm_lang$core$Basics$always, lp),
			rp);
	});
var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
_Bogdanp$elm_combine$Combine_Infix_ops['<?>'] = F2(
	function (p, m) {
		return A2(
			_Bogdanp$elm_combine$Combine$mapError,
			function (_p0) {
				return _elm_lang$core$Native_List.fromArray(
					[m]);
			},
			p);
	});
var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
_Bogdanp$elm_combine$Combine_Infix_ops['<$'] = function (res) {
	return _Bogdanp$elm_combine$Combine$map(
		function (_p1) {
			return res;
		});
};
var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
_Bogdanp$elm_combine$Combine_Infix_ops['<*>'] = _Bogdanp$elm_combine$Combine$andMap;
var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
_Bogdanp$elm_combine$Combine_Infix_ops['<$>'] = _Bogdanp$elm_combine$Combine$map;

var _Bogdanp$elm_combine$Combine_Char$crlf = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<$'],
		_elm_lang$core$Native_Utils.chr('\n'),
		_Bogdanp$elm_combine$Combine$regex('\r\n')),
	'expected crlf');
var _Bogdanp$elm_combine$Combine_Char$satisfy = function (pred) {
	return _Bogdanp$elm_combine$Combine$primitive(
		function (cx) {
			var message = 'could not satisfy predicate';
			var _p0 = _elm_lang$core$String$uncons(cx.input);
			if (_p0.ctor === 'Just') {
				var _p1 = _p0._0._0;
				return pred(_p1) ? {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Ok(_p1),
					_1: _elm_lang$core$Native_Utils.update(
						cx,
						{input: _p0._0._1, position: cx.position + 1})
				} : {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Err(
						_elm_lang$core$Native_List.fromArray(
							[message])),
					_1: cx
				};
			} else {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Result$Err(
						_elm_lang$core$Native_List.fromArray(
							[message])),
					_1: cx
				};
			}
		});
};
var _Bogdanp$elm_combine$Combine_Char$char = function (c) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(c)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected ',
			_elm_lang$core$Basics$toString(c)));
};
var _Bogdanp$elm_combine$Combine_Char$anyChar = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(
		_elm_lang$core$Basics$always(true)),
	'expected any character');
var _Bogdanp$elm_combine$Combine_Char$oneOf = function (cs) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(
			A2(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, cs)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected one of ',
			_elm_lang$core$Basics$toString(cs)));
};
var _Bogdanp$elm_combine$Combine_Char$noneOf = function (cs) {
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(
			function (_p2) {
				return _elm_lang$core$Basics$not(
					A3(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, cs, _p2));
			}),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected none of ',
			_elm_lang$core$Basics$toString(cs)));
};
var _Bogdanp$elm_combine$Combine_Char$space = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr(' '))),
	'expected space');
var _Bogdanp$elm_combine$Combine_Char$tab = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr('\t'))),
	'expected tab');
var _Bogdanp$elm_combine$Combine_Char$newline = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr('\n'))),
	'expected newline');
var _Bogdanp$elm_combine$Combine_Char$eol = A2(_Bogdanp$elm_combine$Combine_Infix_ops['<|>'], _Bogdanp$elm_combine$Combine_Char$newline, _Bogdanp$elm_combine$Combine_Char$crlf);
var _Bogdanp$elm_combine$Combine_Char$lower = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isLower),
	'expected a lowercase character');
var _Bogdanp$elm_combine$Combine_Char$upper = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isUpper),
	'expected an uppercase character');
var _Bogdanp$elm_combine$Combine_Char$digit = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isDigit),
	'expected a digit');
var _Bogdanp$elm_combine$Combine_Char$octDigit = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isOctDigit),
	'expected an octal digit');
var _Bogdanp$elm_combine$Combine_Char$hexDigit = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isHexDigit),
	'expected a hexadecimal digit');

var _Bogdanp$elm_combine$Combine_Num$digit = function () {
	var toDigit = function (c) {
		return _elm_lang$core$Char$toCode(c) - _elm_lang$core$Char$toCode(
			_elm_lang$core$Native_Utils.chr('0'));
	};
	return A2(
		_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
		A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], toDigit, _Bogdanp$elm_combine$Combine_Char$digit),
		'expected a digit');
}();
var _Bogdanp$elm_combine$Combine_Num$sign = A2(
	_Bogdanp$elm_combine$Combine$optional,
	1,
	_Bogdanp$elm_combine$Combine$choice(
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['<$'],
				1,
				_Bogdanp$elm_combine$Combine$string('+')),
				A2(
				_Bogdanp$elm_combine$Combine_Infix_ops['<$'],
				-1,
				_Bogdanp$elm_combine$Combine$string('-'))
			])));
var _Bogdanp$elm_combine$Combine_Num$unwrap = F2(
	function (f, s) {
		var _p0 = f(s);
		if (_p0.ctor === 'Ok') {
			return _p0._0;
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'Combine.Num',
				{
					start: {line: 19, column: 3},
					end: {line: 24, column: 73}
				},
				_p0)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'impossible state in Combine.Num.unwrap: ',
					_elm_lang$core$Basics$toString(_p0._0)));
		}
	});
var _Bogdanp$elm_combine$Combine_Num$toInt = _Bogdanp$elm_combine$Combine_Num$unwrap(_elm_lang$core$String$toInt);
var _Bogdanp$elm_combine$Combine_Num$int = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine$andMap,
		A2(
			_Bogdanp$elm_combine$Combine$map,
			F2(
				function (x, y) {
					return x * y;
				}),
			_Bogdanp$elm_combine$Combine_Num$sign),
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_Bogdanp$elm_combine$Combine_Num$toInt,
			_Bogdanp$elm_combine$Combine$regex('(0|[1-9][0-9]*)'))),
	'expected an integer');
var _Bogdanp$elm_combine$Combine_Num$toFloat = _Bogdanp$elm_combine$Combine_Num$unwrap(_elm_lang$core$String$toFloat);
var _Bogdanp$elm_combine$Combine_Num$float = A2(
	_Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
	A2(
		_Bogdanp$elm_combine$Combine$andMap,
		A2(
			_Bogdanp$elm_combine$Combine$map,
			function (_p2) {
				return F2(
					function (x, y) {
						return x * y;
					})(
					_elm_lang$core$Basics$toFloat(_p2));
			},
			_Bogdanp$elm_combine$Combine_Num$sign),
		A2(
			_Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
			_Bogdanp$elm_combine$Combine_Num$toFloat,
			_Bogdanp$elm_combine$Combine$regex('(0|[1-9][0-9]*)(\\.[0-9]+)'))),
	'expected a float');

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		_elm_lang$core$Native_List.range(
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(_elm_lang$core$List_ops['::'], key, keyList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2(_elm_lang$core$List_ops['::'], value, valueList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					_elm_lang$core$List_ops['::'],
					{ctor: '_Tuple2', _0: key, _1: value},
					list);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				var _p3 = _p2;
				var _p9 = _p3._1;
				var _p8 = _p3._0;
				var _p4 = _p8;
				if (_p4.ctor === '[]') {
					return {
						ctor: '_Tuple2',
						_0: _p8,
						_1: A3(rightStep, rKey, rValue, _p9)
					};
				} else {
					var _p7 = _p4._1;
					var _p6 = _p4._0._1;
					var _p5 = _p4._0._0;
					return (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) ? {
						ctor: '_Tuple2',
						_0: _p7,
						_1: A3(leftStep, _p5, _p6, _p9)
					} : ((_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) ? {
						ctor: '_Tuple2',
						_0: _p8,
						_1: A3(rightStep, rKey, rValue, _p9)
					} : {
						ctor: '_Tuple2',
						_0: _p7,
						_1: A4(bothStep, _p5, _p6, rValue, _p9)
					});
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				_elm_lang$core$Native_List.fromArray(
					[
						'Internal red-black tree invariant violated, expected ',
						msg,
						' and got ',
						_elm_lang$core$Basics$toString(c),
						'/',
						lgot,
						'/',
						rgot,
						'\nPlease report this bug to <https://github.com/elm-lang/core/issues>'
					])));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v11_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v11_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v11_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v13 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v14 = _p14._3;
				n = _v13;
				dict = _v14;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v17 = targetKey,
							_v18 = _p15._3;
						targetKey = _v17;
						dict = _v18;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v19 = targetKey,
							_v20 = _p15._4;
						targetKey = _v19;
						dict = _v20;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v23 = _p18._1,
					_v24 = _p18._2,
					_v25 = _p18._4;
				k = _v23;
				v = _v24;
				r = _v25;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v33_6:
	do {
		_v33_5:
		do {
			_v33_4:
			do {
				_v33_3:
				do {
					_v33_2:
					do {
						_v33_1:
						do {
							_v33_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v33_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v33_3;
																		} else {
																			break _v33_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v33_4;
																	} else {
																		break _v33_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	break _v33_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v33_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v33_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v33_5;
																	} else {
																		break _v33_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v33_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v33_5;
																	} else {
																		break _v33_6;
																	}
																}
															} else {
																break _v33_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v33_5;
															} else {
																break _v33_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v33_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v33_3;
																} else {
																	break _v33_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v33_4;
															} else {
																break _v33_6;
															}
														default:
															break _v33_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v33_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v33_1;
														} else {
															break _v33_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v33_5;
													} else {
														break _v33_6;
													}
												default:
													break _v33_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v33_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v33_3;
														} else {
															break _v33_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v33_4;
													} else {
														break _v33_6;
													}
												default:
													break _v33_6;
											}
										} else {
											break _v33_6;
										}
									}
								} else {
									break _v33_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (c, l, r) {
		var _p29 = {ctor: '_Tuple2', _0: l, _1: r};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = c;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: c, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						c,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: c, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						c,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var l$ = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, c, k, v, l$, r);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function decodeObject(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function decodeTuple(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'tuple',
		func: f,
		decoders: decoders
	};
}

function andThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function customAndThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'customAndThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function decodeObject1(f, d1)
{
	return decodeObject(f, [d1]);
}

function decodeObject2(f, d1, d2)
{
	return decodeObject(f, [d1, d2]);
}

function decodeObject3(f, d1, d2, d3)
{
	return decodeObject(f, [d1, d2, d3]);
}

function decodeObject4(f, d1, d2, d3, d4)
{
	return decodeObject(f, [d1, d2, d3, d4]);
}

function decodeObject5(f, d1, d2, d3, d4, d5)
{
	return decodeObject(f, [d1, d2, d3, d4, d5]);
}

function decodeObject6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODING TUPLES

function decodeTuple1(f, d1)
{
	return decodeTuple(f, [d1]);
}

function decodeTuple2(f, d1, d2)
{
	return decodeTuple(f, [d1, d2]);
}

function decodeTuple3(f, d1, d2, d3)
{
	return decodeTuple(f, [d1, d2, d3]);
}

function decodeTuple4(f, d1, d2, d3, d4)
{
	return decodeTuple(f, [d1, d2, d3, d4]);
}

function decodeTuple5(f, d1, d2, d3, d4, d5)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5]);
}

function decodeTuple6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok')
				? result
				: badField(field, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'tuple':
			var decoders = decoder.decoders;
			var len = decoders.length;

			if ( !(value instanceof Array) || value.length !== len )
			{
				return badPrimitive('a Tuple with ' + len + ' entries', value);
			}

			var answer = decoder.func;
			for (var i = 0; i < len; i++)
			{
				var result = runHelp(decoders[i], value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'customAndThen':
			var result = runHelp(decoder.decoder, value);
			if (result.tag !== 'ok')
			{
				return result;
			}
			var realResult = decoder.callback(result.value);
			if (realResult.ctor === 'Err')
			{
				return badPrimitive('something custom', value);
			}
			return ok(realResult._0);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'map-many':
		case 'tuple':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
		case 'customAndThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),

	decodeObject1: F2(decodeObject1),
	decodeObject2: F3(decodeObject2),
	decodeObject3: F4(decodeObject3),
	decodeObject4: F5(decodeObject4),
	decodeObject5: F6(decodeObject5),
	decodeObject6: F7(decodeObject6),
	decodeObject7: F8(decodeObject7),
	decodeObject8: F9(decodeObject8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	decodeTuple1: F2(decodeTuple1),
	decodeTuple2: F3(decodeTuple2),
	decodeTuple3: F4(decodeTuple3),
	decodeTuple4: F5(decodeTuple4),
	decodeTuple5: F6(decodeTuple5),
	decodeTuple6: F7(decodeTuple6),
	decodeTuple7: F8(decodeTuple7),
	decodeTuple8: F9(decodeTuple8),

	andThen: F2(andThen),
	customAndThen: F2(customAndThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$tuple8 = _elm_lang$core$Native_Json.decodeTuple8;
var _elm_lang$core$Json_Decode$tuple7 = _elm_lang$core$Native_Json.decodeTuple7;
var _elm_lang$core$Json_Decode$tuple6 = _elm_lang$core$Native_Json.decodeTuple6;
var _elm_lang$core$Json_Decode$tuple5 = _elm_lang$core$Native_Json.decodeTuple5;
var _elm_lang$core$Json_Decode$tuple4 = _elm_lang$core$Native_Json.decodeTuple4;
var _elm_lang$core$Json_Decode$tuple3 = _elm_lang$core$Native_Json.decodeTuple3;
var _elm_lang$core$Json_Decode$tuple2 = _elm_lang$core$Native_Json.decodeTuple2;
var _elm_lang$core$Json_Decode$tuple1 = _elm_lang$core$Native_Json.decodeTuple1;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$customDecoder = _elm_lang$core$Native_Json.customAndThen;
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$object8 = _elm_lang$core$Native_Json.decodeObject8;
var _elm_lang$core$Json_Decode$object7 = _elm_lang$core$Native_Json.decodeObject7;
var _elm_lang$core$Json_Decode$object6 = _elm_lang$core$Native_Json.decodeObject6;
var _elm_lang$core$Json_Decode$object5 = _elm_lang$core$Native_Json.decodeObject5;
var _elm_lang$core$Json_Decode$object4 = _elm_lang$core$Native_Json.decodeObject4;
var _elm_lang$core$Json_Decode$object3 = _elm_lang$core$Native_Json.decodeObject3;
var _elm_lang$core$Json_Decode$object2 = _elm_lang$core$Native_Json.decodeObject2;
var _elm_lang$core$Json_Decode$object1 = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode_ops = _elm_lang$core$Json_Decode_ops || {};
_elm_lang$core$Json_Decode_ops[':='] = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Json_Decode_ops[':='], x, y);
				}),
			decoder,
			fields);
	});
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

//import Result //

var _elm_lang$core$Native_Date = function() {

function fromString(str)
{
	var date = new Date(str);
	return isNaN(date.getTime())
		? _elm_lang$core$Result$Err('unable to parse \'' + str + '\' as a date')
		: _elm_lang$core$Result$Ok(date);
}

var dayTable = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthTable =
	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


return {
	fromString: fromString,
	year: function(d) { return d.getFullYear(); },
	month: function(d) { return { ctor: monthTable[d.getMonth()] }; },
	day: function(d) { return d.getDate(); },
	hour: function(d) { return d.getHours(); },
	minute: function(d) { return d.getMinutes(); },
	second: function(d) { return d.getSeconds(); },
	millisecond: function(d) { return d.getMilliseconds(); },
	toTime: function(d) { return d.getTime(); },
	fromTime: function(t) { return new Date(t); },
	dayOfWeek: function(d) { return { ctor: dayTable[d.getDay()] }; }
};

}();
var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_p1._0,
				_elm_lang$core$Platform$sendToApp(router)));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (f, task) {
		return A2(
			_elm_lang$core$Task$onError,
			task,
			function (err) {
				return _elm_lang$core$Task$fail(
					f(err));
			});
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			});
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					});
			});
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							});
					});
			});
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									taskD,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									});
							});
					});
			});
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									taskD,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											taskE,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											});
									});
							});
					});
			});
	});
var _elm_lang$core$Task$andMap = F2(
	function (taskFunc, taskValue) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskFunc,
			function (func) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskValue,
					function (value) {
						return _elm_lang$core$Task$succeed(
							func(value));
					});
			});
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p2 = tasks;
	if (_p2.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			_elm_lang$core$Native_List.fromArray(
				[]));
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$List_ops['::'], x, y);
				}),
			_p2._0,
			_elm_lang$core$Task$sequence(_p2._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p3) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$toMaybe = function (task) {
	return A2(
		_elm_lang$core$Task$onError,
		A2(_elm_lang$core$Task$map, _elm_lang$core$Maybe$Just, task),
		function (_p4) {
			return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
		});
};
var _elm_lang$core$Task$fromMaybe = F2(
	function ($default, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Task$succeed(_p5._0);
		} else {
			return _elm_lang$core$Task$fail($default);
		}
	});
var _elm_lang$core$Task$toResult = function (task) {
	return A2(
		_elm_lang$core$Task$onError,
		A2(_elm_lang$core$Task$map, _elm_lang$core$Result$Ok, task),
		function (msg) {
			return _elm_lang$core$Task$succeed(
				_elm_lang$core$Result$Err(msg));
		});
};
var _elm_lang$core$Task$fromResult = function (result) {
	var _p6 = result;
	if (_p6.ctor === 'Ok') {
		return _elm_lang$core$Task$succeed(_p6._0);
	} else {
		return _elm_lang$core$Task$fail(_p6._0);
	}
};
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p9, _p8, _p7) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$T = function (a) {
	return {ctor: 'T', _0: a};
};
var _elm_lang$core$Task$perform = F3(
	function (onFail, onSuccess, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$T(
				A2(
					_elm_lang$core$Task$onError,
					A2(_elm_lang$core$Task$map, onSuccess, task),
					function (x) {
						return _elm_lang$core$Task$succeed(
							onFail(x));
					})));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$T(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Native_Scheduler.spawn(
					A2(
						_elm_lang$core$Time$setInterval,
						_p1,
						A2(_elm_lang$core$Platform$sendToSelf, router, _p1))),
				function (id) {
					return A3(
						_elm_lang$core$Time$spawnHelp,
						router,
						_p0._1,
						A3(_elm_lang$core$Dict$insert, _p1, id, processes));
				});
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				_elm_lang$core$Native_List.fromArray(
					[_p6]),
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				A2(_elm_lang$core$List_ops['::'], _p6, _p4._0),
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Time$now,
				function (time) {
					return A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Task$sequence(
							A2(
								_elm_lang$core$List$map,
								function (tagger) {
									return A2(
										_elm_lang$core$Platform$sendToApp,
										router,
										tagger(time));
								},
								_p7._0)),
						function (_p8) {
							return _elm_lang$core$Task$succeed(state);
						});
				});
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Native_Scheduler.kill(id),
						function (_p14) {
							return _p13._2;
						})
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: A2(_elm_lang$core$List_ops['::'], interval, _p18._0),
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			killTask,
			function (_p20) {
				return A2(
					_elm_lang$core$Task$andThen,
					A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict),
					function (newProcesses) {
						return _elm_lang$core$Task$succeed(
							A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
					});
			});
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Date$millisecond = _elm_lang$core$Native_Date.millisecond;
var _elm_lang$core$Date$second = _elm_lang$core$Native_Date.second;
var _elm_lang$core$Date$minute = _elm_lang$core$Native_Date.minute;
var _elm_lang$core$Date$hour = _elm_lang$core$Native_Date.hour;
var _elm_lang$core$Date$dayOfWeek = _elm_lang$core$Native_Date.dayOfWeek;
var _elm_lang$core$Date$day = _elm_lang$core$Native_Date.day;
var _elm_lang$core$Date$month = _elm_lang$core$Native_Date.month;
var _elm_lang$core$Date$year = _elm_lang$core$Native_Date.year;
var _elm_lang$core$Date$fromTime = _elm_lang$core$Native_Date.fromTime;
var _elm_lang$core$Date$toTime = _elm_lang$core$Native_Date.toTime;
var _elm_lang$core$Date$fromString = _elm_lang$core$Native_Date.fromString;
var _elm_lang$core$Date$now = A2(_elm_lang$core$Task$map, _elm_lang$core$Date$fromTime, _elm_lang$core$Time$now);
var _elm_lang$core$Date$Date = {ctor: 'Date'};
var _elm_lang$core$Date$Sun = {ctor: 'Sun'};
var _elm_lang$core$Date$Sat = {ctor: 'Sat'};
var _elm_lang$core$Date$Fri = {ctor: 'Fri'};
var _elm_lang$core$Date$Thu = {ctor: 'Thu'};
var _elm_lang$core$Date$Wed = {ctor: 'Wed'};
var _elm_lang$core$Date$Tue = {ctor: 'Tue'};
var _elm_lang$core$Date$Mon = {ctor: 'Mon'};
var _elm_lang$core$Date$Dec = {ctor: 'Dec'};
var _elm_lang$core$Date$Nov = {ctor: 'Nov'};
var _elm_lang$core$Date$Oct = {ctor: 'Oct'};
var _elm_lang$core$Date$Sep = {ctor: 'Sep'};
var _elm_lang$core$Date$Aug = {ctor: 'Aug'};
var _elm_lang$core$Date$Jul = {ctor: 'Jul'};
var _elm_lang$core$Date$Jun = {ctor: 'Jun'};
var _elm_lang$core$Date$May = {ctor: 'May'};
var _elm_lang$core$Date$Apr = {ctor: 'Apr'};
var _elm_lang$core$Date$Mar = {ctor: 'Mar'};
var _elm_lang$core$Date$Feb = {ctor: 'Feb'};
var _elm_lang$core$Date$Jan = {ctor: 'Jan'};

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_community$json_extra$Json_Decode_Extra$lazy = function (getDecoder) {
	return A2(
		_elm_lang$core$Json_Decode$customDecoder,
		_elm_lang$core$Json_Decode$value,
		function (rawValue) {
			return A2(
				_elm_lang$core$Json_Decode$decodeValue,
				getDecoder(
					{ctor: '_Tuple0'}),
				rawValue);
		});
};
var _elm_community$json_extra$Json_Decode_Extra$maybeNull = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
				A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder)
			]));
};
var _elm_community$json_extra$Json_Decode_Extra$withDefault = F2(
	function (fallback, decoder) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			_elm_lang$core$Json_Decode$maybe(decoder),
			function (_p0) {
				return _elm_lang$core$Json_Decode$succeed(
					A2(_elm_lang$core$Maybe$withDefault, fallback, _p0));
			});
	});
var _elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples = F2(
	function (keyDecoder, tuples) {
		var _p1 = tuples;
		if (_p1.ctor === '[]') {
			return _elm_lang$core$Json_Decode$succeed(_elm_lang$core$Dict$empty);
		} else {
			var _p2 = A2(_elm_lang$core$Json_Decode$decodeString, keyDecoder, _p1._0._0);
			if (_p2.ctor === 'Ok') {
				return A2(
					_elm_lang$core$Json_Decode$andThen,
					A2(_elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples, keyDecoder, _p1._1),
					function (_p3) {
						return _elm_lang$core$Json_Decode$succeed(
							A3(_elm_lang$core$Dict$insert, _p2._0, _p1._0._1, _p3));
					});
			} else {
				return _elm_lang$core$Json_Decode$fail(_p2._0);
			}
		}
	});
var _elm_community$json_extra$Json_Decode_Extra$dict2 = F2(
	function (keyDecoder, valueDecoder) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			_elm_lang$core$Json_Decode$dict(valueDecoder),
			function (_p4) {
				return A2(
					_elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples,
					keyDecoder,
					_elm_lang$core$Dict$toList(_p4));
			});
	});
var _elm_community$json_extra$Json_Decode_Extra$set = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		_elm_lang$core$Json_Decode$list(decoder),
		function (_p5) {
			return _elm_lang$core$Json_Decode$succeed(
				_elm_lang$core$Set$fromList(_p5));
		});
};
var _elm_community$json_extra$Json_Decode_Extra$date = A2(_elm_lang$core$Json_Decode$customDecoder, _elm_lang$core$Json_Decode$string, _elm_lang$core$Date$fromString);
var _elm_community$json_extra$Json_Decode_Extra$apply = _elm_lang$core$Json_Decode$object2(
	F2(
		function (x, y) {
			return x(y);
		}));
var _elm_community$json_extra$Json_Decode_Extra_ops = _elm_community$json_extra$Json_Decode_Extra_ops || {};
_elm_community$json_extra$Json_Decode_Extra_ops['|:'] = _elm_community$json_extra$Json_Decode_Extra$apply;

var _elm_community$list_extra$List_Extra$greedyGroupsOfWithStep = F3(
	function (size, step, xs) {
		var okayXs = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(xs),
			0) > 0;
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs$ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		return (okayArgs && okayXs) ? A2(
			_elm_lang$core$List_ops['::'],
			group,
			A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs$)) : _elm_lang$core$Native_List.fromArray(
			[]);
	});
var _elm_community$list_extra$List_Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$groupsOfWithStep = F3(
	function (size, step, xs) {
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs$ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		var okayLength = _elm_lang$core$Native_Utils.eq(
			size,
			_elm_lang$core$List$length(group));
		return (okayArgs && okayLength) ? A2(
			_elm_lang$core$List_ops['::'],
			group,
			A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, step, xs$)) : _elm_lang$core$Native_List.fromArray(
			[]);
	});
var _elm_community$list_extra$List_Extra$groupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$list_extra$List_Extra$zip = _elm_lang$core$List$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$list_extra$List_Extra$isPrefixOf = function (prefix) {
	return function (_p0) {
		return A2(
			_elm_lang$core$List$all,
			_elm_lang$core$Basics$identity,
			A3(
				_elm_lang$core$List$map2,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					}),
				prefix,
				_p0));
	};
};
var _elm_community$list_extra$List_Extra$isSuffixOf = F2(
	function (suffix, xs) {
		return A2(
			_elm_community$list_extra$List_Extra$isPrefixOf,
			_elm_lang$core$List$reverse(suffix),
			_elm_lang$core$List$reverse(xs));
	});
var _elm_community$list_extra$List_Extra$selectSplit = function (xs) {
	var _p1 = xs;
	if (_p1.ctor === '[]') {
		return _elm_lang$core$Native_List.fromArray(
			[]);
	} else {
		var _p5 = _p1._1;
		var _p4 = _p1._0;
		return A2(
			_elm_lang$core$List_ops['::'],
			{
				ctor: '_Tuple3',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _p4,
				_2: _p5
			},
			A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					return {
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$List_ops['::'], _p4, _p3._0),
						_1: _p3._1,
						_2: _p3._2
					};
				},
				_elm_community$list_extra$List_Extra$selectSplit(_p5)));
	}
};
var _elm_community$list_extra$List_Extra$select = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return _elm_lang$core$Native_List.fromArray(
			[]);
	} else {
		var _p10 = _p6._1;
		var _p9 = _p6._0;
		return A2(
			_elm_lang$core$List_ops['::'],
			{ctor: '_Tuple2', _0: _p9, _1: _p10},
			A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return {
						ctor: '_Tuple2',
						_0: _p8._0,
						_1: A2(_elm_lang$core$List_ops['::'], _p9, _p8._1)
					};
				},
				_elm_community$list_extra$List_Extra$select(_p10)));
	}
};
var _elm_community$list_extra$List_Extra$tailsHelp = F2(
	function (e, list) {
		var _p11 = list;
		if (_p11.ctor === '::') {
			var _p12 = _p11._0;
			return A2(
				_elm_lang$core$List_ops['::'],
				A2(_elm_lang$core$List_ops['::'], e, _p12),
				A2(_elm_lang$core$List_ops['::'], _p12, _p11._1));
		} else {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		}
	});
var _elm_community$list_extra$List_Extra$tails = A2(
	_elm_lang$core$List$foldr,
	_elm_community$list_extra$List_Extra$tailsHelp,
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$core$Native_List.fromArray(
			[])
		]));
var _elm_community$list_extra$List_Extra$isInfixOf = F2(
	function (infix, xs) {
		return A2(
			_elm_lang$core$List$any,
			_elm_community$list_extra$List_Extra$isPrefixOf(infix),
			_elm_community$list_extra$List_Extra$tails(xs));
	});
var _elm_community$list_extra$List_Extra$inits = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (e, acc) {
			return A2(
				_elm_lang$core$List_ops['::'],
				_elm_lang$core$Native_List.fromArray(
					[]),
				A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return A2(_elm_lang$core$List_ops['::'], x, y);
						})(e),
					acc));
		}),
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$core$Native_List.fromArray(
			[])
		]));
var _elm_community$list_extra$List_Extra$groupWhileTransitively = F2(
	function (cmp, xs$) {
		var _p13 = xs$;
		if (_p13.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p13._1.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$core$Native_List.fromArray(
						[_p13._0])
					]);
			} else {
				var _p15 = _p13._0;
				var _p14 = A2(_elm_community$list_extra$List_Extra$groupWhileTransitively, cmp, _p13._1);
				if (_p14.ctor === '::') {
					return A2(cmp, _p15, _p13._1._0) ? A2(
						_elm_lang$core$List_ops['::'],
						A2(_elm_lang$core$List_ops['::'], _p15, _p14._0),
						_p14._1) : A2(
						_elm_lang$core$List_ops['::'],
						_elm_lang$core$Native_List.fromArray(
							[_p15]),
						_p14);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$stripPrefix = F2(
	function (prefix, xs) {
		var step = F2(
			function (e, m) {
				var _p16 = m;
				if (_p16.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_p16._0.ctor === '[]') {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Native_Utils.eq(e, _p16._0._0) ? _elm_lang$core$Maybe$Just(_p16._0._1) : _elm_lang$core$Maybe$Nothing;
					}
				}
			});
		return A3(
			_elm_lang$core$List$foldl,
			step,
			_elm_lang$core$Maybe$Just(xs),
			prefix);
	});
var _elm_community$list_extra$List_Extra$dropWhileEnd = function (p) {
	return A2(
		_elm_lang$core$List$foldr,
		F2(
			function (x, xs) {
				return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? _elm_lang$core$Native_List.fromArray(
					[]) : A2(_elm_lang$core$List_ops['::'], x, xs);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]));
};
var _elm_community$list_extra$List_Extra$takeWhileEnd = function (p) {
	var step = F2(
		function (x, _p17) {
			var _p18 = _p17;
			var _p19 = _p18._0;
			return (p(x) && _p18._1) ? {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$List_ops['::'], x, _p19),
				_1: true
			} : {ctor: '_Tuple2', _0: _p19, _1: false};
		});
	return function (_p20) {
		return _elm_lang$core$Basics$fst(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_List.fromArray(
						[]),
					_1: true
				},
				_p20));
	};
};
var _elm_community$list_extra$List_Extra$splitAt = F2(
	function (n, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$take, n, xs),
			_1: A2(_elm_lang$core$List$drop, n, xs)
		};
	});
var _elm_community$list_extra$List_Extra$unfoldr = F2(
	function (f, seed) {
		var _p21 = f(seed);
		if (_p21.ctor === 'Nothing') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			return A2(
				_elm_lang$core$List_ops['::'],
				_p21._0._0,
				A2(_elm_community$list_extra$List_Extra$unfoldr, f, _p21._0._1));
		}
	});
var _elm_community$list_extra$List_Extra$scanr1 = F2(
	function (f, xs$) {
		var _p22 = xs$;
		if (_p22.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p22._1.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[_p22._0]);
			} else {
				var _p23 = A2(_elm_community$list_extra$List_Extra$scanr1, f, _p22._1);
				if (_p23.ctor === '::') {
					return A2(
						_elm_lang$core$List_ops['::'],
						A2(f, _p22._0, _p23._0),
						_p23);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanr = F3(
	function (f, acc, xs$) {
		var _p24 = xs$;
		if (_p24.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[acc]);
		} else {
			var _p25 = A3(_elm_community$list_extra$List_Extra$scanr, f, acc, _p24._1);
			if (_p25.ctor === '::') {
				return A2(
					_elm_lang$core$List_ops['::'],
					A2(f, _p24._0, _p25._0),
					_p25);
			} else {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanl1 = F2(
	function (f, xs$) {
		var _p26 = xs$;
		if (_p26.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			return A3(_elm_lang$core$List$scanl, f, _p26._0, _p26._1);
		}
	});
var _elm_community$list_extra$List_Extra$foldr1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p27 = m;
						if (_p27.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, x, _p27._0);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$foldl1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p28 = m;
						if (_p28.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, _p28._0, x);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$interweaveHelp = F3(
	function (l1, l2, acc) {
		interweaveHelp:
		while (true) {
			var _p29 = {ctor: '_Tuple2', _0: l1, _1: l2};
			_v17_1:
			do {
				if (_p29._0.ctor === '::') {
					if (_p29._1.ctor === '::') {
						var _v18 = _p29._0._1,
							_v19 = _p29._1._1,
							_v20 = A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							_elm_lang$core$Native_List.fromArray(
								[_p29._0._0, _p29._1._0]));
						l1 = _v18;
						l2 = _v19;
						acc = _v20;
						continue interweaveHelp;
					} else {
						break _v17_1;
					}
				} else {
					if (_p29._1.ctor === '[]') {
						break _v17_1;
					} else {
						return A2(_elm_lang$core$Basics_ops['++'], acc, _p29._1);
					}
				}
			} while(false);
			return A2(_elm_lang$core$Basics_ops['++'], acc, _p29._0);
		}
	});
var _elm_community$list_extra$List_Extra$interweave = F2(
	function (l1, l2) {
		return A3(
			_elm_community$list_extra$List_Extra$interweaveHelp,
			l1,
			l2,
			_elm_lang$core$Native_List.fromArray(
				[]));
	});
var _elm_community$list_extra$List_Extra$permutations = function (xs$) {
	var _p30 = xs$;
	if (_p30.ctor === '[]') {
		return _elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$core$Native_List.fromArray(
				[])
			]);
	} else {
		var f = function (_p31) {
			var _p32 = _p31;
			return A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$List_ops['::'], x, y);
					})(_p32._0),
				_elm_community$list_extra$List_Extra$permutations(_p32._1));
		};
		return A2(
			_elm_lang$core$List$concatMap,
			f,
			_elm_community$list_extra$List_Extra$select(_p30));
	}
};
var _elm_community$list_extra$List_Extra$isPermutationOf = F2(
	function (permut, xs) {
		return A2(
			_elm_lang$core$List$member,
			permut,
			_elm_community$list_extra$List_Extra$permutations(xs));
	});
var _elm_community$list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
	var _p33 = xs;
	if (_p33.ctor === '[]') {
		return _elm_lang$core$Native_List.fromArray(
			[]);
	} else {
		var _p34 = _p33._0;
		var f = F2(
			function (ys, r) {
				return A2(
					_elm_lang$core$List_ops['::'],
					ys,
					A2(
						_elm_lang$core$List_ops['::'],
						A2(_elm_lang$core$List_ops['::'], _p34, ys),
						r));
			});
		return A2(
			_elm_lang$core$List_ops['::'],
			_elm_lang$core$Native_List.fromArray(
				[_p34]),
			A3(
				_elm_lang$core$List$foldr,
				f,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_community$list_extra$List_Extra$subsequencesNonEmpty(_p33._1)));
	}
};
var _elm_community$list_extra$List_Extra$subsequences = function (xs) {
	return A2(
		_elm_lang$core$List_ops['::'],
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_community$list_extra$List_Extra$subsequencesNonEmpty(xs));
};
var _elm_community$list_extra$List_Extra$isSubsequenceOf = F2(
	function (subseq, xs) {
		return A2(
			_elm_lang$core$List$member,
			subseq,
			_elm_community$list_extra$List_Extra$subsequences(xs));
	});
var _elm_community$list_extra$List_Extra$transpose = function (ll) {
	transpose:
	while (true) {
		var _p35 = ll;
		if (_p35.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p35._0.ctor === '[]') {
				var _v25 = _p35._1;
				ll = _v25;
				continue transpose;
			} else {
				var _p36 = _p35._1;
				var tails = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$tail, _p36);
				var heads = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$head, _p36);
				return A2(
					_elm_lang$core$List_ops['::'],
					A2(_elm_lang$core$List_ops['::'], _p35._0._0, heads),
					_elm_community$list_extra$List_Extra$transpose(
						A2(_elm_lang$core$List_ops['::'], _p35._0._1, tails)));
			}
		}
	}
};
var _elm_community$list_extra$List_Extra$intercalate = function (xs) {
	return function (_p37) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$intersperse, xs, _p37));
	};
};
var _elm_community$list_extra$List_Extra$removeWhen = F2(
	function (pred, list) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p38) {
				return _elm_lang$core$Basics$not(
					pred(_p38));
			},
			list);
	});
var _elm_community$list_extra$List_Extra$removeAt = F2(
	function (index, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return l;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p39 = tail;
			if (_p39.ctor === 'Nothing') {
				return l;
			} else {
				return A2(_elm_lang$core$List$append, head, _p39._0);
			}
		}
	});
var _elm_community$list_extra$List_Extra$singleton = function (x) {
	return _elm_lang$core$Native_List.fromArray(
		[x]);
};
var _elm_community$list_extra$List_Extra$setAt = F3(
	function (index, value, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p40 = tail;
			if (_p40.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$List$append,
						head,
						A2(_elm_lang$core$List_ops['::'], value, _p40._0)));
			}
		}
	});
var _elm_community$list_extra$List_Extra$deleteIf = F2(
	function (predicate, items) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p41) {
				return _elm_lang$core$Basics$not(
					predicate(_p41));
			},
			items);
	});
var _elm_community$list_extra$List_Extra$updateIfIndex = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, x) {
					return predicate(i) ? update(x) : x;
				}),
			list);
	});
var _elm_community$list_extra$List_Extra$updateAt = F3(
	function (index, update, list) {
		return ((_elm_lang$core$Native_Utils.cmp(index, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(
			index,
			_elm_lang$core$List$length(list)) > -1)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			A3(
				_elm_community$list_extra$List_Extra$updateIfIndex,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(index),
				update,
				list));
	});
var _elm_community$list_extra$List_Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var _elm_community$list_extra$List_Extra$replaceIf = F3(
	function (predicate, replacement, list) {
		return A3(
			_elm_community$list_extra$List_Extra$updateIf,
			predicate,
			_elm_lang$core$Basics$always(replacement),
			list);
	});
var _elm_community$list_extra$List_Extra$findIndices = function (p) {
	return function (_p42) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Basics$fst,
			A2(
				_elm_lang$core$List$filter,
				function (_p43) {
					var _p44 = _p43;
					return p(_p44._1);
				},
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_p42)));
	};
};
var _elm_community$list_extra$List_Extra$findIndex = function (p) {
	return function (_p45) {
		return _elm_lang$core$List$head(
			A2(_elm_community$list_extra$List_Extra$findIndices, p, _p45));
	};
};
var _elm_community$list_extra$List_Extra$elemIndices = function (x) {
	return _elm_community$list_extra$List_Extra$findIndices(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$elemIndex = function (x) {
	return _elm_community$list_extra$List_Extra$findIndex(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			var _p46 = list;
			if (_p46.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p47 = _p46._0;
				if (predicate(_p47)) {
					return _elm_lang$core$Maybe$Just(_p47);
				} else {
					var _v30 = predicate,
						_v31 = _p46._1;
					predicate = _v30;
					list = _v31;
					continue find;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$notMember = function (x) {
	return function (_p48) {
		return _elm_lang$core$Basics$not(
			A2(_elm_lang$core$List$member, x, _p48));
	};
};
var _elm_community$list_extra$List_Extra$andThen = _elm_lang$core$Basics$flip(_elm_lang$core$List$concatMap);
var _elm_community$list_extra$List_Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			la,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					lb,
					function (b) {
						return _elm_lang$core$Native_List.fromArray(
							[
								A2(f, a, b)
							]);
					});
			});
	});
var _elm_community$list_extra$List_Extra$lift3 = F4(
	function (f, la, lb, lc) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			la,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					lb,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							lc,
							function (c) {
								return _elm_lang$core$Native_List.fromArray(
									[
										A3(f, a, b, c)
									]);
							});
					});
			});
	});
var _elm_community$list_extra$List_Extra$lift4 = F5(
	function (f, la, lb, lc, ld) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			la,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					lb,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							lc,
							function (c) {
								return A2(
									_elm_community$list_extra$List_Extra$andThen,
									ld,
									function (d) {
										return _elm_lang$core$Native_List.fromArray(
											[
												A4(f, a, b, c, d)
											]);
									});
							});
					});
			});
	});
var _elm_community$list_extra$List_Extra$andMap = F2(
	function (fl, l) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			fl,
			l);
	});
var _elm_community$list_extra$List_Extra$dropDuplicatesHelp = F2(
	function (existing, remaining) {
		dropDuplicatesHelp:
		while (true) {
			var _p49 = remaining;
			if (_p49.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				var _p51 = _p49._1;
				var _p50 = _p49._0;
				if (A2(_elm_lang$core$Set$member, _p50, existing)) {
					var _v33 = existing,
						_v34 = _p51;
					existing = _v33;
					remaining = _v34;
					continue dropDuplicatesHelp;
				} else {
					return A2(
						_elm_lang$core$List_ops['::'],
						_p50,
						A2(
							_elm_community$list_extra$List_Extra$dropDuplicatesHelp,
							A2(_elm_lang$core$Set$insert, _p50, existing),
							_p51));
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$dropDuplicates = function (list) {
	return A2(_elm_community$list_extra$List_Extra$dropDuplicatesHelp, _elm_lang$core$Set$empty, list);
};
var _elm_community$list_extra$List_Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			var _p52 = list;
			if (_p52.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				if (predicate(_p52._0)) {
					var _v36 = predicate,
						_v37 = _p52._1;
					predicate = _v36;
					list = _v37;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$takeWhile = F2(
	function (predicate, list) {
		var _p53 = list;
		if (_p53.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p54 = _p53._0;
			return predicate(_p54) ? A2(
				_elm_lang$core$List_ops['::'],
				_p54,
				A2(_elm_community$list_extra$List_Extra$takeWhile, predicate, _p53._1)) : _elm_lang$core$Native_List.fromArray(
				[]);
		}
	});
var _elm_community$list_extra$List_Extra$span = F2(
	function (p, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_community$list_extra$List_Extra$takeWhile, p, xs),
			_1: A2(_elm_community$list_extra$List_Extra$dropWhile, p, xs)
		};
	});
var _elm_community$list_extra$List_Extra$break = function (p) {
	return _elm_community$list_extra$List_Extra$span(
		function (_p55) {
			return _elm_lang$core$Basics$not(
				p(_p55));
		});
};
var _elm_community$list_extra$List_Extra$groupWhile = F2(
	function (eq, xs$) {
		var _p56 = xs$;
		if (_p56.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p58 = _p56._0;
			var _p57 = A2(
				_elm_community$list_extra$List_Extra$span,
				eq(_p58),
				_p56._1);
			var ys = _p57._0;
			var zs = _p57._1;
			return A2(
				_elm_lang$core$List_ops['::'],
				A2(_elm_lang$core$List_ops['::'], _p58, ys),
				A2(_elm_community$list_extra$List_Extra$groupWhile, eq, zs));
		}
	});
var _elm_community$list_extra$List_Extra$group = _elm_community$list_extra$List_Extra$groupWhile(
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		}));
var _elm_community$list_extra$List_Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _p59) {
				var _p60 = _p59;
				var _p61 = _p60._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p61) < 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p60._0, _1: _p61};
			});
		var _p62 = ls;
		if (_p62.ctor === '::') {
			if (_p62._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p62._0);
			} else {
				var _p63 = _p62._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Basics$fst(
						A3(
							_elm_lang$core$List$foldl,
							minBy,
							{
								ctor: '_Tuple2',
								_0: _p63,
								_1: f(_p63)
							},
							_p62._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _p64) {
				var _p65 = _p64;
				var _p66 = _p65._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p66) > 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p65._0, _1: _p66};
			});
		var _p67 = ls;
		if (_p67.ctor === '::') {
			if (_p67._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p67._0);
			} else {
				var _p68 = _p67._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Basics$fst(
						A3(
							_elm_lang$core$List$foldl,
							maxBy,
							{
								ctor: '_Tuple2',
								_0: _p68,
								_1: f(_p68)
							},
							_p67._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$uncons = function (xs) {
	var _p69 = xs;
	if (_p69.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p69._0, _1: _p69._1});
	}
};
var _elm_community$list_extra$List_Extra$iterate = F2(
	function (f, x) {
		var _p70 = f(x);
		if (_p70.ctor === 'Just') {
			return A2(
				_elm_lang$core$List_ops['::'],
				x,
				A2(_elm_community$list_extra$List_Extra$iterate, f, _p70._0));
		} else {
			return _elm_lang$core$Native_List.fromArray(
				[x]);
		}
	});
var _elm_community$list_extra$List_Extra$getAt = F2(
	function (idx, xs) {
		return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, idx, xs));
	});
var _elm_community$list_extra$List_Extra_ops = _elm_community$list_extra$List_Extra_ops || {};
_elm_community$list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$list_extra$List_Extra$getAt);
var _elm_community$list_extra$List_Extra$init = function () {
	var maybe = F2(
		function (d, f) {
			return function (_p71) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					d,
					A2(_elm_lang$core$Maybe$map, f, _p71));
			};
		});
	return A2(
		_elm_lang$core$List$foldr,
		function (_p72) {
			return A2(
				F2(
					function (x, y) {
						return function (_p73) {
							return x(
								y(_p73));
						};
					}),
				_elm_lang$core$Maybe$Just,
				A2(
					maybe,
					_elm_lang$core$Native_List.fromArray(
						[]),
					F2(
						function (x, y) {
							return A2(_elm_lang$core$List_ops['::'], x, y);
						})(_p72)));
		},
		_elm_lang$core$Maybe$Nothing);
}();
var _elm_community$list_extra$List_Extra$last = _elm_community$list_extra$List_Extra$foldl1(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));

var _elm_community$maybe_extra$Maybe_Extra$filter = F2(
	function (f, m) {
		var _p0 = A2(_elm_lang$core$Maybe$map, f, m);
		if ((_p0.ctor === 'Just') && (_p0._0 === true)) {
			return m;
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$traverseArray = function (f) {
	var step = F2(
		function (e, acc) {
			var _p1 = f(e);
			if (_p1.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return A2(
					_elm_lang$core$Maybe$map,
					_elm_lang$core$Array$push(_p1._0),
					acc);
			}
		});
	return A2(
		_elm_lang$core$Array$foldl,
		step,
		_elm_lang$core$Maybe$Just(_elm_lang$core$Array$empty));
};
var _elm_community$maybe_extra$Maybe_Extra$combineArray = _elm_community$maybe_extra$Maybe_Extra$traverseArray(_elm_lang$core$Basics$identity);
var _elm_community$maybe_extra$Maybe_Extra$traverse = function (f) {
	var step = F2(
		function (e, acc) {
			var _p2 = f(e);
			if (_p2.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return A2(
					_elm_lang$core$Maybe$map,
					F2(
						function (x, y) {
							return A2(_elm_lang$core$List_ops['::'], x, y);
						})(_p2._0),
					acc);
			}
		});
	return A2(
		_elm_lang$core$List$foldr,
		step,
		_elm_lang$core$Maybe$Just(
			_elm_lang$core$Native_List.fromArray(
				[])));
};
var _elm_community$maybe_extra$Maybe_Extra$combine = _elm_community$maybe_extra$Maybe_Extra$traverse(_elm_lang$core$Basics$identity);
var _elm_community$maybe_extra$Maybe_Extra$maybeToArray = function (m) {
	var _p3 = m;
	if (_p3.ctor === 'Nothing') {
		return _elm_lang$core$Array$empty;
	} else {
		return A2(_elm_lang$core$Array$repeat, 1, _p3._0);
	}
};
var _elm_community$maybe_extra$Maybe_Extra$maybeToList = function (m) {
	var _p4 = m;
	if (_p4.ctor === 'Nothing') {
		return _elm_lang$core$Native_List.fromArray(
			[]);
	} else {
		return _elm_lang$core$Native_List.fromArray(
			[_p4._0]);
	}
};
var _elm_community$maybe_extra$Maybe_Extra$or = F2(
	function (ma, mb) {
		var _p5 = ma;
		if (_p5.ctor === 'Nothing') {
			return mb;
		} else {
			return ma;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$prev = _elm_lang$core$Maybe$map2(_elm_lang$core$Basics$always);
var _elm_community$maybe_extra$Maybe_Extra$next = _elm_lang$core$Maybe$map2(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));
var _elm_community$maybe_extra$Maybe_Extra$andMap = F2(
	function (f, x) {
		return A2(
			_elm_lang$core$Maybe$andThen,
			x,
			function (x$) {
				return A2(
					_elm_lang$core$Maybe$andThen,
					f,
					function (f$) {
						return _elm_lang$core$Maybe$Just(
							f$(x$));
					});
			});
	});
var _elm_community$maybe_extra$Maybe_Extra$mapDefault = F3(
	function (d, f, m) {
		var _p6 = m;
		if (_p6.ctor === 'Nothing') {
			return d;
		} else {
			return f(_p6._0);
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$isJust = function (m) {
	var _p7 = m;
	if (_p7.ctor === 'Nothing') {
		return false;
	} else {
		return true;
	}
};
var _elm_community$maybe_extra$Maybe_Extra$isNothing = function (m) {
	var _p8 = m;
	if (_p8.ctor === 'Nothing') {
		return true;
	} else {
		return false;
	}
};
var _elm_community$maybe_extra$Maybe_Extra$join = function (mx) {
	var _p9 = mx;
	if (_p9.ctor === 'Just') {
		return _p9._0;
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_community$maybe_extra$Maybe_Extra_ops = _elm_community$maybe_extra$Maybe_Extra_ops || {};
_elm_community$maybe_extra$Maybe_Extra_ops['?'] = F2(
	function (mx, x) {
		return A2(_elm_lang$core$Maybe$withDefault, x, mx);
	});

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$dom$Native_Dom = function() {

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

return {
	onDocument: F3(on(document)),
	onWindow: F3(on(window))
};

}();

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

//import Native.Json //

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';



////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: null
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (!a.options === b.options)
	{
		if (a.stopPropagation !== b.stopPropagation || a.preventDefault !== b.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}



////////////  RENDERER  ////////////


function renderer(parent, tagger, initialVirtualNode)
{
	var eventNode = { tagger: tagger, parent: null };

	var domNode = render(initialVirtualNode, eventNode);
	parent.appendChild(domNode);

	var state = 'NO_REQUEST';
	var currentVirtualNode = initialVirtualNode;
	var nextVirtualNode = initialVirtualNode;

	function registerVirtualNode(vNode)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextVirtualNode = vNode;
	}

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/core/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var patches = diff(currentVirtualNode, nextVirtualNode);
				domNode = applyPatches(domNode, currentVirtualNode, patches, eventNode);
				currentVirtualNode = nextVirtualNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return { update: registerVirtualNode };
}


var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(cb) { setTimeout(cb, 1000 / 60); };



////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;
		
			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}
            
			var subEventRoot = {
				tagger: tagger,
				parent: eventNode
			};
			
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return document.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? document.createElementNS(vNode.namespace, vNode.tag)
				: document.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: null,
		eventNode: null
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-insert', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;
            
			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}
            
			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return redraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			domNode.elm_event_node_ref.tagger = patch.data;
			return domNode;

		case 'p-remove':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-insert':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function redraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}



////////////  PROGRAMS  ////////////


function programWithFlags(details)
{
	return {
		init: details.init,
		update: details.update,
		subscriptions: details.subscriptions,
		view: details.view,
		renderer: renderer
	};
}


return {
	node: node,
	text: text,

	custom: custom,

	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),

	programWithFlags: programWithFlags
};

}();
var _elm_lang$virtual_dom$VirtualDom$programWithFlags = _elm_lang$virtual_dom$Native_VirtualDom.programWithFlags;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main$ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$svg = _elm_lang$html$Html$node('svg');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_App$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html_App$program = function (app) {
	return _elm_lang$html$Html_App$programWithFlags(
		_elm_lang$core$Native_Utils.update(
			app,
			{
				init: function (_p0) {
					return app.init;
				}
			}));
};
var _elm_lang$html$Html_App$beginnerProgram = function (_p1) {
	var _p2 = _p1;
	return _elm_lang$html$Html_App$programWithFlags(
		{
			init: function (_p3) {
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_p2.model,
					_elm_lang$core$Native_List.fromArray(
						[]));
			},
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p2.update, msg, model),
						_elm_lang$core$Native_List.fromArray(
							[]));
				}),
			view: _p2.view,
			subscriptions: function (_p4) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html_App$map = _elm_lang$virtual_dom$VirtualDom$map;

var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'charset', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type$ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$autosave = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'autosave', value);
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'maxLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'form', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'media', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'colSpan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'rowSpan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Basics$fst,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode_ops[':='], 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'checked']),
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'value']),
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$navigation$Native_Navigation = function() {

function go(n)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		if (n !== 0)
		{
			history.go(n);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function pushState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.pushState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}

function replaceState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.replaceState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}

function getLocation()
{
	var location = document.location;

	return {
		href: location.href,
		host: location.host,
		hostname: location.hostname,
		protocol: location.protocol,
		origin: location.origin,
		port_: location.port,
		pathname: location.pathname,
		search: location.search,
		hash: location.hash,
		username: location.username,
		password: location.password
	};
}


return {
	go: go,
	pushState: pushState,
	replaceState: replaceState,
	getLocation: getLocation
};

}();

var _elm_lang$navigation$Navigation$replaceState = _elm_lang$navigation$Native_Navigation.replaceState;
var _elm_lang$navigation$Navigation$pushState = _elm_lang$navigation$Native_Navigation.pushState;
var _elm_lang$navigation$Navigation$go = _elm_lang$navigation$Native_Navigation.go;
var _elm_lang$navigation$Navigation$spawnPopState = function (router) {
	return _elm_lang$core$Process$spawn(
		A3(
			_elm_lang$dom$Dom_LowLevel$onWindow,
			'popstate',
			_elm_lang$core$Json_Decode$value,
			function (_p0) {
				return A2(
					_elm_lang$core$Platform$sendToSelf,
					router,
					_elm_lang$navigation$Native_Navigation.getLocation(
						{ctor: '_Tuple0'}));
			}));
};
var _elm_lang$navigation$Navigation_ops = _elm_lang$navigation$Navigation_ops || {};
_elm_lang$navigation$Navigation_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			task1,
			function (_p1) {
				return task2;
			});
	});
var _elm_lang$navigation$Navigation$notify = F3(
	function (router, subs, location) {
		var send = function (_p2) {
			var _p3 = _p2;
			return A2(
				_elm_lang$core$Platform$sendToApp,
				router,
				_p3._0(location));
		};
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(_elm_lang$core$List$map, send, subs)),
			_elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'}));
	});
var _elm_lang$navigation$Navigation$onSelfMsg = F3(
	function (router, location, state) {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			A3(_elm_lang$navigation$Navigation$notify, router, state.subs, location),
			_elm_lang$core$Task$succeed(state));
	});
var _elm_lang$navigation$Navigation$cmdHelp = F3(
	function (router, subs, cmd) {
		var _p4 = cmd;
		switch (_p4.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$go(_p4._0);
			case 'New':
				return A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$navigation$Navigation$pushState(_p4._0),
					A2(_elm_lang$navigation$Navigation$notify, router, subs));
			default:
				return A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$navigation$Navigation$replaceState(_p4._0),
					A2(_elm_lang$navigation$Navigation$notify, router, subs));
		}
	});
var _elm_lang$navigation$Navigation$updateHelp = F2(
	function (func, _p5) {
		var _p6 = _p5;
		return {
			ctor: '_Tuple2',
			_0: _p6._0,
			_1: A2(_elm_lang$core$Platform_Cmd$map, func, _p6._1)
		};
	});
var _elm_lang$navigation$Navigation$subscription = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$command = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$Location = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {href: a, host: b, hostname: c, protocol: d, origin: e, port_: f, pathname: g, search: h, hash: i, username: j, password: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$navigation$Navigation$State = F2(
	function (a, b) {
		return {subs: a, process: b};
	});
var _elm_lang$navigation$Navigation$init = _elm_lang$core$Task$succeed(
	A2(
		_elm_lang$navigation$Navigation$State,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Maybe$Nothing));
var _elm_lang$navigation$Navigation$onEffects = F4(
	function (router, cmds, subs, _p7) {
		var _p8 = _p7;
		var _p10 = _p8.process;
		var stepState = function () {
			var _p9 = {ctor: '_Tuple2', _0: subs, _1: _p10};
			_v4_2:
			do {
				if (_p9._0.ctor === '[]') {
					if (_p9._1.ctor === 'Just') {
						return A2(
							_elm_lang$navigation$Navigation_ops['&>'],
							_elm_lang$core$Process$kill(_p9._1._0),
							_elm_lang$core$Task$succeed(
								A2(_elm_lang$navigation$Navigation$State, subs, _elm_lang$core$Maybe$Nothing)));
					} else {
						break _v4_2;
					}
				} else {
					if (_p9._1.ctor === 'Nothing') {
						return A2(
							_elm_lang$core$Task$andThen,
							_elm_lang$navigation$Navigation$spawnPopState(router),
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A2(
										_elm_lang$navigation$Navigation$State,
										subs,
										_elm_lang$core$Maybe$Just(pid)));
							});
					} else {
						break _v4_2;
					}
				}
			} while(false);
			return _elm_lang$core$Task$succeed(
				A2(_elm_lang$navigation$Navigation$State, subs, _p10));
		}();
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					A2(_elm_lang$navigation$Navigation$cmdHelp, router, subs),
					cmds)),
			stepState);
	});
var _elm_lang$navigation$Navigation$UserMsg = function (a) {
	return {ctor: 'UserMsg', _0: a};
};
var _elm_lang$navigation$Navigation$Change = function (a) {
	return {ctor: 'Change', _0: a};
};
var _elm_lang$navigation$Navigation$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _elm_lang$navigation$Navigation$makeParser = _elm_lang$navigation$Navigation$Parser;
var _elm_lang$navigation$Navigation$Modify = function (a) {
	return {ctor: 'Modify', _0: a};
};
var _elm_lang$navigation$Navigation$modifyUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Modify(url));
};
var _elm_lang$navigation$Navigation$New = function (a) {
	return {ctor: 'New', _0: a};
};
var _elm_lang$navigation$Navigation$newUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$New(url));
};
var _elm_lang$navigation$Navigation$Jump = function (a) {
	return {ctor: 'Jump', _0: a};
};
var _elm_lang$navigation$Navigation$back = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(0 - n));
};
var _elm_lang$navigation$Navigation$forward = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(n));
};
var _elm_lang$navigation$Navigation$cmdMap = F2(
	function (_p11, myCmd) {
		var _p12 = myCmd;
		switch (_p12.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$Jump(_p12._0);
			case 'New':
				return _elm_lang$navigation$Navigation$New(_p12._0);
			default:
				return _elm_lang$navigation$Navigation$Modify(_p12._0);
		}
	});
var _elm_lang$navigation$Navigation$Monitor = function (a) {
	return {ctor: 'Monitor', _0: a};
};
var _elm_lang$navigation$Navigation$programWithFlags = F2(
	function (_p13, stuff) {
		var _p14 = _p13;
		var _p16 = _p14._0;
		var location = _elm_lang$navigation$Native_Navigation.getLocation(
			{ctor: '_Tuple0'});
		var init = function (flags) {
			return A2(
				_elm_lang$navigation$Navigation$updateHelp,
				_elm_lang$navigation$Navigation$UserMsg,
				A2(
					stuff.init,
					flags,
					_p16(location)));
		};
		var view = function (model) {
			return A2(
				_elm_lang$html$Html_App$map,
				_elm_lang$navigation$Navigation$UserMsg,
				stuff.view(model));
		};
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(_elm_lang$navigation$Navigation$Change)),
						A2(
						_elm_lang$core$Platform_Sub$map,
						_elm_lang$navigation$Navigation$UserMsg,
						stuff.subscriptions(model))
					]));
		};
		var update = F2(
			function (msg, model) {
				return A2(
					_elm_lang$navigation$Navigation$updateHelp,
					_elm_lang$navigation$Navigation$UserMsg,
					function () {
						var _p15 = msg;
						if (_p15.ctor === 'Change') {
							return A2(
								stuff.urlUpdate,
								_p16(_p15._0),
								model);
						} else {
							return A2(stuff.update, _p15._0, model);
						}
					}());
			});
		return _elm_lang$html$Html_App$programWithFlags(
			{init: init, view: view, update: update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$program = F2(
	function (parser, stuff) {
		return A2(
			_elm_lang$navigation$Navigation$programWithFlags,
			parser,
			_elm_lang$core$Native_Utils.update(
				stuff,
				{
					init: function (_p17) {
						return stuff.init;
					}
				}));
	});
var _elm_lang$navigation$Navigation$subMap = F2(
	function (func, _p18) {
		var _p19 = _p18;
		return _elm_lang$navigation$Navigation$Monitor(
			function (_p20) {
				return func(
					_p19._0(_p20));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Navigation'] = {pkg: 'elm-lang/navigation', init: _elm_lang$navigation$Navigation$init, onEffects: _elm_lang$navigation$Navigation$onEffects, onSelfMsg: _elm_lang$navigation$Navigation$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$navigation$Navigation$cmdMap, subMap: _elm_lang$navigation$Navigation$subMap};

//import Dict, List, Maybe, Native.Scheduler //

var _evancz$elm_http$Native_Http = function() {

function send(settings, request)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var req = new XMLHttpRequest();

		// start
		if (settings.onStart.ctor === 'Just')
		{
			req.addEventListener('loadStart', function() {
				var task = settings.onStart._0;
				_elm_lang$core$Native_Scheduler.rawSpawn(task);
			});
		}

		// progress
		if (settings.onProgress.ctor === 'Just')
		{
			req.addEventListener('progress', function(event) {
				var progress = !event.lengthComputable
					? _elm_lang$core$Maybe$Nothing
					: _elm_lang$core$Maybe$Just({
						loaded: event.loaded,
						total: event.total
					});
				var task = settings.onProgress._0(progress);
				_elm_lang$core$Native_Scheduler.rawSpawn(task);
			});
		}

		// end
		req.addEventListener('error', function() {
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'RawNetworkError' }));
		});

		req.addEventListener('timeout', function() {
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'RawTimeout' }));
		});

		req.addEventListener('load', function() {
			return callback(_elm_lang$core$Native_Scheduler.succeed(toResponse(req)));
		});

		req.open(request.verb, request.url, true);

		// set all the headers
		function setHeader(pair) {
			req.setRequestHeader(pair._0, pair._1);
		}
		A2(_elm_lang$core$List$map, setHeader, request.headers);

		// set the timeout
		req.timeout = settings.timeout;

		// enable this withCredentials thing
		req.withCredentials = settings.withCredentials;

		// ask for a specific MIME type for the response
		if (settings.desiredResponseType.ctor === 'Just')
		{
			req.overrideMimeType(settings.desiredResponseType._0);
		}

		// actuall send the request
		if(request.body.ctor === "BodyFormData")
		{
			req.send(request.body.formData)
		}
		else
		{
			req.send(request.body._0);
		}

		return function() {
			req.abort();
		};
	});
}


// deal with responses

function toResponse(req)
{
	var tag = req.responseType === 'blob' ? 'Blob' : 'Text'
	var response = tag === 'Blob' ? req.response : req.responseText;
	return {
		status: req.status,
		statusText: req.statusText,
		headers: parseHeaders(req.getAllResponseHeaders()),
		url: req.responseURL,
		value: { ctor: tag, _0: response }
	};
}


function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


function multipart(dataList)
{
	var formData = new FormData();

	while (dataList.ctor !== '[]')
	{
		var data = dataList._0;
		if (data.ctor === 'StringData')
		{
			formData.append(data._0, data._1);
		}
		else
		{
			var fileName = data._1.ctor === 'Nothing'
				? undefined
				: data._1._0;
			formData.append(data._0, data._2, fileName);
		}
		dataList = dataList._1;
	}

	return { ctor: 'BodyFormData', formData: formData };
}


function uriEncode(string)
{
	return encodeURIComponent(string);
}

function uriDecode(string)
{
	return decodeURIComponent(string);
}

return {
	send: F2(send),
	multipart: multipart,
	uriEncode: uriEncode,
	uriDecode: uriDecode
};

}();

var _evancz$elm_http$Http$send = _evancz$elm_http$Native_Http.send;
var _evancz$elm_http$Http$defaultSettings = {timeout: 0, onStart: _elm_lang$core$Maybe$Nothing, onProgress: _elm_lang$core$Maybe$Nothing, desiredResponseType: _elm_lang$core$Maybe$Nothing, withCredentials: false};
var _evancz$elm_http$Http$multipart = _evancz$elm_http$Native_Http.multipart;
var _evancz$elm_http$Http$uriDecode = _evancz$elm_http$Native_Http.uriDecode;
var _evancz$elm_http$Http$uriEncode = _evancz$elm_http$Native_Http.uriEncode;
var _evancz$elm_http$Http$queryEscape = function (string) {
	return A2(
		_elm_lang$core$String$join,
		'+',
		A2(
			_elm_lang$core$String$split,
			'%20',
			_evancz$elm_http$Http$uriEncode(string)));
};
var _evancz$elm_http$Http$queryPair = function (_p0) {
	var _p1 = _p0;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_evancz$elm_http$Http$queryEscape(_p1._0),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'=',
			_evancz$elm_http$Http$queryEscape(_p1._1)));
};
var _evancz$elm_http$Http$url = F2(
	function (baseUrl, args) {
		var _p2 = args;
		if (_p2.ctor === '[]') {
			return baseUrl;
		} else {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				baseUrl,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'?',
					A2(
						_elm_lang$core$String$join,
						'&',
						A2(_elm_lang$core$List$map, _evancz$elm_http$Http$queryPair, args))));
		}
	});
var _evancz$elm_http$Http$Request = F4(
	function (a, b, c, d) {
		return {verb: a, headers: b, url: c, body: d};
	});
var _evancz$elm_http$Http$Settings = F5(
	function (a, b, c, d, e) {
		return {timeout: a, onStart: b, onProgress: c, desiredResponseType: d, withCredentials: e};
	});
var _evancz$elm_http$Http$Response = F5(
	function (a, b, c, d, e) {
		return {status: a, statusText: b, headers: c, url: d, value: e};
	});
var _evancz$elm_http$Http$TODO_implement_blob_in_another_library = {ctor: 'TODO_implement_blob_in_another_library'};
var _evancz$elm_http$Http$TODO_implement_file_in_another_library = {ctor: 'TODO_implement_file_in_another_library'};
var _evancz$elm_http$Http$BodyBlob = function (a) {
	return {ctor: 'BodyBlob', _0: a};
};
var _evancz$elm_http$Http$BodyFormData = {ctor: 'BodyFormData'};
var _evancz$elm_http$Http$ArrayBuffer = {ctor: 'ArrayBuffer'};
var _evancz$elm_http$Http$BodyString = function (a) {
	return {ctor: 'BodyString', _0: a};
};
var _evancz$elm_http$Http$string = _evancz$elm_http$Http$BodyString;
var _evancz$elm_http$Http$Empty = {ctor: 'Empty'};
var _evancz$elm_http$Http$empty = _evancz$elm_http$Http$Empty;
var _evancz$elm_http$Http$FileData = F3(
	function (a, b, c) {
		return {ctor: 'FileData', _0: a, _1: b, _2: c};
	});
var _evancz$elm_http$Http$BlobData = F3(
	function (a, b, c) {
		return {ctor: 'BlobData', _0: a, _1: b, _2: c};
	});
var _evancz$elm_http$Http$blobData = _evancz$elm_http$Http$BlobData;
var _evancz$elm_http$Http$StringData = F2(
	function (a, b) {
		return {ctor: 'StringData', _0: a, _1: b};
	});
var _evancz$elm_http$Http$stringData = _evancz$elm_http$Http$StringData;
var _evancz$elm_http$Http$Blob = function (a) {
	return {ctor: 'Blob', _0: a};
};
var _evancz$elm_http$Http$Text = function (a) {
	return {ctor: 'Text', _0: a};
};
var _evancz$elm_http$Http$RawNetworkError = {ctor: 'RawNetworkError'};
var _evancz$elm_http$Http$RawTimeout = {ctor: 'RawTimeout'};
var _evancz$elm_http$Http$BadResponse = F2(
	function (a, b) {
		return {ctor: 'BadResponse', _0: a, _1: b};
	});
var _evancz$elm_http$Http$UnexpectedPayload = function (a) {
	return {ctor: 'UnexpectedPayload', _0: a};
};
var _evancz$elm_http$Http$handleResponse = F2(
	function (handle, response) {
		if ((_elm_lang$core$Native_Utils.cmp(200, response.status) < 1) && (_elm_lang$core$Native_Utils.cmp(response.status, 300) < 0)) {
			var _p3 = response.value;
			if (_p3.ctor === 'Text') {
				return handle(_p3._0);
			} else {
				return _elm_lang$core$Task$fail(
					_evancz$elm_http$Http$UnexpectedPayload('Response body is a blob, expecting a string.'));
			}
		} else {
			return _elm_lang$core$Task$fail(
				A2(_evancz$elm_http$Http$BadResponse, response.status, response.statusText));
		}
	});
var _evancz$elm_http$Http$NetworkError = {ctor: 'NetworkError'};
var _evancz$elm_http$Http$Timeout = {ctor: 'Timeout'};
var _evancz$elm_http$Http$promoteError = function (rawError) {
	var _p4 = rawError;
	if (_p4.ctor === 'RawTimeout') {
		return _evancz$elm_http$Http$Timeout;
	} else {
		return _evancz$elm_http$Http$NetworkError;
	}
};
var _evancz$elm_http$Http$getString = function (url) {
	var request = {
		verb: 'GET',
		headers: _elm_lang$core$Native_List.fromArray(
			[]),
		url: url,
		body: _evancz$elm_http$Http$empty
	};
	return A2(
		_elm_lang$core$Task$andThen,
		A2(
			_elm_lang$core$Task$mapError,
			_evancz$elm_http$Http$promoteError,
			A2(_evancz$elm_http$Http$send, _evancz$elm_http$Http$defaultSettings, request)),
		_evancz$elm_http$Http$handleResponse(_elm_lang$core$Task$succeed));
};
var _evancz$elm_http$Http$fromJson = F2(
	function (decoder, response) {
		var decode = function (str) {
			var _p5 = A2(_elm_lang$core$Json_Decode$decodeString, decoder, str);
			if (_p5.ctor === 'Ok') {
				return _elm_lang$core$Task$succeed(_p5._0);
			} else {
				return _elm_lang$core$Task$fail(
					_evancz$elm_http$Http$UnexpectedPayload(_p5._0));
			}
		};
		return A2(
			_elm_lang$core$Task$andThen,
			A2(_elm_lang$core$Task$mapError, _evancz$elm_http$Http$promoteError, response),
			_evancz$elm_http$Http$handleResponse(decode));
	});
var _evancz$elm_http$Http$get = F2(
	function (decoder, url) {
		var request = {
			verb: 'GET',
			headers: _elm_lang$core$Native_List.fromArray(
				[]),
			url: url,
			body: _evancz$elm_http$Http$empty
		};
		return A2(
			_evancz$elm_http$Http$fromJson,
			decoder,
			A2(_evancz$elm_http$Http$send, _evancz$elm_http$Http$defaultSettings, request));
	});
var _evancz$elm_http$Http$post = F3(
	function (decoder, url, body) {
		var request = {
			verb: 'POST',
			headers: _elm_lang$core$Native_List.fromArray(
				[]),
			url: url,
			body: body
		};
		return A2(
			_evancz$elm_http$Http$fromJson,
			decoder,
			A2(_evancz$elm_http$Http$send, _evancz$elm_http$Http$defaultSettings, request));
	});

var _sporto$hop$Hop_Types$newQuery = _elm_lang$core$Dict$empty;
var _sporto$hop$Hop_Types$newLocation = {
	query: _sporto$hop$Hop_Types$newQuery,
	path: _elm_lang$core$Native_List.fromArray(
		[])
};
var _sporto$hop$Hop_Types$Location = F2(
	function (a, b) {
		return {path: a, query: b};
	});
var _sporto$hop$Hop_Types$PathMatcher = F2(
	function (a, b) {
		return {parser: a, segments: b};
	});
var _sporto$hop$Hop_Types$Config = F4(
	function (a, b, c, d) {
		return {basePath: a, hash: b, matchers: c, notFound: d};
	});
var _sporto$hop$Hop_Types$Router = function (a) {
	return {run: a};
};

var _sporto$hop$Hop_Location$queryKVtoTuple = function (kv) {
	var splitted = A2(_elm_lang$core$String$split, '=', kv);
	var first = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(splitted));
	var firstDecoded = _evancz$elm_http$Http$uriDecode(first);
	var second = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, 1, splitted)));
	var secondDecoded = _evancz$elm_http$Http$uriDecode(second);
	return {ctor: '_Tuple2', _0: firstDecoded, _1: secondDecoded};
};
var _sporto$hop$Hop_Location$extractQuery = function (route) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(
			A2(
				_elm_lang$core$List$drop,
				1,
				A2(_elm_lang$core$String$split, '?', route))));
};
var _sporto$hop$Hop_Location$parseQuery = function (route) {
	return _elm_lang$core$Dict$fromList(
		A2(
			_elm_lang$core$List$map,
			_sporto$hop$Hop_Location$queryKVtoTuple,
			A2(
				_elm_lang$core$List$filter,
				function (_p0) {
					return _elm_lang$core$Basics$not(
						_elm_lang$core$String$isEmpty(_p0));
				},
				A2(
					_elm_lang$core$String$split,
					'&',
					_sporto$hop$Hop_Location$extractQuery(route)))));
};
var _sporto$hop$Hop_Location$extractPath = function (route) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(
			A2(
				_elm_lang$core$String$split,
				'?',
				A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					_elm_lang$core$List$head(
						_elm_lang$core$List$reverse(
							A2(_elm_lang$core$String$split, '#', route)))))));
};
var _sporto$hop$Hop_Location$parsePath = function (route) {
	return A2(
		_elm_lang$core$List$filter,
		function (segment) {
			return _elm_lang$core$Basics$not(
				_elm_lang$core$String$isEmpty(segment));
		},
		A2(
			_elm_lang$core$String$split,
			'/',
			_sporto$hop$Hop_Location$extractPath(route)));
};
var _sporto$hop$Hop_Location$parse = function (route) {
	return {
		path: _sporto$hop$Hop_Location$parsePath(route),
		query: _sporto$hop$Hop_Location$parseQuery(route)
	};
};
var _sporto$hop$Hop_Location$fromUrlString = F2(
	function (config, href) {
		var withoutProtocol = A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			_elm_lang$core$List$head(
				_elm_lang$core$List$reverse(
					A2(_elm_lang$core$String$split, '//', href))));
		var withoutDomain = A2(
			_elm_lang$core$String$append,
			'/',
			A2(
				_elm_lang$core$String$join,
				'/',
				A2(
					_elm_lang$core$Maybe$withDefault,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$List$tail(
						A2(_elm_lang$core$String$split, '/', withoutProtocol)))));
		return config.hash ? A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			_elm_lang$core$List$head(
				A2(
					_elm_lang$core$List$drop,
					1,
					A2(_elm_lang$core$String$split, '#', withoutDomain)))) : A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			_elm_lang$core$List$head(
				A2(_elm_lang$core$String$split, '#', withoutDomain)));
	});
var _sporto$hop$Hop_Location$locationStringWithoutBase = F2(
	function (config, locationString) {
		var regex = _elm_lang$core$Regex$regex(config.basePath);
		return A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$AtMost(1),
			regex,
			_elm_lang$core$Basics$always(''),
			locationString);
	});
var _sporto$hop$Hop_Location$fromUrl = F2(
	function (config, href) {
		var relevantLocationString = A2(_sporto$hop$Hop_Location$fromUrlString, config, href);
		return config.hash ? _sporto$hop$Hop_Location$parse(relevantLocationString) : _sporto$hop$Hop_Location$parse(
			A2(_sporto$hop$Hop_Location$locationStringWithoutBase, config, relevantLocationString));
	});
var _sporto$hop$Hop_Location$queryFromLocation = function (location) {
	return _elm_lang$core$Dict$isEmpty(location.query) ? '' : A2(
		_elm_lang$core$String$append,
		'?',
		A2(
			_elm_lang$core$String$join,
			'&',
			A2(
				_elm_lang$core$List$map,
				function (_p1) {
					var _p2 = _p1;
					return A2(
						_elm_lang$core$Basics_ops['++'],
						_p2._0,
						A2(_elm_lang$core$Basics_ops['++'], '=', _p2._1));
				},
				A2(
					_elm_lang$core$List$map,
					function (_p3) {
						var _p4 = _p3;
						return {
							ctor: '_Tuple2',
							_0: _evancz$elm_http$Http$uriEncode(_p4._0),
							_1: _evancz$elm_http$Http$uriEncode(_p4._1)
						};
					},
					_elm_lang$core$Dict$toList(location.query)))));
};
var _sporto$hop$Hop_Location$locationFromUser = function (route) {
	var normalized = A2(_elm_lang$core$String$startsWith, '#', route) ? route : A2(_elm_lang$core$Basics_ops['++'], '#', route);
	return _sporto$hop$Hop_Location$parse(normalized);
};
var _sporto$hop$Hop_Location$dedupSlash = A3(
	_elm_lang$core$Regex$replace,
	_elm_lang$core$Regex$All,
	_elm_lang$core$Regex$regex('/+'),
	function (_p5) {
		return '/';
	});
var _sporto$hop$Hop_Location$locationToFullPath = F2(
	function (config, location) {
		var query = _sporto$hop$Hop_Location$queryFromLocation(location);
		var joined = A2(_elm_lang$core$String$join, '/', location.path);
		var url = config.hash ? A2(
			_elm_lang$core$Basics_ops['++'],
			'#/',
			A2(_elm_lang$core$Basics_ops['++'], joined, query)) : (_elm_lang$core$String$isEmpty(config.basePath) ? A2(
			_elm_lang$core$Basics_ops['++'],
			'/',
			A2(_elm_lang$core$Basics_ops['++'], joined, query)) : (_elm_lang$core$String$isEmpty(joined) ? A2(
			_elm_lang$core$Basics_ops['++'],
			'/',
			A2(_elm_lang$core$Basics_ops['++'], config.basePath, query)) : A2(
			_elm_lang$core$Basics_ops['++'],
			'/',
			A2(
				_elm_lang$core$Basics_ops['++'],
				config.basePath,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'/',
					A2(_elm_lang$core$Basics_ops['++'], joined, query))))));
		return _sporto$hop$Hop_Location$dedupSlash(url);
	});

var _sporto$hop$Hop_Matching$matchPathWithPathList = F3(
	function (routeParsers, notFoundAction, path) {
		matchPathWithPathList:
		while (true) {
			var _p0 = routeParsers;
			if (_p0.ctor === '[]') {
				return notFoundAction;
			} else {
				if (_p0._1.ctor === '[]') {
					var _p1 = A2(_Bogdanp$elm_combine$Combine$parse, _p0._0.parser, path);
					if (_p1._0.ctor === 'Ok') {
						return _p1._0._0;
					} else {
						return notFoundAction;
					}
				} else {
					var _p2 = A2(_Bogdanp$elm_combine$Combine$parse, _p0._0.parser, path);
					if (_p2._0.ctor === 'Ok') {
						return _p2._0._0;
					} else {
						var _v3 = _p0._1,
							_v4 = notFoundAction,
							_v5 = path;
						routeParsers = _v3;
						notFoundAction = _v4;
						path = _v5;
						continue matchPathWithPathList;
					}
				}
			}
		}
	});
var _sporto$hop$Hop_Matching$matchPath = F2(
	function (config, path) {
		return A3(_sporto$hop$Hop_Matching$matchPathWithPathList, config.matchers, config.notFound, path);
	});
var _sporto$hop$Hop_Matching$matchLocation = F2(
	function (config, location) {
		var pathString = A2(
			_elm_lang$core$String$join,
			'/',
			A2(_elm_lang$core$List_ops['::'], '', location.path));
		return A2(_sporto$hop$Hop_Matching$matchPath, config, pathString);
	});

var _sporto$hop$Hop$clearQuery = function (location) {
	return _elm_lang$core$Native_Utils.update(
		location,
		{query: _elm_lang$core$Dict$empty});
};
var _sporto$hop$Hop$removeQuery = F2(
	function (key, location) {
		var updatedQuery = A2(_elm_lang$core$Dict$remove, key, location.query);
		return _elm_lang$core$Native_Utils.update(
			location,
			{query: updatedQuery});
	});
var _sporto$hop$Hop$setQuery = F2(
	function (query, location) {
		return _elm_lang$core$Native_Utils.update(
			location,
			{query: query});
	});
var _sporto$hop$Hop$addQuery = F2(
	function (query, location) {
		var updatedQuery = A2(_elm_lang$core$Dict$union, query, location.query);
		return _elm_lang$core$Native_Utils.update(
			location,
			{query: updatedQuery});
	});
var _sporto$hop$Hop$makeUrlFromLocation = F2(
	function (config, location) {
		var fullPath = A2(_sporto$hop$Hop_Location$locationToFullPath, config, location);
		var path = _elm_lang$core$Native_Utils.eq(fullPath, '') ? '/' : fullPath;
		return path;
	});
var _sporto$hop$Hop$makeUrl = F2(
	function (config, route) {
		return A2(
			_sporto$hop$Hop$makeUrlFromLocation,
			config,
			_sporto$hop$Hop_Location$locationFromUser(route));
	});
var _sporto$hop$Hop$matcherToPath = F2(
	function (matcher, inputs) {
		var makeSegment = F2(
			function (segment, input) {
				return A2(_elm_lang$core$Basics_ops['++'], segment, input);
			});
		var inputs$ = A2(
			_elm_lang$core$List$append,
			inputs,
			_elm_lang$core$Native_List.fromArray(
				['']));
		var path = A2(
			_elm_lang$core$String$join,
			'',
			A3(_elm_lang$core$List$map2, makeSegment, matcher.segments, inputs$));
		return path;
	});
var _sporto$hop$Hop$matchUrl = F2(
	function (config, url) {
		var location = A2(_sporto$hop$Hop_Location$fromUrl, config, url);
		return {
			ctor: '_Tuple2',
			_0: A2(_sporto$hop$Hop_Matching$matchLocation, config, location),
			_1: location
		};
	});

var _sporto$hop$Hop_Matchers$str = _Bogdanp$elm_combine$Combine$regex('[^/]+');
var _sporto$hop$Hop_Matchers$int = _Bogdanp$elm_combine$Combine_Num$int;
var _sporto$hop$Hop_Matchers$parserWithBeginningAndEnd = function (parser) {
	return A2(_Bogdanp$elm_combine$Combine_Infix_ops['<*'], parser, _Bogdanp$elm_combine$Combine$end);
};
var _sporto$hop$Hop_Matchers$match1 = F2(
	function (constructor, segment1) {
		var constructor$ = function (_p0) {
			var _p1 = _p0;
			return constructor;
		};
		var parser = A2(
			_Bogdanp$elm_combine$Combine$map,
			constructor$,
			_sporto$hop$Hop_Matchers$parserWithBeginningAndEnd(
				_Bogdanp$elm_combine$Combine$skip(
					_Bogdanp$elm_combine$Combine$string(segment1))));
		return {
			parser: parser,
			segments: _elm_lang$core$Native_List.fromArray(
				[segment1])
		};
	});
var _sporto$hop$Hop_Matchers$match2 = F3(
	function (constructor, segment1, parser1) {
		var parser = A2(
			_Bogdanp$elm_combine$Combine$map,
			constructor,
			_sporto$hop$Hop_Matchers$parserWithBeginningAndEnd(
				A2(
					_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
					_Bogdanp$elm_combine$Combine$string(segment1),
					parser1)));
		return {
			parser: parser,
			segments: _elm_lang$core$Native_List.fromArray(
				[segment1])
		};
	});
var _sporto$hop$Hop_Matchers$match3 = F4(
	function (constructor, segment1, parser1, segment2) {
		var parser = A2(
			_Bogdanp$elm_combine$Combine$map,
			constructor,
			_sporto$hop$Hop_Matchers$parserWithBeginningAndEnd(
				A2(
					_Bogdanp$elm_combine$Combine_Infix_ops['<*'],
					A2(
						_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
						_Bogdanp$elm_combine$Combine$string(segment1),
						parser1),
					_Bogdanp$elm_combine$Combine$string(segment2))));
		return {
			parser: parser,
			segments: _elm_lang$core$Native_List.fromArray(
				[segment1, segment2])
		};
	});
var _sporto$hop$Hop_Matchers$match4 = F5(
	function (constructor, segment1, parser1, segment2, parser2) {
		var constructor$ = function (_p2) {
			var _p3 = _p2;
			return A2(constructor, _p3._0, _p3._1);
		};
		var parser = A2(
			_Bogdanp$elm_combine$Combine$map,
			constructor$,
			_sporto$hop$Hop_Matchers$parserWithBeginningAndEnd(
				A2(
					_Bogdanp$elm_combine$Combine$andThen,
					A2(
						_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
						_Bogdanp$elm_combine$Combine$string(segment1),
						parser1),
					function (r) {
						return A2(
							_Bogdanp$elm_combine$Combine$map,
							function (x) {
								return {ctor: '_Tuple2', _0: r, _1: x};
							},
							A2(
								_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
								_Bogdanp$elm_combine$Combine$string(segment2),
								parser2));
					})));
		return {
			parser: parser,
			segments: _elm_lang$core$Native_List.fromArray(
				[segment1, segment2])
		};
	});
var _sporto$hop$Hop_Matchers$nested1 = F3(
	function (constructor, segment1, children) {
		var childrenParsers = A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.parser;
			},
			children);
		var parser = A2(
			_Bogdanp$elm_combine$Combine$map,
			constructor,
			_sporto$hop$Hop_Matchers$parserWithBeginningAndEnd(
				A2(
					_Bogdanp$elm_combine$Combine$andThen,
					_Bogdanp$elm_combine$Combine$string(segment1),
					function (x) {
						return _Bogdanp$elm_combine$Combine$choice(childrenParsers);
					})));
		return {
			parser: parser,
			segments: _elm_lang$core$Native_List.fromArray(
				[segment1])
		};
	});
var _sporto$hop$Hop_Matchers$nested2 = F4(
	function (constructor, segment1, parser1, children) {
		var constructor$ = function (_p4) {
			var _p5 = _p4;
			return A2(constructor, _p5._0, _p5._1);
		};
		var childrenParsers = A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.parser;
			},
			children);
		var parser = A2(
			_Bogdanp$elm_combine$Combine$map,
			constructor$,
			_sporto$hop$Hop_Matchers$parserWithBeginningAndEnd(
				A2(
					_Bogdanp$elm_combine$Combine$andThen,
					A2(
						_Bogdanp$elm_combine$Combine_Infix_ops['*>'],
						_Bogdanp$elm_combine$Combine$string(segment1),
						parser1),
					function (r) {
						return A2(
							_Bogdanp$elm_combine$Combine$map,
							function (x) {
								return {ctor: '_Tuple2', _0: r, _1: x};
							},
							_Bogdanp$elm_combine$Combine$choice(childrenParsers));
					})));
		return {
			parser: parser,
			segments: _elm_lang$core$Native_List.fromArray(
				[segment1])
		};
	});

var _user$project$Bets_Types$Bet = F4(
	function (a, b, c, d) {
		return {answers: a, betId: b, uuid: c, active: d};
	});
var _user$project$Bets_Types$Team = F2(
	function (a, b) {
		return {teamID: a, teamName: b};
	});
var _user$project$Bets_Types$TeamDatum = F3(
	function (a, b, c) {
		return {team: a, players: b, group: c};
	});
var _user$project$Bets_Types$Stadium = F2(
	function (a, b) {
		return {stadium: a, town: b};
	});
var _user$project$Bets_Types$Participant = F6(
	function (a, b, c, d, e, f) {
		return {name: a, address: b, residence: c, phone: d, email: e, howyouknowus: f};
	});
var _user$project$Bets_Types$F = {ctor: 'F'};
var _user$project$Bets_Types$E = {ctor: 'E'};
var _user$project$Bets_Types$D = {ctor: 'D'};
var _user$project$Bets_Types$C = {ctor: 'C'};
var _user$project$Bets_Types$B = {ctor: 'B'};
var _user$project$Bets_Types$A = {ctor: 'A'};
var _user$project$Bets_Types$VI = {ctor: 'VI'};
var _user$project$Bets_Types$V = {ctor: 'V'};
var _user$project$Bets_Types$IV = {ctor: 'IV'};
var _user$project$Bets_Types$III = {ctor: 'III'};
var _user$project$Bets_Types$II = {ctor: 'II'};
var _user$project$Bets_Types$I = {ctor: 'I'};
var _user$project$Bets_Types$TeamNode = F3(
	function (a, b, c) {
		return {ctor: 'TeamNode', _0: a, _1: b, _2: c};
	});
var _user$project$Bets_Types$MatchNode = F6(
	function (a, b, c, d, e, f) {
		return {ctor: 'MatchNode', _0: a, _1: b, _2: c, _3: d, _4: e, _5: f};
	});
var _user$project$Bets_Types$TBD = {ctor: 'TBD'};
var _user$project$Bets_Types$Out = {ctor: 'Out'};
var _user$project$Bets_Types$In = {ctor: 'In'};
var _user$project$Bets_Types$None = {ctor: 'None'};
var _user$project$Bets_Types$AwayTeam = {ctor: 'AwayTeam'};
var _user$project$Bets_Types$HomeTeam = {ctor: 'HomeTeam'};
var _user$project$Bets_Types$Free = {ctor: 'Free'};
var _user$project$Bets_Types$TopThird = {ctor: 'TopThird'};
var _user$project$Bets_Types$Third = {ctor: 'Third'};
var _user$project$Bets_Types$Second = {ctor: 'Second'};
var _user$project$Bets_Types$First = {ctor: 'First'};
var _user$project$Bets_Types$AnswerParticipant = function (a) {
	return {ctor: 'AnswerParticipant', _0: a};
};
var _user$project$Bets_Types$AnswerTopscorer = F2(
	function (a, b) {
		return {ctor: 'AnswerTopscorer', _0: a, _1: b};
	});
var _user$project$Bets_Types$AnswerBracket = F2(
	function (a, b) {
		return {ctor: 'AnswerBracket', _0: a, _1: b};
	});
var _user$project$Bets_Types$AnswerMatchWinner = F5(
	function (a, b, c, d, e) {
		return {ctor: 'AnswerMatchWinner', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _user$project$Bets_Types$AnswerGroupBestThirds = F2(
	function (a, b) {
		return {ctor: 'AnswerGroupBestThirds', _0: a, _1: b};
	});
var _user$project$Bets_Types$AnswerGroupPosition = F4(
	function (a, b, c, d) {
		return {ctor: 'AnswerGroupPosition', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$Bets_Types$AnswerGroupMatch = F4(
	function (a, b, c, d) {
		return {ctor: 'AnswerGroupMatch', _0: a, _1: b, _2: c, _3: d};
	});

var _user$project$Bets_Types_Round$nextRound = function (r) {
	var _p0 = r;
	switch (_p0.ctor) {
		case 'I':
			return _elm_lang$core$Maybe$Just(_user$project$Bets_Types$II);
		case 'II':
			return _elm_lang$core$Maybe$Just(_user$project$Bets_Types$III);
		case 'III':
			return _elm_lang$core$Maybe$Just(_user$project$Bets_Types$IV);
		case 'IV':
			return _elm_lang$core$Maybe$Just(_user$project$Bets_Types$V);
		case 'V':
			return _elm_lang$core$Maybe$Just(_user$project$Bets_Types$VI);
		default:
			return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Bets_Types_Round$toRound = function (i) {
	var _p1 = i;
	switch (_p1) {
		case 1:
			return _user$project$Bets_Types$I;
		case 2:
			return _user$project$Bets_Types$II;
		case 3:
			return _user$project$Bets_Types$III;
		case 4:
			return _user$project$Bets_Types$IV;
		case 5:
			return _user$project$Bets_Types$V;
		default:
			return _user$project$Bets_Types$VI;
	}
};
var _user$project$Bets_Types_Round$decode = A2(_elm_lang$core$Json_Decode$map, _user$project$Bets_Types_Round$toRound, _elm_lang$core$Json_Decode$int);
var _user$project$Bets_Types_Round$toInt = function (r) {
	var _p2 = r;
	switch (_p2.ctor) {
		case 'I':
			return 1;
		case 'II':
			return 2;
		case 'III':
			return 3;
		case 'IV':
			return 4;
		case 'V':
			return 5;
		default:
			return 6;
	}
};
var _user$project$Bets_Types_Round$isSameOrANextRound = F2(
	function (r1, r2) {
		return _elm_lang$core$Native_Utils.cmp(
			_user$project$Bets_Types_Round$toInt(r1),
			_user$project$Bets_Types_Round$toInt(r2)) > -1;
	});
var _user$project$Bets_Types_Round$encode = function (r) {
	return _elm_lang$core$Json_Encode$int(
		_user$project$Bets_Types_Round$toInt(r));
};

var _user$project$Bets_Types_Team$england = {
	team: {teamID: 'ENG', teamName: 'Engeland'},
	players: _elm_lang$core$Native_List.fromArray(
		['Joe Hart', 'Fraser Forster', 'Tom Heaton', 'Nathaniel Clyne', 'Kyle Walker', 'Danny Rose', 'Ryan Bertrand', 'Chris Smalling', 'John Stones', 'Gary Cahill', 'Dele Alli', 'Ross Barkley', 'Fabian Delph', 'Danny Drinkwater', 'Eric Dier', 'Jordan Henderson', 'James Milner', 'Adam Lallana', 'Raheem Sterling', 'Jack Wilshere', 'Andros Townsend', 'Wayne Rooney', 'Harry Kane', 'Jamie Vardy', 'Marcus Rashford', 'Daniel Sturridge']),
	group: _user$project$Bets_Types$B
};
var _user$project$Bets_Types_Team$france = {
	team: {teamID: 'FRA', teamName: 'Frankrijk'},
	players: _elm_lang$core$Native_List.fromArray(
		['Hugo Lloris', 'Steve Mandanda', 'Benoit Costil', 'Bacary Sagna', 'Christophe Jallet', 'Patrice Evra', 'Raphaël Varane', 'Laurent Koscielny', 'Eliaquim Mangala', 'Jérémy Mathieu', 'Lucas Digne', 'Lassana Diarra', 'N’Golo Kanté', 'Blaise Matuidi', 'Paul Pogba', 'Yohan Cabaye', 'Moussa Sissoko ', 'Antoine Griezmann', 'André-Pierre Gignac', 'Anthony Martial', 'Dimitri Payet', 'Kingsley Coman', 'Olivier Giroud']),
	group: _user$project$Bets_Types$A
};
var _user$project$Bets_Types_Team$encode = function (team) {
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 'teamID',
				_1: _elm_lang$core$Json_Encode$string(team.teamID)
			},
				{
				ctor: '_Tuple2',
				_0: 'teamName',
				_1: _elm_lang$core$Json_Encode$string(team.teamName)
			}
			]));
};
var _user$project$Bets_Types_Team$encodeMaybe = function (mTeam) {
	var _p0 = mTeam;
	if (_p0.ctor === 'Just') {
		return _user$project$Bets_Types_Team$encode(_p0._0);
	} else {
		return _elm_lang$core$Json_Encode$null;
	}
};
var _user$project$Bets_Types_Team$decode = A3(
	_elm_lang$core$Json_Decode$object2,
	_user$project$Bets_Types$Team,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'teamID', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'teamName', _elm_lang$core$Json_Decode$string));
var _user$project$Bets_Types_Team$isComplete = function (mTeam) {
	return _elm_community$maybe_extra$Maybe_Extra$isJust(mTeam);
};
var _user$project$Bets_Types_Team$flagUri = function (size) {
	return ((_elm_lang$core$Native_Utils.cmp(size, 5) > 0) || (_elm_lang$core$Native_Utils.cmp(size, 0) < 0)) ? 'http://img.fifa.com/images/flags/3/' : A2(
		_elm_lang$core$Basics_ops['++'],
		'http://img.fifa.com/images/flags/',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(size),
			'/'));
};
var _user$project$Bets_Types_Team$log = function (team) {
	return team.teamName;
};
var _user$project$Bets_Types_Team$mdisplayFull = function (mteam) {
	var _p1 = mteam;
	if (_p1.ctor === 'Nothing') {
		return '';
	} else {
		return _p1._0.teamName;
	}
};
var _user$project$Bets_Types_Team$display = function (team) {
	return team.teamID;
};
var _user$project$Bets_Types_Team$mdisplay = function (mteam) {
	var _p2 = mteam;
	if (_p2.ctor === 'Nothing') {
		return '';
	} else {
		return _user$project$Bets_Types_Team$display(_p2._0);
	}
};
var _user$project$Bets_Types_Team$team = F2(
	function (teamID, teamName) {
		return A2(_user$project$Bets_Types$Team, teamID, teamName);
	});
var _user$project$Bets_Types_Team$flag = function (mteam) {
	var $default = A2(_user$project$Bets_Types_Team$team, 'xyz', '');
	var uri = function (team) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_user$project$Bets_Types_Team$flagUri(2),
			A2(_elm_lang$core$Basics_ops['++'], team.teamID, '.png'));
	};
	var _p3 = mteam;
	if (_p3.ctor === 'Nothing') {
		return A2(
			_elm_lang$html$Html$img,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$src(
					uri($default))
				]),
			_elm_lang$core$Native_List.fromArray(
				[]));
	} else {
		return A2(
			_elm_lang$html$Html$img,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$src(
					uri(_p3._0))
				]),
			_elm_lang$core$Native_List.fromArray(
				[]));
	}
};
var _user$project$Bets_Types_Team$romania = {
	team: A2(_user$project$Bets_Types_Team$team, 'ROU', 'Roemenië'),
	players: _elm_lang$core$Native_List.fromArray(
		['Ciprian Tatarusanu', 'Costel Pantilimon', 'Silviu Lung', 'Cristian Sapunaru', 'Alexandru Matel', 'Vlad Chiriches', 'Valerica Gaman', 'Cosmin Moti', 'Dragos Grigore', 'Razvan Raţ', 'Steliano Filip', 'Alin Tosca', 'Mihai Pintilii', 'Ovidiu Hoban', 'Adrian Ropotan', 'Andrei Prepelita', 'Adrian Popa', 'Gabriel Torje', 'Alexandru Chipciu', 'Alexandru Maxim', 'Nicolae Stanciu', 'Lucian Sanmartean', 'Claudiu Keserü', 'Bogdan Stancu', 'Florin Andone', 'Denis Alibec', 'Ioan Hora', 'Andrei Ivan']),
	group: _user$project$Bets_Types$A
};
var _user$project$Bets_Types_Team$albania = {
	team: A2(_user$project$Bets_Types_Team$team, 'ALB', 'Albanië'),
	players: _elm_lang$core$Native_List.fromArray(
		['Etrit Berisha', 'Alban Hoxha', 'Orges Shehi', 'Lorik Cana', 'Arlind Ajeti', 'Berat Gjimshiti', 'Mërgim Mavraj', 'Amir Rrahmani', 'Elseid Hysaj', 'Ansi Agolli', 'Frederic Veseli', 'Naser Aliji', 'Ledjan Memushaj', 'Ergys Kace', 'Andi Lila', 'Migjen Basha', 'Odise Roshi', 'Burim Kukeli', 'Ermir Lenjani', 'Herolind Shala', 'Taulant Xhaka', 'Armir Abrashi', 'Bekim Balaj', 'Sokol Cikalleshi', 'Armando Sadiku', 'Milot Rashica', 'Shkëlzen Gashi']),
	group: _user$project$Bets_Types$A
};
var _user$project$Bets_Types_Team$switzerland = {
	team: A2(_user$project$Bets_Types_Team$team, 'SUI', 'Zwitserland'),
	players: _elm_lang$core$Native_List.fromArray(
		['Roman Bürki', 'Marwin Hitz', 'Yvon Mvongo', 'Yann Sommer', 'Johan Djourou', 'Nicol Elvedi', 'Michael Lang', 'Stephan Lichtsteiner', 'François Moubandje', 'Ricardo Rodriguez', 'Fabian Schär', 'Philippe Senderos', 'Steve Von Bergen', 'Silvan Widmer', 'Valon Behrami', 'Eeren Derdiyok', 'Blerim Dzemaili', 'Breel Embolo', 'Gelson Fernandes', 'Fabian Frei', 'Admir Mehmedi', 'Haris Seferovic', 'Xherdan Shaqiri', 'Renato Steffen', 'Shani Tarashaj', 'Granit Xhaka', 'Denis Zakaria', 'Luca Zuffi']),
	group: _user$project$Bets_Types$A
};
var _user$project$Bets_Types_Team$russia = {
	team: A2(_user$project$Bets_Types_Team$team, 'RUS', 'Rusland'),
	players: _elm_lang$core$Native_List.fromArray(
		['Igor Akinfeev', 'Guilherme', 'Yuri Lodygin', 'Alexei Berezutsky', 'Vasily Berezutsky', 'Sergei Ignashevich', 'Dmitry Kombarov', 'Roman Neustädter', 'Georgy Shchennikov', 'Roman Shishkin', 'Igor Smolnikov', 'Igor Denisov', 'Dmitri Torbinski', 'Denis Glushakov', 'Alexander Golovin', 'Oleg Ivanov', 'Pavel Mamaev', 'Alexander Samedov', 'Oleg Shatov', 'Roman Shirokov', 'Artyom Dzyuba', 'Alexander Kokorin', 'Fyodor Smolov']),
	group: _user$project$Bets_Types$B
};
var _user$project$Bets_Types_Team$wales = {
	team: A2(_user$project$Bets_Types_Team$team, 'WAL', 'Wales'),
	players: _elm_lang$core$Native_List.fromArray(
		['Wayne Hennessey', 'Danny Ward', 'Owain Fon Williams', 'Ben Davies', 'Neil Taylor', 'Chris Gunter', 'Ashley Williams', 'James Chester', 'Ashley Richards', 'Paul Dummett', 'Adam Henley', 'Adam Matthews', 'James Collins', 'Aaron Ramsey', 'Joe Ledley', 'David Vaughan', 'Joe Allen', 'David Cotterill', 'Jonathan Williams', 'George Williams', 'Andy King', 'Emyr Huws', 'Dave Edwards (Wolverhampton Wanderers).', 'Hal Robson-Kanu', 'Sam Vokes', 'Tom Bradshaw', 'Tom Lawrence', 'Simon Church', 'Wes Burns', 'Gareth Bale']),
	group: _user$project$Bets_Types$B
};
var _user$project$Bets_Types_Team$slovakia = {
	team: A2(_user$project$Bets_Types_Team$team, 'SVK', 'Slowakije'),
	players: _elm_lang$core$Native_List.fromArray(
		['Matus Kozacik', 'Jan Mucha', 'Jan Novota', 'Peter Pekarik', 'Milan Skriniar', 'Martin Skrtel', 'Norbert Gyoember', 'Jan Durica', 'Kornel Salata', 'Tomas Hubocan', 'Dusan Svento', 'Lukas Tesak', 'Viktor Pecovsky', 'Matus Bero', 'Robert Mak', 'Erik Sabo', 'Juraj Kucka', 'Patrik Hrosovsky', 'Jan Gregus', 'Stanislav Sestak', 'Marek Hamsik', 'Ondrej Duda', 'Miroslav Stoch', 'Vladimir Weiss', 'Michal Duris', 'Adam Nemec', 'Adam Zrelak']),
	group: _user$project$Bets_Types$B
};
var _user$project$Bets_Types_Team$germany = {
	team: A2(_user$project$Bets_Types_Team$team, 'GER', 'Duitsland'),
	players: _elm_lang$core$Native_List.fromArray(
		['Manuel Neuer', 'Bernd Leno', 'Marc-André Ter Stegen', 'Jérôme Boateng', 'Emre Can', 'Jonas Hector', 'Benedikt Höwedes', 'Mats Hummels', 'Shkodran Mustafi', 'Sebastian Rudy', 'Antonio Rüdiger', 'Julian Brandt', 'Julian Draxler', 'Mario Götze', 'Sami Khedira', 'Joshua Kimmich', 'Toni Kroos', 'Thomas Muller', 'Mesut Özil', 'Bastian Schweinsteiger', 'Julian Weigl', 'Karim Bellarabi', 'Mario Gomez', ' Lukas Podolski', 'Marco Reus', 'Leroy Sané', 'André Schürrle']),
	group: _user$project$Bets_Types$C
};
var _user$project$Bets_Types_Team$ukraine = {
	team: A2(_user$project$Bets_Types_Team$team, 'UKR', 'Oekraïne'),
	players: _elm_lang$core$Native_List.fromArray(
		['Andriy Pyatov', 'Denys Boyko', 'Mykyta Shevchenko', 'Vyacheslav Shevchuk', 'Yaroslav Rakitskyi', 'Oleksandr Kucher', 'Yevgen Khacheridi', 'Artem Fedetskyi', 'Mykyta Kamenyuka', 'Bogdan Butko', 'Anatoliy Tymoshchuk', 'Taras Stepanenko', 'Viktor Kovalenko', 'Maksym Malyshev', 'Ruslan Rotan Dnipro Dnipropetrovsk)', 'Yevhen Shakhov  Dnipro Dnipropetrovsk)', 'Yevhen Konoplyanka', 'Oleg Gusev', 'Sergiy Rybalka', 'Denys Garmash', 'Sergiy Sydorchuk', 'Andriy Yarmolenko', 'Oleksandr Karavayev', 'Ivan Petryak', 'Oleksandr Zinchenko', 'Roman Zozulya', 'Artem Kravets', 'Pylyp Budkivskyi']),
	group: _user$project$Bets_Types$C
};
var _user$project$Bets_Types_Team$poland = {
	team: A2(_user$project$Bets_Types_Team$team, 'POL', 'Polen'),
	players: _elm_lang$core$Native_List.fromArray(
		['Artur Boruc', 'Lukasz Fabianski', 'Wojciech Szczesny', 'Przemysław Tyton (VfB Stuttgart).', 'Thiago Cionek', 'Pavel Dawidowicz', 'Kamil Glik', 'Artur Jedrzejczyk', 'Michał Pazdan', 'Lukasz Piszczek', 'Maciej Rybus', 'Bartosz Salamon', 'Jakub Wawrzyniak (Lechia Gdansk).', 'Jakub Blaszczykowski', 'Kamil Grosicki', 'Tomasz Jodlowiec', 'Bartosz Kapustka', 'Grzegorz Krychowiak', 'Karol Linetty', 'Krzysztof Maczynski', 'Slawomir Peszko', 'Filip Starzynski', 'Pavel Wszolek', 'Piotr Zielinski', 'Robert Lewandowski', 'Arek Milik', 'Artur Sobiech', 'Mariusz Stepinski']),
	group: _user$project$Bets_Types$C
};
var _user$project$Bets_Types_Team$northernIreland = {
	team: A2(_user$project$Bets_Types_Team$team, 'NIR', 'Noord-Ierland'),
	players: _elm_lang$core$Native_List.fromArray(
		['Roy Carroll', 'Michael McGovern', 'Alan McManus', 'Craig Cathcart', 'Jonny Evans', 'Gareth McAuley', 'Luke McCullough', 'Conor McLaughlin', 'Aaron Hughes', 'Daniel Lafferty', 'Michael Smith', 'Lee Hodson', 'Chris Baird', 'Paddy McNair', 'Steven Davis', 'Oliver Norwood', 'Corry Evans', 'Jamie Ward', 'Stuart Dallas', 'Niall McGinn', 'Shane Ferguson', 'Ben Reeves', 'Will Grigg', 'Kyle Lafferty', 'Conor Washington', 'Billy McKay', 'Liam Boyce', 'Josh Magennis']),
	group: _user$project$Bets_Types$C
};
var _user$project$Bets_Types_Team$spain = {
	team: A2(_user$project$Bets_Types_Team$team, 'ESP', 'Spanje'),
	players: _elm_lang$core$Native_List.fromArray(
		['Iker Casillas', 'David De Gea', 'Sergio Rico', 'Sergio Ramos', 'Gerard Piqué', 'Dani Carvajal', 'Jordi Alba', 'Marc Bartra', 'Cesar Azpilicueta', 'Mikel San José', 'Juanfran', 'Bruno Soriano', 'Sergio Busquets', 'Koke', 'Thiago', 'Andrés Iniesta', 'Isco', 'David Silva', 'Pedro', 'Cesc Fabregas', 'Saúl', 'Aritz Aduriz', 'Nolito', 'Alvaro Morata', 'Lucas Vázquez']),
	group: _user$project$Bets_Types$D
};
var _user$project$Bets_Types_Team$czechRepublic = {
	team: A2(_user$project$Bets_Types_Team$team, 'CZE', 'Tsjechië'),
	players: _elm_lang$core$Native_List.fromArray(
		['Petr Cech', 'Tomas Vaclik', 'Tomas Koubek', 'Pavel Kaderabek', 'Theodor Gebre Selassie', 'Tomas Sivok', 'Michal Kadlec', 'Ondrej Zahustel', 'Roman Hubnik', 'David Limbersky', 'Daniel Pudil', 'Marek Suchy (FC Basel).', 'Vladimir Darida', 'Jaroslav Plasil', 'David Pavelka', 'Jiri Skalak', 'Ladislav Krejci', 'Borek Dockal', 'Tomas Rosicky', 'Daniel Kolar', 'Jan Kovarik', 'Lukas Marecek', 'Tomas Necid', 'Matej Vydra', 'David Lafata', 'Patrik Schick', 'Milan Skoda']),
	group: _user$project$Bets_Types$D
};
var _user$project$Bets_Types_Team$turkey = {
	team: A2(_user$project$Bets_Types_Team$team, 'TUR', 'Turkije'),
	players: _elm_lang$core$Native_List.fromArray(
		['Ali Sasal Vural', 'Harun Tekin', 'Onur Kivrak', 'Volkan Babacan', 'Gökhan Gönül', 'Şener Özbayrakli', 'Ahmet Çalik', 'Çaglar Söyüncü', 'Hakan Balta', 'Mehmet Topal', 'Semih Kaya', 'Serdar Aziz', 'Caner Erkin', 'İsmail Köybasi', 'Emre Mor', 'Gökhan Töre', 'Volkan Sen', 'Yasin Öztekin', 'Hakan Calhanogu', 'Mahmut Tekdemir', 'Nuri Sahin', 'Oguzhan Özyakup', 'Ozan Tufan', 'Selçuk İnan', 'Alper Potuk', 'Arda Turan', 'Olcay Şahan', 'Burak Yilmaz', 'Cenk Tosun', 'Mevlüt Erdinç', 'Yunus Malli']),
	group: _user$project$Bets_Types$D
};
var _user$project$Bets_Types_Team$croatia = {
	team: A2(_user$project$Bets_Types_Team$team, 'CRO', 'Kroatië'),
	players: _elm_lang$core$Native_List.fromArray(
		['Danijel Subasic', 'Lovre Kalinic', 'Ivan Vargic', 'Dominik Livakovic', 'Darijo Srna', 'Vedran Corluka', 'Domagoj Vida', 'Ivan Strinic', 'Gordon Schildenfeld', 'Sime Vrsaljko', 'Tin Jedvaj', 'Duje Caleta-Car', 'Luka Modric', 'Ivan Rakitic', 'Ivan Perisic', 'Mateo Kovacic', 'Milan Badelj', 'Marcelo Brozovic', 'Alen Halilovic', 'Domagoj Antolic', 'Marko Rog', 'Ante Coric', 'Mario Mandzukic', 'Nikola Kalinic', 'Andrej Kramaric', 'Marko Pjaca', 'Duje Cop']),
	group: _user$project$Bets_Types$D
};
var _user$project$Bets_Types_Team$belgium = {
	team: A2(_user$project$Bets_Types_Team$team, 'BEL', 'België'),
	players: _elm_lang$core$Native_List.fromArray(
		['Thibaut Courtois', 'Simon Mignolet', 'Jean-François Gillet', 'Jan Vertonghen', 'Toby Alderweireld', 'Nicolas Lombaerts', 'Thomas Vermaelen', 'Jason Denayer', 'Jordan Lukaku', 'Björn Engels', 'Dedryck Boyata', 'Thomas Meunier', 'Kevin De Bruyne', 'Radja Nainggolan', 'Moussa Dembélé', 'Axel Witsel', 'Marouane Fellaini', 'Dries Mertens', 'Eden Hazard', 'Romelu Lukaku', 'Yannick Ferreira-Carrasco', 'Divock Origi', 'Michy Batshuayi', 'Christian Benteke']),
	group: _user$project$Bets_Types$E
};
var _user$project$Bets_Types_Team$italy = {
	team: A2(_user$project$Bets_Types_Team$team, 'ITA', 'Italië'),
	players: _elm_lang$core$Native_List.fromArray(
		['Gianluigi Buffon', 'Federico Marchetti', 'Salvatore Sirigu (Paris Saint Germain) ', 'Davide Astori', 'Andrea Barzagli', 'Leonardo Bonucci', 'Giorgio Chiellini', 'Matteo Darmian', 'Mattia De Sciglio', 'Angelo Ogbonna', 'Daniele Rugani', 'Davide Zappacosta', 'Marco Benassi', 'Federico Bernardeschi', 'Giacomo Bonaventura', 'Antonio Candreva', 'Daniele De Rossi', 'Alessandro Florenzi', 'Emanuele Giaccherini', 'Jorge Luiz Jorginho', 'Riccardo Montolivo', 'Thiago Motta', 'Marco Parolo', 'Stefano Sturaro', 'Eder', 'Ciro Immobile', 'Stephan El Shaarawy', 'Lorenzo Insigne', 'Graziano Pellè', 'Simone Zaza']),
	group: _user$project$Bets_Types$E
};
var _user$project$Bets_Types_Team$ireland = {
	team: A2(_user$project$Bets_Types_Team$team, 'IRL', 'Ierland'),
	players: _elm_lang$core$Native_List.fromArray(
		['Shay Given', 'Darren Randolph', 'David Forde', 'Keiren Westwood', 'Seamus Coleman', 'Cyrus Christie', 'Paul McShane', 'Ciaran Clark', 'Richard Keogh', 'John O\'Shea', 'Alex Pearce', 'Shane Duffy', 'Marc Wilson', 'Stephen Ward', 'Aiden McGeady', 'James McClean', 'Glenn Whelan', 'James McCarthy', 'Jeff Hendrick', 'David Meyler', 'Stephen Quinn', 'Darron Gibson', 'Harry Arter', 'Wes Hoolahan', 'Eunan O\'Kane', 'Anthony Pilkington', 'Robbie Brady', 'Jonathan Walters', 'Jonathan Hayes', 'Callum O\'Dowda', 'Robbie Keane', 'Shane Long', 'David McGoldrick', 'Kevin Doyle', 'Daryl Murphy']),
	group: _user$project$Bets_Types$E
};
var _user$project$Bets_Types_Team$sweden = {
	team: A2(_user$project$Bets_Types_Team$team, 'SWE', 'Zweden'),
	players: _elm_lang$core$Native_List.fromArray(
		['Patrick Carlgren', 'Andreas Isaksson', 'Robin Olsen', 'Ludwig Augustinsson', 'Andreas Granqvist', 'Pontus Jansson', 'Erik Johansson', 'Mikael Lustig', 'Victor Lindelöf', 'Martin Olsson', 'Jimmy Durmaz', 'Albin Ekdal', 'Emil Forsberg', 'Oscar Hiljemark', 'Kim Källström', 'Sebastian Larsson', 'Oscar Lewicki', 'Pontus Wernbloom', 'Erkan Zengin', 'Marcus Berg', 'John Guidetti', 'Zlatan Ibrahimovic', 'Emir Kujovic']),
	group: _user$project$Bets_Types$E
};
var _user$project$Bets_Types_Team$portugal = {
	team: A2(_user$project$Bets_Types_Team$team, 'POR', 'Portugal'),
	players: _elm_lang$core$Native_List.fromArray(
		['Rui Patricio', 'Anthony Lopes', 'Eduardo', 'Vieirinha', 'Raphael Guerreiro', 'Cédric Soares', 'Eliseu', 'Bruno Alves', 'José Fonte', 'Ricardo Carvalho', 'Pepe', 'William Carvalho', 'Danilo Pereira', 'João Moutinho', 'Adrien Silva', 'João Mario', 'André Gomes', 'Renato Sanches', 'Cristiano Ronaldo', 'Eder', 'Nani', 'Ricardo Quaresma', 'Rafa Silva']),
	group: _user$project$Bets_Types$F
};
var _user$project$Bets_Types_Team$iceland = {
	team: A2(_user$project$Bets_Types_Team$team, 'ISL', 'IJsland'),
	players: _elm_lang$core$Native_List.fromArray(
		['Hannes Halldorsson', 'Ögmundur Kristinsson', 'Ingvar Jonsson', 'Birkir Mar Saevarsson', 'Ragnar Sigurdsson', 'Kari Arnason', 'Ari Freyr Skulason', 'Haukur Heidar Hauksson', 'Sverrir Ingi Ingason', 'Hördur Björgvin Magnusson', 'Hjörtur Hermannsson', 'Aron Einar Gunnarsson', 'Emil Hallfredsson', 'Birkir Bjarnason', 'Johann Berg Gudmundsson', 'Gylfi Sigurdsson', 'Theodor Elmar Bjarnason', 'Runar Mar Sigurjonsson', 'Arnor Ingvi Traustason', 'Eidur Gudjohnsen', 'Kolbeinn Sigthorsson', 'Alfred Finnbogason', 'Jon Dadi Bödvarsson']),
	group: _user$project$Bets_Types$F
};
var _user$project$Bets_Types_Team$austria = {
	team: A2(_user$project$Bets_Types_Team$team, 'AUT', 'Oostenrijk'),
	players: _elm_lang$core$Native_List.fromArray(
		['Robert Almer', 'Heinz Lindner', 'Ramazan Ozcan', 'Aleksandar Dragovic', 'Christian Fuchs', 'Gyorgy Garics', 'Martin Hinteregger', 'Florian Klein', 'Sebastian Prodl', 'Markus Suttner', 'Kevin Wimmer', 'David Alaba', 'Marko Arnautovic', 'Julian Baumgartlinger', 'Martin Harnik', 'Stefan Ilsanker', 'Jakob Jantscher', 'Zlatko Junuzovic', 'Marcel Sabitzer', 'Alessandro Schopf', 'Valentino Lazaro', 'Lukas Hinterseer', 'Rubin Okotie', 'Marc Janko']),
	group: _user$project$Bets_Types$F
};
var _user$project$Bets_Types_Team$hungary = {
	team: A2(_user$project$Bets_Types_Team$team, 'HUN', 'Hongarije'),
	players: _elm_lang$core$Native_List.fromArray(
		['Gábor Király', 'Balázs Megyeri', 'Dénes Dibusz', 'Péter Gulácsi', 'Roland Juhász', 'Tamás Kádár', 'Mihály Korhut', 'Richárd Guzmics', 'Attila Fiola', 'Ádám Lang', 'Gergö Kocsis', 'Barnabás Bese', 'Zsolt Korcsmár', 'Gergö Lovrencsis', 'Máté Vida', 'Zoltán Gera', 'Balázs Dzsudzsák', 'Ákos Elek', 'Ádám Pintér', 'Zoltán Stieber', 'Ádám Gyurcsó', 'Ádám Nagy', 'László Keinheisler', 'Roland Sallai', 'Tamás Priskin', 'Ádám Szalai', 'Krisztián Németh', 'Nemanja Nikolic', 'Dániel Böde', 'Lászlo Lencse']),
	group: _user$project$Bets_Types$F
};
var _user$project$Bets_Types_Team$initTeamData = _elm_lang$core$Native_List.fromArray(
	[_user$project$Bets_Types_Team$france, _user$project$Bets_Types_Team$romania, _user$project$Bets_Types_Team$albania, _user$project$Bets_Types_Team$switzerland, _user$project$Bets_Types_Team$england, _user$project$Bets_Types_Team$russia, _user$project$Bets_Types_Team$wales, _user$project$Bets_Types_Team$slovakia, _user$project$Bets_Types_Team$germany, _user$project$Bets_Types_Team$ukraine, _user$project$Bets_Types_Team$poland, _user$project$Bets_Types_Team$northernIreland, _user$project$Bets_Types_Team$spain, _user$project$Bets_Types_Team$czechRepublic, _user$project$Bets_Types_Team$turkey, _user$project$Bets_Types_Team$croatia, _user$project$Bets_Types_Team$belgium, _user$project$Bets_Types_Team$italy, _user$project$Bets_Types_Team$ireland, _user$project$Bets_Types_Team$sweden, _user$project$Bets_Types_Team$portugal, _user$project$Bets_Types_Team$iceland, _user$project$Bets_Types_Team$austria, _user$project$Bets_Types_Team$hungary]);

var _user$project$Bets_Types_Draw$encode = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Json_Encode$list(
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$core$Json_Encode$string(_p1._0),
				_user$project$Bets_Types_Team$encodeMaybe(_p1._1)
			]));
};
var _user$project$Bets_Types_Draw$isComplete = function (_p2) {
	var _p3 = _p2;
	return _user$project$Bets_Types_Team$isComplete(_p3._1);
};
var _user$project$Bets_Types_Draw$draw = F2(
	function (drawId, mTeam) {
		return {ctor: '_Tuple2', _0: drawId, _1: mTeam};
	});
var _user$project$Bets_Types_Draw$decode = A3(
	_elm_lang$core$Json_Decode$tuple2,
	_user$project$Bets_Types_Draw$draw,
	_elm_lang$core$Json_Decode$string,
	_elm_lang$core$Json_Decode$maybe(_user$project$Bets_Types_Team$decode));
var _user$project$Bets_Types_Draw$team = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};

var _user$project$Bets_Types_Date$toDate = function (dateStr) {
	return A2(
		_elm_lang$core$Result$withDefault,
		_elm_lang$core$Date$fromTime(0),
		_elm_lang$core$Date$fromString(dateStr));
};
var _user$project$Bets_Types_Date$decode = A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Date$fromTime, _elm_lang$core$Json_Decode$float);
var _user$project$Bets_Types_Date$encode = function (date) {
	return _elm_lang$core$Json_Encode$float(
		_elm_lang$core$Date$toTime(date));
};

var _user$project$Bets_Types_Stadium$encode = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 'stadium',
				_1: _elm_lang$core$Json_Encode$string(_p1.stadium)
			},
				{
				ctor: '_Tuple2',
				_0: 'town',
				_1: _elm_lang$core$Json_Encode$string(_p1.town)
			}
			]));
};
var _user$project$Bets_Types_Stadium$decode = A3(
	_elm_lang$core$Json_Decode$object2,
	_user$project$Bets_Types$Stadium,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'stadium', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'town', _elm_lang$core$Json_Decode$string));

var _user$project$Bets_Types_Match$encode = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Json_Encode$list(
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Bets_Types_Draw$encode(_p1._0),
				_user$project$Bets_Types_Draw$encode(_p1._1),
				_user$project$Bets_Types_Date$encode(_p1._2),
				_user$project$Bets_Types_Stadium$encode(_p1._3)
			]));
};
var _user$project$Bets_Types_Match$unsetTeamMatch = F2(
	function (_p2, team) {
		var _p3 = _p2;
		var cleanDraw = function (_p4) {
			var _p5 = _p4;
			var _p7 = _p5;
			var _p6 = _p5._1;
			if (_p6.ctor === 'Just') {
				return _elm_lang$core$Native_Utils.eq(team, _p6._0) ? {ctor: '_Tuple2', _0: _p5._0, _1: _elm_lang$core$Maybe$Nothing} : _p7;
			} else {
				return _p7;
			}
		};
		var newHome = cleanDraw(_p3._0);
		var newAway = cleanDraw(_p3._1);
		return {ctor: '_Tuple4', _0: newHome, _1: newAway, _2: _p3._2, _3: _p3._3};
	});
var _user$project$Bets_Types_Match$setTeamMatch = F2(
	function (_p9, _p8) {
		var _p10 = _p9;
		var _p11 = _p8;
		var _p14 = _p11._0;
		var updateDraw = function (_p12) {
			var _p13 = _p12;
			return _elm_lang$core$Native_Utils.eq(_p13._0, _p14) ? {ctor: '_Tuple2', _0: _p14, _1: _p11._1} : _p13;
		};
		var newHome = updateDraw(_p10._0);
		var newAway = updateDraw(_p10._1);
		return {ctor: '_Tuple4', _0: newHome, _1: newAway, _2: _p10._2, _3: _p10._3};
	});
var _user$project$Bets_Types_Match$teamsInMatch = function (_p15) {
	var _p16 = _p15;
	return A2(
		_elm_lang$core$List$filterMap,
		_elm_lang$core$Basics$identity,
		_elm_lang$core$Native_List.fromArray(
			[_p16._0._1, _p16._1._1]));
};
var _user$project$Bets_Types_Match$isComplete = F2(
	function (m, mTeam) {
		var _p17 = mTeam;
		if (_p17.ctor === 'Just') {
			var teams = _user$project$Bets_Types_Match$teamsInMatch(m);
			return _elm_lang$core$Native_Utils.eq(
				_elm_lang$core$List$length(teams),
				2) && A2(_elm_lang$core$List$member, _p17._0, teams);
		} else {
			return false;
		}
	});
var _user$project$Bets_Types_Match$match = F4(
	function (home, away, date, stadium) {
		return {ctor: '_Tuple4', _0: home, _1: away, _2: date, _3: stadium};
	});
var _user$project$Bets_Types_Match$decode = A5(_elm_lang$core$Json_Decode$tuple4, _user$project$Bets_Types_Match$match, _user$project$Bets_Types_Draw$decode, _user$project$Bets_Types_Draw$decode, _user$project$Bets_Types_Date$decode, _user$project$Bets_Types_Stadium$decode);
var _user$project$Bets_Types_Match$awayTeam = function (_p18) {
	var _p19 = _p18;
	return _user$project$Bets_Types_Draw$team(_p19._1);
};
var _user$project$Bets_Types_Match$homeTeam = function (_p20) {
	var _p21 = _p20;
	return _user$project$Bets_Types_Draw$team(_p21._0);
};

var _user$project$Bets_Types_Bracket$encodeHasQualified = function (hasQ) {
	return _elm_lang$core$Json_Encode$string(
		_elm_lang$core$Basics$toString(hasQ));
};
var _user$project$Bets_Types_Bracket$toHasQualified = function (hasQStr) {
	var _p0 = hasQStr;
	switch (_p0) {
		case 'TBD':
			return _user$project$Bets_Types$TBD;
		case 'In':
			return _user$project$Bets_Types$In;
		case 'Out':
			return _user$project$Bets_Types$Out;
		default:
			return _user$project$Bets_Types$TBD;
	}
};
var _user$project$Bets_Types_Bracket$decodeHasQualified = A2(_elm_lang$core$Json_Decode$map, _user$project$Bets_Types_Bracket$toHasQualified, _elm_lang$core$Json_Decode$string);
var _user$project$Bets_Types_Bracket$toStringHasQualified = function (hasQ) {
	var _p1 = hasQ;
	switch (_p1.ctor) {
		case 'TBD':
			return 'TBD';
		case 'In':
			return 'In';
		default:
			return 'Out';
	}
};
var _user$project$Bets_Types_Bracket$decodeWinner = function (w) {
	var stringToWinner = function (winner) {
		var _p2 = winner;
		switch (_p2) {
			case 'HomeTeam':
				return _user$project$Bets_Types$HomeTeam;
			case 'AwayTeam':
				return _user$project$Bets_Types$AwayTeam;
			default:
				return _user$project$Bets_Types$None;
		}
	};
	var _p3 = w;
	if (_p3.ctor === 'Nothing') {
		return _elm_lang$core$Json_Decode$succeed(_user$project$Bets_Types$None);
	} else {
		return _elm_lang$core$Json_Decode$succeed(
			stringToWinner(_p3._0));
	}
};
var _user$project$Bets_Types_Bracket$decode = A2(
	_elm_lang$core$Json_Decode$andThen,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'node', _elm_lang$core$Json_Decode$string),
	function (node) {
		var _p4 = node;
		switch (_p4) {
			case 'team':
				return A4(
					_elm_lang$core$Json_Decode$object3,
					_user$project$Bets_Types$TeamNode,
					A2(_elm_lang$core$Json_Decode_ops[':='], 'slot', _elm_lang$core$Json_Decode$string),
					A2(
						_elm_lang$core$Json_Decode_ops[':='],
						'qualifier',
						_elm_lang$core$Json_Decode$maybe(_user$project$Bets_Types_Team$decode)),
					A2(_elm_lang$core$Json_Decode_ops[':='], 'hasQualified', _user$project$Bets_Types_Bracket$decodeHasQualified));
			case 'match':
				return A7(
					_elm_lang$core$Json_Decode$object6,
					_user$project$Bets_Types$MatchNode,
					A2(_elm_lang$core$Json_Decode_ops[':='], 'slot', _elm_lang$core$Json_Decode$string),
					A2(
						_elm_lang$core$Json_Decode$andThen,
						A2(
							_elm_lang$core$Json_Decode_ops[':='],
							'winner',
							_elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$string)),
						_user$project$Bets_Types_Bracket$decodeWinner),
					A2(
						_elm_lang$core$Json_Decode_ops[':='],
						'home',
						_elm_community$json_extra$Json_Decode_Extra$lazy(
							function (_p5) {
								return _user$project$Bets_Types_Bracket$decode;
							})),
					A2(
						_elm_lang$core$Json_Decode_ops[':='],
						'away',
						_elm_community$json_extra$Json_Decode_Extra$lazy(
							function (_p6) {
								return _user$project$Bets_Types_Bracket$decode;
							})),
					A2(_elm_lang$core$Json_Decode_ops[':='], 'round', _user$project$Bets_Types_Round$decode),
					A2(_elm_lang$core$Json_Decode_ops[':='], 'hasQualified', _user$project$Bets_Types_Bracket$decodeHasQualified));
			default:
				return _elm_lang$core$Json_Decode$fail(
					A2(_elm_lang$core$Basics_ops['++'], node, ' is not a recognized node for brackets'));
		}
	});
var _user$project$Bets_Types_Bracket$encodeWinner = function (winner) {
	var _p7 = winner;
	switch (_p7.ctor) {
		case 'HomeTeam':
			return _elm_lang$core$Json_Encode$string('HomeTeam');
		case 'AwayTeam':
			return _elm_lang$core$Json_Encode$string('AwayTeam');
		default:
			return _elm_lang$core$Json_Encode$null;
	}
};
var _user$project$Bets_Types_Bracket$encode = function (bracket) {
	var _p8 = bracket;
	if (_p8.ctor === 'TeamNode') {
		return _elm_lang$core$Json_Encode$object(
			_elm_lang$core$Native_List.fromArray(
				[
					{
					ctor: '_Tuple2',
					_0: 'node',
					_1: _elm_lang$core$Json_Encode$string('team')
				},
					{
					ctor: '_Tuple2',
					_0: 'slot',
					_1: _elm_lang$core$Json_Encode$string(_p8._0)
				},
					{
					ctor: '_Tuple2',
					_0: 'qualifier',
					_1: _user$project$Bets_Types_Team$encodeMaybe(_p8._1)
				},
					{
					ctor: '_Tuple2',
					_0: 'hasQualified',
					_1: _user$project$Bets_Types_Bracket$encodeHasQualified(_p8._2)
				}
				]));
	} else {
		return _elm_lang$core$Json_Encode$object(
			_elm_lang$core$Native_List.fromArray(
				[
					{
					ctor: '_Tuple2',
					_0: 'node',
					_1: _elm_lang$core$Json_Encode$string('match')
				},
					{
					ctor: '_Tuple2',
					_0: 'slot',
					_1: _elm_lang$core$Json_Encode$string(_p8._0)
				},
					{
					ctor: '_Tuple2',
					_0: 'winner',
					_1: _user$project$Bets_Types_Bracket$encodeWinner(_p8._1)
				},
					{
					ctor: '_Tuple2',
					_0: 'home',
					_1: _user$project$Bets_Types_Bracket$encode(_p8._2)
				},
					{
					ctor: '_Tuple2',
					_0: 'away',
					_1: _user$project$Bets_Types_Bracket$encode(_p8._3)
				},
					{
					ctor: '_Tuple2',
					_0: 'round',
					_1: _user$project$Bets_Types_Round$encode(_p8._4)
				},
					{
					ctor: '_Tuple2',
					_0: 'hasQualified',
					_1: _user$project$Bets_Types_Bracket$encodeHasQualified(_p8._5)
				}
				]));
	}
};
var _user$project$Bets_Types_Bracket$isComplete = function (brkt) {
	var _p9 = brkt;
	if (_p9.ctor === 'TeamNode') {
		return _elm_community$maybe_extra$Maybe_Extra$isJust(_p9._1);
	} else {
		var _p10 = _p9._1;
		if (_p10.ctor === 'None') {
			return false;
		} else {
			return _user$project$Bets_Types_Bracket$isComplete(_p9._2) && _user$project$Bets_Types_Bracket$isComplete(_p9._3);
		}
	}
};
var _user$project$Bets_Types_Bracket$get = F2(
	function (brkt, slot) {
		var _p11 = brkt;
		if (_p11.ctor === 'MatchNode') {
			return _elm_lang$core$Native_Utils.eq(_p11._0, slot) ? _elm_lang$core$Maybe$Just(brkt) : _elm_lang$core$Maybe$oneOf(
				_elm_lang$core$Native_List.fromArray(
					[
						A2(_user$project$Bets_Types_Bracket$get, _p11._3, slot),
						A2(_user$project$Bets_Types_Bracket$get, _p11._2, slot)
					]));
		} else {
			return _elm_lang$core$Native_Utils.eq(_p11._0, slot) ? _elm_lang$core$Maybe$Just(brkt) : _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Bets_Types_Bracket$qualifier = function (bracket) {
	qualifier:
	while (true) {
		var _p12 = bracket;
		if (_p12.ctor === 'MatchNode') {
			var _p13 = _p12._1;
			switch (_p13.ctor) {
				case 'HomeTeam':
					var _v12 = _p12._2;
					bracket = _v12;
					continue qualifier;
				case 'AwayTeam':
					var _v13 = _p12._3;
					bracket = _v13;
					continue qualifier;
				default:
					return _elm_lang$core$Maybe$Nothing;
			}
		} else {
			return _p12._1;
		}
	}
};
var _user$project$Bets_Types_Bracket$display = function (bracket) {
	return _user$project$Bets_Types_Team$mdisplay(
		_user$project$Bets_Types_Bracket$qualifier(bracket));
};
var _user$project$Bets_Types_Bracket$winner = function (bracket) {
	winner:
	while (true) {
		var _p14 = bracket;
		if (_p14.ctor === 'MatchNode') {
			var _p15 = _p14._1;
			switch (_p15.ctor) {
				case 'HomeTeam':
					var _v16 = _p14._2;
					bracket = _v16;
					continue winner;
				case 'AwayTeam':
					var _v17 = _p14._3;
					bracket = _v17;
					continue winner;
				default:
					return _elm_lang$core$Maybe$Nothing;
			}
		} else {
			return _p14._1;
		}
	}
};
var _user$project$Bets_Types_Bracket$reset = F2(
	function (newBracket, prevWinner) {
		var _p16 = newBracket;
		if (_p16.ctor === 'MatchNode') {
			var currentWinner = _user$project$Bets_Types_Bracket$winner(newBracket);
			var newWinner = _elm_lang$core$Native_Utils.eq(currentWinner, prevWinner) ? _p16._1 : _user$project$Bets_Types$None;
			return A6(_user$project$Bets_Types$MatchNode, _p16._0, newWinner, _p16._2, _p16._3, _p16._4, _p16._5);
		} else {
			return A3(_user$project$Bets_Types$TeamNode, _p16._0, _p16._1, _p16._2);
		}
	});
var _user$project$Bets_Types_Bracket$proceed = F3(
	function (bracket, slot, wnnr) {
		var _p17 = bracket;
		if (_p17.ctor === 'MatchNode') {
			var _p22 = _p17._0;
			var _p21 = _p17._4;
			var _p20 = _p17._2;
			var _p19 = _p17._5;
			var _p18 = _p17._3;
			if (_elm_lang$core$Native_Utils.eq(_p22, slot)) {
				return A6(_user$project$Bets_Types$MatchNode, slot, wnnr, _p20, _p18, _p21, _p19);
			} else {
				var currentWinner = _user$project$Bets_Types_Bracket$winner(bracket);
				var newRight = A3(_user$project$Bets_Types_Bracket$proceed, _p18, slot, wnnr);
				var newLeft = A3(_user$project$Bets_Types_Bracket$proceed, _p20, slot, wnnr);
				var newBracket = A6(_user$project$Bets_Types$MatchNode, _p22, _p17._1, newLeft, newRight, _p21, _p19);
				return A2(_user$project$Bets_Types_Bracket$reset, newBracket, currentWinner);
			}
		} else {
			return bracket;
		}
	});
var _user$project$Bets_Types_Bracket$proceedHome = F2(
	function (bracket, slot) {
		return A3(_user$project$Bets_Types_Bracket$proceed, bracket, slot, _user$project$Bets_Types$HomeTeam);
	});
var _user$project$Bets_Types_Bracket$proceedAway = F2(
	function (bracket, slot) {
		return A3(_user$project$Bets_Types_Bracket$proceed, bracket, slot, _user$project$Bets_Types$AwayTeam);
	});
var _user$project$Bets_Types_Bracket$set = F3(
	function (bracket, slot, qualifier) {
		var _p23 = bracket;
		if (_p23.ctor === 'MatchNode') {
			var currentWinner = _user$project$Bets_Types_Bracket$winner(bracket);
			var newAway = A3(_user$project$Bets_Types_Bracket$set, _p23._3, slot, qualifier);
			var newHome = A3(_user$project$Bets_Types_Bracket$set, _p23._2, slot, qualifier);
			var newBracket = A6(_user$project$Bets_Types$MatchNode, _p23._0, _p23._1, newHome, newAway, _p23._4, _p23._5);
			return A2(_user$project$Bets_Types_Bracket$reset, newBracket, currentWinner);
		} else {
			return _elm_lang$core$Native_Utils.eq(_p23._0, slot) ? A3(_user$project$Bets_Types$TeamNode, slot, qualifier, _p23._2) : bracket;
		}
	});
var _user$project$Bets_Types_Bracket$setBulk = F2(
	function (bracket, slots) {
		var set$ = F2(
			function (_p24, brkt) {
				var _p25 = _p24;
				return A3(_user$project$Bets_Types_Bracket$set, brkt, _p25._0, _p25._1);
			});
		return A3(_elm_lang$core$List$foldl, set$, bracket, slots);
	});
var _user$project$Bets_Types_Bracket$unsetQualifier = F2(
	function (bracket, qualifier) {
		var _p26 = bracket;
		if (_p26.ctor === 'MatchNode') {
			var currentWinner = _user$project$Bets_Types_Bracket$winner(bracket);
			var newAway = A2(_user$project$Bets_Types_Bracket$unsetQualifier, _p26._3, qualifier);
			var newHome = A2(_user$project$Bets_Types_Bracket$unsetQualifier, _p26._2, qualifier);
			var newBracket = A6(_user$project$Bets_Types$MatchNode, _p26._0, _p26._1, newHome, newAway, _p26._4, _p26._5);
			return A2(_user$project$Bets_Types_Bracket$reset, newBracket, currentWinner);
		} else {
			return _elm_lang$core$Native_Utils.eq(_p26._1, qualifier) ? A3(_user$project$Bets_Types$TeamNode, _p26._0, _elm_lang$core$Maybe$Nothing, _p26._2) : bracket;
		}
	});

var _user$project$Bets_Json_Encode$mIntEnc = function (mInt) {
	var _p0 = mInt;
	if (_p0.ctor === 'Just') {
		return _elm_lang$core$Json_Encode$int(_p0._0);
	} else {
		return _elm_lang$core$Json_Encode$null;
	}
};
var _user$project$Bets_Json_Encode$mStrEnc = function (mStr) {
	var _p1 = mStr;
	if (_p1.ctor === 'Just') {
		return _elm_lang$core$Json_Encode$string(_p1._0);
	} else {
		return _elm_lang$core$Json_Encode$null;
	}
};

var _user$project$Bets_Types_Score$encode = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Json_Encode$list(
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Bets_Json_Encode$mIntEnc(_p1._0),
				_user$project$Bets_Json_Encode$mIntEnc(_p1._1)
			]));
};
var _user$project$Bets_Types_Score$encodeMaybe = function (mScore) {
	var _p2 = mScore;
	if (_p2.ctor === 'Nothing') {
		return _elm_lang$core$Json_Encode$null;
	} else {
		return _user$project$Bets_Types_Score$encode(_p2._0);
	}
};
var _user$project$Bets_Types_Score$isComplete = function (mScore) {
	var _p3 = mScore;
	if ((((_p3.ctor === 'Just') && (_p3._0.ctor === '_Tuple2')) && (_p3._0._0.ctor === 'Just')) && (_p3._0._1.ctor === 'Just')) {
		return true;
	} else {
		return false;
	}
};
var _user$project$Bets_Types_Score$asString = function (_p4) {
	var _p5 = _p4;
	var str = function (mInt) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'_',
			A2(_elm_lang$core$Maybe$map, _elm_lang$core$Basics$toString, mInt));
	};
	return A3(
		_elm_lang$core$List$foldr,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		'',
		_elm_lang$core$Native_List.fromArray(
			[
				str(_p5._0),
				'-',
				str(_p5._1)
			]));
};
var _user$project$Bets_Types_Score$merge = F2(
	function (newScore, oldScore) {
		var _p6 = oldScore;
		var oldHome = _p6._0;
		var oldAway = _p6._1;
		var _p7 = newScore;
		var newHome = _p7._0;
		var newAway = _p7._1;
		var home = function () {
			var _p8 = newHome;
			if (_p8.ctor === 'Just') {
				return newHome;
			} else {
				return oldHome;
			}
		}();
		var away = function () {
			var _p9 = newAway;
			if (_p9.ctor === 'Just') {
				return newAway;
			} else {
				return oldHome;
			}
		}();
		var score = {ctor: '_Tuple2', _0: home, _1: away};
		return score;
	});
var _user$project$Bets_Types_Score$score = F2(
	function (h, a) {
		return {ctor: '_Tuple2', _0: h, _1: a};
	});
var _user$project$Bets_Types_Score$decode = A3(
	_elm_lang$core$Json_Decode$tuple2,
	_user$project$Bets_Types_Score$score,
	_elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$int),
	_elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$int));
var _user$project$Bets_Types_Score$awayScore = function (_p10) {
	var _p11 = _p10;
	return _p11._1;
};
var _user$project$Bets_Types_Score$homeScore = function (_p12) {
	var _p13 = _p12;
	return _p13._0;
};

var _user$project$Bets_Types_Group$toGroup = function (s) {
	var _p0 = s;
	switch (_p0) {
		case 'A':
			return _user$project$Bets_Types$A;
		case 'B':
			return _user$project$Bets_Types$B;
		case 'C':
			return _user$project$Bets_Types$C;
		case 'D':
			return _user$project$Bets_Types$D;
		case 'E':
			return _user$project$Bets_Types$E;
		default:
			return _user$project$Bets_Types$F;
	}
};
var _user$project$Bets_Types_Group$decode = A2(_elm_lang$core$Json_Decode$map, _user$project$Bets_Types_Group$toGroup, _elm_lang$core$Json_Decode$string);
var _user$project$Bets_Types_Group$toString = function (grp) {
	var _p1 = grp;
	switch (_p1.ctor) {
		case 'A':
			return 'A';
		case 'B':
			return 'B';
		case 'C':
			return 'C';
		case 'D':
			return 'D';
		case 'E':
			return 'E';
		default:
			return 'F';
	}
};
var _user$project$Bets_Types_Group$encode = function (grp) {
	return _elm_lang$core$Json_Encode$string(
		_user$project$Bets_Types_Group$toString(grp));
};

var _user$project$Bets_Types_BestThirds$encodeBestThird = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Json_Encode$list(
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Bets_Types_Group$encode(_p1._0),
				_user$project$Bets_Types_Team$encode(_p1._1),
				_elm_lang$core$Json_Encode$string(_p1._2)
			]));
};
var _user$project$Bets_Types_BestThirds$encode = function (bestThirds) {
	return _elm_lang$core$Json_Encode$list(
		A2(_elm_lang$core$List$map, _user$project$Bets_Types_BestThirds$encodeBestThird, bestThirds));
};
var _user$project$Bets_Types_BestThirds$isComplete = function (bts) {
	var numberOfTeams = _elm_lang$core$Set$size(
		_elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					return _p3._1.teamID;
				},
				bts)));
	var numberOfGroups = _elm_lang$core$Set$size(
		_elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				function (_p4) {
					var _p5 = _p4;
					return _user$project$Bets_Types_Group$toString(_p5._0);
				},
				bts)));
	var numberOfBts = _elm_lang$core$List$length(bts);
	return _elm_lang$core$Native_Utils.eq(numberOfBts, 4) && (_elm_lang$core$Native_Utils.eq(numberOfTeams, 4) && _elm_lang$core$Native_Utils.eq(numberOfGroups, 4));
};
var _user$project$Bets_Types_BestThirds$toBestThird = F3(
	function (v0, v1, v2) {
		return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
	});
var _user$project$Bets_Types_BestThirds$decodeBestThird = A4(_elm_lang$core$Json_Decode$tuple3, _user$project$Bets_Types_BestThirds$toBestThird, _user$project$Bets_Types_Group$decode, _user$project$Bets_Types_Team$decode, _elm_lang$core$Json_Decode$string);
var _user$project$Bets_Types_BestThirds$decode = _elm_lang$core$Json_Decode$list(_user$project$Bets_Types_BestThirds$decodeBestThird);
var _user$project$Bets_Types_BestThirds$extractChoices = function (bts) {
	return A2(
		_elm_lang$core$List$map,
		function (_p6) {
			var _p7 = _p6;
			return {ctor: '_Tuple2', _0: _p7._0, _1: _p7._1};
		},
		bts);
};
var _user$project$Bets_Types_BestThirds$gcompare = F2(
	function (g1, g2) {
		return A2(
			_elm_lang$core$Basics$compare,
			_elm_lang$core$Basics$toString(g1),
			_elm_lang$core$Basics$toString(g2));
	});
var _user$project$Bets_Types_BestThirds$order = function (groups) {
	var _p8 = groups;
	switch (_p8) {
		case 'ABCD':
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'T1', _1: _user$project$Bets_Types$C},
					{ctor: '_Tuple2', _0: 'T2', _1: _user$project$Bets_Types$D},
					{ctor: '_Tuple2', _0: 'T3', _1: _user$project$Bets_Types$A},
					{ctor: '_Tuple2', _0: 'T4', _1: _user$project$Bets_Types$B}
				]);
		case 'ABCE':
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'T1', _1: _user$project$Bets_Types$C},
					{ctor: '_Tuple2', _0: 'T2', _1: _user$project$Bets_Types$A},
					{ctor: '_Tuple2', _0: 'T3', _1: _user$project$Bets_Types$B},
					{ctor: '_Tuple2', _0: 'T4', _1: _user$project$Bets_Types$E}
				]);
		case 'ABCF':
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'T1', _1: _user$project$Bets_Types$C},
					{ctor: '_Tuple2', _0: 'T2', _1: _user$project$Bets_Types$A},
					{ctor: '_Tuple2', _0: 'T3', _1: _user$project$Bets_Types$B},
					{ctor: '_Tuple2', _0: 'T4', _1: _user$project$Bets_Types$F}
				]);
		case 'ABDE':
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'T1', _1: _user$project$Bets_Types$D},
					{ctor: '_Tuple2', _0: 'T2', _1: _user$project$Bets_Types$A},
					{ctor: '_Tuple2', _0: 'T3', _1: _user$project$Bets_Types$B},
					{ctor: '_Tuple2', _0: 'T4', _1: _user$project$Bets_Types$E}
				]);
		case 'ABDF':
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'T1', _1: _user$project$Bets_Types$D},
					{ctor: '_Tuple2', _0: 'T2', _1: _user$project$Bets_Types$A},
					{ctor: '_Tuple2', _0: 'T3', _1: _user$project$Bets_Types$B},
					{ctor: '_Tuple2', _0: 'T4', _1: _user$project$Bets_Types$F}
				]);
		case 'ABEF':
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'T1', _1: _user$project$Bets_Types$E},
					{ctor: '_Tuple2', _0: 'T2', _1: _user$project$Bets_Types$A},
					{ctor: '_Tuple2', _0: 'T3', _1: _user$project$Bets_Types$B},
					{ctor: '_Tuple2', _0: 'T4', _1: _user$project$Bets_Types$F}
				]);
		case 'ACDE':
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'T1', _1: _user$project$Bets_Types$C},
					{ctor: '_Tuple2', _0: 'T2', _1: _user$project$Bets_Types$D},
					{ctor: '_Tuple2', _0: 'T3', _1: _user$project$Bets_Types$A},
					{ctor: '_Tuple2', _0: 'T4', _1: _user$project$Bets_Types$E}
				]);
		case 'ACDF':
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'T1', _1: _user$project$Bets_Types$C},
					{ctor: '_Tuple2', _0: 'T2', _1: _user$project$Bets_Types$D},
					{ctor: '_Tuple2', _0: 'T3', _1: _user$project$Bets_Types$A},
					{ctor: '_Tuple2', _0: 'T4', _1: _user$project$Bets_Types$F}
				]);
		case 'ACEF':
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'T1', _1: _user$project$Bets_Types$C},
					{ctor: '_Tuple2', _0: 'T2', _1: _user$project$Bets_Types$A},
					{ctor: '_Tuple2', _0: 'T3', _1: _user$project$Bets_Types$F},
					{ctor: '_Tuple2', _0: 'T4', _1: _user$project$Bets_Types$E}
				]);
		case 'ADEF':
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'T1', _1: _user$project$Bets_Types$D},
					{ctor: '_Tuple2', _0: 'T2', _1: _user$project$Bets_Types$A},
					{ctor: '_Tuple2', _0: 'T3', _1: _user$project$Bets_Types$F},
					{ctor: '_Tuple2', _0: 'T4', _1: _user$project$Bets_Types$E}
				]);
		case 'BCDE':
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'T1', _1: _user$project$Bets_Types$C},
					{ctor: '_Tuple2', _0: 'T2', _1: _user$project$Bets_Types$D},
					{ctor: '_Tuple2', _0: 'T3', _1: _user$project$Bets_Types$B},
					{ctor: '_Tuple2', _0: 'T4', _1: _user$project$Bets_Types$E}
				]);
		case 'BCDF':
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'T1', _1: _user$project$Bets_Types$C},
					{ctor: '_Tuple2', _0: 'T2', _1: _user$project$Bets_Types$D},
					{ctor: '_Tuple2', _0: 'T3', _1: _user$project$Bets_Types$B},
					{ctor: '_Tuple2', _0: 'T4', _1: _user$project$Bets_Types$F}
				]);
		case 'BCEF':
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'T1', _1: _user$project$Bets_Types$E},
					{ctor: '_Tuple2', _0: 'T2', _1: _user$project$Bets_Types$C},
					{ctor: '_Tuple2', _0: 'T3', _1: _user$project$Bets_Types$B},
					{ctor: '_Tuple2', _0: 'T4', _1: _user$project$Bets_Types$F}
				]);
		case 'BDEF':
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'T1', _1: _user$project$Bets_Types$E},
					{ctor: '_Tuple2', _0: 'T2', _1: _user$project$Bets_Types$D},
					{ctor: '_Tuple2', _0: 'T3', _1: _user$project$Bets_Types$B},
					{ctor: '_Tuple2', _0: 'T4', _1: _user$project$Bets_Types$F}
				]);
		case 'CDEF':
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'T1', _1: _user$project$Bets_Types$C},
					{ctor: '_Tuple2', _0: 'T2', _1: _user$project$Bets_Types$D},
					{ctor: '_Tuple2', _0: 'T3', _1: _user$project$Bets_Types$F},
					{ctor: '_Tuple2', _0: 'T4', _1: _user$project$Bets_Types$E}
				]);
		default:
			return _elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'T1', _1: _user$project$Bets_Types$C},
					{ctor: '_Tuple2', _0: 'T2', _1: _user$project$Bets_Types$D},
					{ctor: '_Tuple2', _0: 'T3', _1: _user$project$Bets_Types$A},
					{ctor: '_Tuple2', _0: 'T4', _1: _user$project$Bets_Types$B}
				]);
	}
};
var _user$project$Bets_Types_BestThirds$reorderChoices = function (choices) {
	var choiceCompare = F2(
		function (_p10, _p9) {
			var _p11 = _p10;
			var _p12 = _p9;
			return A2(_user$project$Bets_Types_BestThirds$gcompare, _p11._0, _p12._0);
		});
	var sChoices = A2(_elm_lang$core$List$sortWith, choiceCompare, choices);
	var groupsString = _elm_lang$core$String$concat(
		A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Basics$toString,
			A2(_elm_lang$core$List$map, _elm_lang$core$Basics$fst, sChoices)));
	var tupleCompare = F2(
		function (_p14, _p13) {
			var _p15 = _p14;
			var _p16 = _p13;
			return A2(_user$project$Bets_Types_BestThirds$gcompare, _p15._1, _p16._1);
		});
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		sChoices,
		A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Basics$fst,
			A2(
				_elm_lang$core$List$sortWith,
				tupleCompare,
				_user$project$Bets_Types_BestThirds$order(groupsString))));
};
var _user$project$Bets_Types_BestThirds$isGroup = F2(
	function (_p18, _p17) {
		var _p19 = _p18;
		var _p20 = _p17;
		return _elm_lang$core$Native_Utils.eq(_p19._0, _p20._0);
	});
var _user$project$Bets_Types_BestThirds$updateChoice = F2(
	function (choice, choices) {
		var _p21 = choices;
		if (_p21.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p23 = _p21._1;
			var _p22 = _p21._0;
			return A2(_user$project$Bets_Types_BestThirds$isGroup, choice, _p22) ? A2(_elm_lang$core$List_ops['::'], choice, _p23) : A2(
				_elm_lang$core$List_ops['::'],
				_p22,
				A2(_user$project$Bets_Types_BestThirds$updateChoice, choice, _p23));
		}
	});
var _user$project$Bets_Types_BestThirds$isChoice = F2(
	function (_p25, _p24) {
		var _p26 = _p25;
		var _p27 = _p24;
		return _elm_lang$core$Native_Utils.eq(_p26._0, _p27._0) && _elm_lang$core$Native_Utils.eq(_p26._1, _p27._1);
	});
var _user$project$Bets_Types_BestThirds$resetChoice = F2(
	function (choice, choices) {
		var _p28 = choices;
		if (_p28.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p30 = _p28._1;
			var _p29 = _p28._0;
			return A2(_user$project$Bets_Types_BestThirds$isChoice, choice, _p29) ? _p30 : A2(
				_elm_lang$core$List_ops['::'],
				_p29,
				A2(_user$project$Bets_Types_BestThirds$resetChoice, choice, _p30));
		}
	});
var _user$project$Bets_Types_BestThirds$newChoices = F5(
	function (mToggleOff, mGroupToggle, mFreeSlot, choice, currentChoices) {
		var _p31 = {ctor: '_Tuple3', _0: mToggleOff, _1: mGroupToggle, _2: mFreeSlot};
		_v15_3:
		do {
			if (_p31.ctor === '_Tuple3') {
				if (_p31._0 === true) {
					return A2(_user$project$Bets_Types_BestThirds$resetChoice, choice, currentChoices);
				} else {
					if (_p31._1 === true) {
						return A2(_user$project$Bets_Types_BestThirds$updateChoice, choice, currentChoices);
					} else {
						if (_p31._2 === true) {
							return A2(_elm_lang$core$List_ops['::'], choice, currentChoices);
						} else {
							break _v15_3;
						}
					}
				}
			} else {
				break _v15_3;
			}
		} while(false);
		return currentChoices;
	});
var _user$project$Bets_Types_BestThirds$toBestThirds = function (assignedChoices) {
	var toBestThird = function (_p32) {
		var _p33 = _p32;
		return {ctor: '_Tuple3', _0: _p33._0._0, _1: _p33._0._1, _2: _p33._1};
	};
	return A2(_elm_lang$core$List$map, toBestThird, assignedChoices);
};
var _user$project$Bets_Types_BestThirds$teamsToReset = F2(
	function (oldAssignments, newAssignments) {
		teamsToReset:
		while (true) {
			var thrd = function (_p34) {
				var _p35 = _p34;
				return _p35._2;
			};
			var sortedOld = A2(_elm_lang$core$List$sortBy, thrd, oldAssignments);
			var sortedNew = A2(_elm_lang$core$List$sortBy, thrd, newAssignments);
			var _p36 = {ctor: '_Tuple2', _0: sortedOld, _1: sortedNew};
			if (_p36._0.ctor === '[]') {
				if (_p36._1.ctor === '[]') {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				} else {
					return A2(
						_elm_lang$core$List_ops['::'],
						_p36._1._0._1,
						A2(
							_user$project$Bets_Types_BestThirds$teamsToReset,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_p36._1._1));
				}
			} else {
				if (_p36._1.ctor === '[]') {
					return A2(
						_elm_lang$core$List_ops['::'],
						_p36._0._0._1,
						A2(
							_user$project$Bets_Types_BestThirds$teamsToReset,
							_elm_lang$core$Native_List.fromArray(
								[]),
							_p36._0._1));
				} else {
					var _p41 = _p36._1._0._1;
					var _p40 = _p36._0._0._1;
					var _p39 = _p36._0._1;
					var _p38 = _p36._1._1;
					var _p37 = A2(_elm_lang$core$Basics$compare, _p36._0._0._2, _p36._1._0._2);
					switch (_p37.ctor) {
						case 'GT':
							return A2(
								_elm_lang$core$List_ops['::'],
								_p41,
								A2(_user$project$Bets_Types_BestThirds$teamsToReset, sortedOld, _p38));
						case 'LT':
							return A2(
								_elm_lang$core$List_ops['::'],
								_p40,
								A2(_user$project$Bets_Types_BestThirds$teamsToReset, _p39, sortedNew));
						default:
							if (_elm_lang$core$Native_Utils.eq(_p40, _p41)) {
								var _v20 = _p39,
									_v21 = _p38;
								oldAssignments = _v20;
								newAssignments = _v21;
								continue teamsToReset;
							} else {
								return A2(
									_elm_lang$core$List_ops['::'],
									_p40,
									A2(
										_elm_lang$core$List_ops['::'],
										_p41,
										A2(_user$project$Bets_Types_BestThirds$teamsToReset, _p39, _p38)));
							}
					}
				}
			}
		}
	});
var _user$project$Bets_Types_BestThirds$updateChoices = F3(
	function (group, team, currentBestThirds) {
		var currentChoices = _user$project$Bets_Types_BestThirds$extractChoices(currentBestThirds);
		var bFreeSlot = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(currentChoices),
			4) < 0;
		var choice = {ctor: '_Tuple2', _0: group, _1: team};
		var bToggleOff = A2(
			_elm_lang$core$List$any,
			_user$project$Bets_Types_BestThirds$isChoice(choice),
			currentChoices);
		var bGroupToggle = A2(
			_elm_lang$core$List$any,
			_user$project$Bets_Types_BestThirds$isGroup(choice),
			currentChoices);
		var tempChoices = A5(_user$project$Bets_Types_BestThirds$newChoices, bToggleOff, bGroupToggle, bFreeSlot, choice, currentChoices);
		return _user$project$Bets_Types_BestThirds$toBestThirds(
			_user$project$Bets_Types_BestThirds$reorderChoices(tempChoices));
	});

var _user$project$Bets_Types_Pos$toPos = function (s) {
	var _p0 = s;
	switch (_p0) {
		case 'First':
			return _user$project$Bets_Types$First;
		case 'Second':
			return _user$project$Bets_Types$Second;
		case 'Third':
			return _user$project$Bets_Types$Third;
		case 'TopThird':
			return _user$project$Bets_Types$TopThird;
		default:
			return _user$project$Bets_Types$Free;
	}
};
var _user$project$Bets_Types_Pos$decode = A2(_elm_lang$core$Json_Decode$map, _user$project$Bets_Types_Pos$toPos, _elm_lang$core$Json_Decode$string);
var _user$project$Bets_Types_Pos$toString = function (pos) {
	var _p1 = pos;
	switch (_p1.ctor) {
		case 'First':
			return 'First';
		case 'Second':
			return 'Second';
		case 'Third':
			return 'Third';
		case 'TopThird':
			return 'TopThird';
		default:
			return 'Free';
	}
};
var _user$project$Bets_Types_Pos$encode = function (pos) {
	return _elm_lang$core$Json_Encode$string(
		_user$project$Bets_Types_Pos$toString(pos));
};

var _user$project$Bets_Types_Participant$encode = function (p) {
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 'name',
				_1: _user$project$Bets_Json_Encode$mStrEnc(p.name)
			},
				{
				ctor: '_Tuple2',
				_0: 'address',
				_1: _user$project$Bets_Json_Encode$mStrEnc(p.address)
			},
				{
				ctor: '_Tuple2',
				_0: 'residence',
				_1: _user$project$Bets_Json_Encode$mStrEnc(p.residence)
			},
				{
				ctor: '_Tuple2',
				_0: 'phone',
				_1: _user$project$Bets_Json_Encode$mStrEnc(p.phone)
			},
				{
				ctor: '_Tuple2',
				_0: 'email',
				_1: _user$project$Bets_Json_Encode$mStrEnc(p.email)
			},
				{
				ctor: '_Tuple2',
				_0: 'howyouknowus',
				_1: _user$project$Bets_Json_Encode$mStrEnc(p.howyouknowus)
			}
			]));
};
var _user$project$Bets_Types_Participant$decode = A7(
	_elm_lang$core$Json_Decode$object6,
	_user$project$Bets_Types$Participant,
	_elm_lang$core$Json_Decode$maybe(
		A2(_elm_lang$core$Json_Decode_ops[':='], 'name', _elm_lang$core$Json_Decode$string)),
	_elm_lang$core$Json_Decode$maybe(
		A2(_elm_lang$core$Json_Decode_ops[':='], 'address', _elm_lang$core$Json_Decode$string)),
	_elm_lang$core$Json_Decode$maybe(
		A2(_elm_lang$core$Json_Decode_ops[':='], 'residence', _elm_lang$core$Json_Decode$string)),
	_elm_lang$core$Json_Decode$maybe(
		A2(_elm_lang$core$Json_Decode_ops[':='], 'phone', _elm_lang$core$Json_Decode$string)),
	_elm_lang$core$Json_Decode$maybe(
		A2(_elm_lang$core$Json_Decode_ops[':='], 'email', _elm_lang$core$Json_Decode$string)),
	_elm_lang$core$Json_Decode$maybe(
		A2(_elm_lang$core$Json_Decode_ops[':='], 'howyouknowus', _elm_lang$core$Json_Decode$string)));
var _user$project$Bets_Types_Participant$isComplete = function (participant) {
	return _elm_community$maybe_extra$Maybe_Extra$isJust(
		_elm_community$maybe_extra$Maybe_Extra$combine(
			_elm_lang$core$Native_List.fromArray(
				[participant.name, participant.address, participant.phone, participant.email, participant.howyouknowus])));
};
var _user$project$Bets_Types_Participant$setHowyouknowus = F2(
	function (participant, howyouknowus) {
		return _elm_lang$core$Native_Utils.update(
			participant,
			{
				howyouknowus: _elm_lang$core$Maybe$Just(howyouknowus)
			});
	});
var _user$project$Bets_Types_Participant$setEmail = F2(
	function (participant, email) {
		return _elm_lang$core$Native_Utils.update(
			participant,
			{
				email: _elm_lang$core$Maybe$Just(email)
			});
	});
var _user$project$Bets_Types_Participant$setPhoneNumber = F2(
	function (participant, phone) {
		return _elm_lang$core$Native_Utils.update(
			participant,
			{
				phone: _elm_lang$core$Maybe$Just(phone)
			});
	});
var _user$project$Bets_Types_Participant$setAddress = F2(
	function (participant, address) {
		return _elm_lang$core$Native_Utils.update(
			participant,
			{
				address: _elm_lang$core$Maybe$Just(address)
			});
	});
var _user$project$Bets_Types_Participant$setName = F2(
	function (participant, name) {
		return _elm_lang$core$Native_Utils.update(
			participant,
			{
				name: _elm_lang$core$Maybe$Just(name)
			});
	});
var _user$project$Bets_Types_Participant$init = A6(_user$project$Bets_Types$Participant, _elm_lang$core$Maybe$Nothing, _elm_lang$core$Maybe$Nothing, _elm_lang$core$Maybe$Nothing, _elm_lang$core$Maybe$Nothing, _elm_lang$core$Maybe$Nothing, _elm_lang$core$Maybe$Nothing);

var _user$project$Bets_Types_Topscorer$encode = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 'name',
				_1: _user$project$Bets_Json_Encode$mStrEnc(_p1._0)
			},
				{
				ctor: '_Tuple2',
				_0: 'team',
				_1: _user$project$Bets_Types_Team$encodeMaybe(_p1._1)
			}
			]));
};
var _user$project$Bets_Types_Topscorer$isComplete = function (_p2) {
	var _p3 = _p2;
	return _elm_community$maybe_extra$Maybe_Extra$isJust(_p3._0) && _elm_community$maybe_extra$Maybe_Extra$isJust(_p3._1);
};
var _user$project$Bets_Types_Topscorer$topscorer = F2(
	function (mName, mTeam) {
		return {ctor: '_Tuple2', _0: mName, _1: mTeam};
	});
var _user$project$Bets_Types_Topscorer$setPlayer = F2(
	function (_p4, player) {
		var _p5 = _p4;
		var _p7 = _p5._1;
		var _p6 = _p5._0;
		if (_p6.ctor === 'Nothing') {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Maybe$Just(player),
				_1: _p7
			};
		} else {
			return _elm_lang$core$Native_Utils.eq(_p6._0, player) ? {ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: _p7} : {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Maybe$Just(player),
				_1: _p7
			};
		}
	});
var _user$project$Bets_Types_Topscorer$getPlayer = function (ts) {
	return _elm_lang$core$Basics$fst(ts);
};
var _user$project$Bets_Types_Topscorer$getTeam = function (ts) {
	return _elm_lang$core$Basics$snd(ts);
};
var _user$project$Bets_Types_Topscorer$setTeam = F2(
	function (ts, team) {
		var _p8 = _user$project$Bets_Types_Topscorer$getTeam(ts);
		if (_p8.ctor === 'Nothing') {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Maybe$Nothing,
				_1: _elm_lang$core$Maybe$Just(team)
			};
		} else {
			return _elm_lang$core$Native_Utils.eq(_p8._0, team) ? {ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing} : {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Maybe$Nothing,
				_1: _elm_lang$core$Maybe$Just(team)
			};
		}
	});
var _user$project$Bets_Types_Topscorer$TopscorerObject = F2(
	function (a, b) {
		return {name: a, team: b};
	});
var _user$project$Bets_Types_Topscorer$decodeTSObj = A3(
	_elm_lang$core$Json_Decode$object2,
	_user$project$Bets_Types_Topscorer$TopscorerObject,
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'name',
		_elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$string)),
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'team',
		_elm_lang$core$Json_Decode$maybe(_user$project$Bets_Types_Team$decode)));
var _user$project$Bets_Types_Topscorer$decode = A2(
	_elm_lang$core$Json_Decode$map,
	function (x) {
		return A2(_user$project$Bets_Types_Topscorer$topscorer, x.name, x.team);
	},
	_user$project$Bets_Types_Topscorer$decodeTSObj);

var _user$project$Bets_Types_Points$decode = _elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$int);
var _user$project$Bets_Types_Points$encode = function (points) {
	return _user$project$Bets_Json_Encode$mIntEnc(points);
};

var _user$project$Bets_Types_Answer$decodeAnswerTDetails = function (s) {
	var _p0 = s;
	switch (_p0) {
		case 'answer-group-match':
			return A5(
				_elm_lang$core$Json_Decode$object4,
				_user$project$Bets_Types$AnswerGroupMatch,
				A2(_elm_lang$core$Json_Decode_ops[':='], 'group', _user$project$Bets_Types_Group$decode),
				A2(_elm_lang$core$Json_Decode_ops[':='], 'match', _user$project$Bets_Types_Match$decode),
				A2(
					_elm_lang$core$Json_Decode_ops[':='],
					'score',
					_elm_lang$core$Json_Decode$maybe(_user$project$Bets_Types_Score$decode)),
				A2(_elm_lang$core$Json_Decode_ops[':='], 'points', _user$project$Bets_Types_Points$decode));
		case 'answer-group-position':
			return A5(
				_elm_lang$core$Json_Decode$object4,
				_user$project$Bets_Types$AnswerGroupPosition,
				A2(_elm_lang$core$Json_Decode_ops[':='], 'group', _user$project$Bets_Types_Group$decode),
				A2(_elm_lang$core$Json_Decode_ops[':='], 'pos', _user$project$Bets_Types_Pos$decode),
				A2(_elm_lang$core$Json_Decode_ops[':='], 'draw', _user$project$Bets_Types_Draw$decode),
				A2(_elm_lang$core$Json_Decode_ops[':='], 'points', _user$project$Bets_Types_Points$decode));
		case 'answer-group-best-thirds':
			return A3(
				_elm_lang$core$Json_Decode$object2,
				_user$project$Bets_Types$AnswerGroupBestThirds,
				A2(_elm_lang$core$Json_Decode_ops[':='], 'best-thirds', _user$project$Bets_Types_BestThirds$decode),
				A2(_elm_lang$core$Json_Decode_ops[':='], 'points', _user$project$Bets_Types_Points$decode));
		case 'answer-match-winner':
			return A6(
				_elm_lang$core$Json_Decode$object5,
				_user$project$Bets_Types$AnswerMatchWinner,
				A2(_elm_lang$core$Json_Decode_ops[':='], 'round', _user$project$Bets_Types_Round$decode),
				A2(_elm_lang$core$Json_Decode_ops[':='], 'match', _user$project$Bets_Types_Match$decode),
				A2(
					_elm_lang$core$Json_Decode_ops[':='],
					'next-id',
					_elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$string)),
				A2(
					_elm_lang$core$Json_Decode_ops[':='],
					'team',
					_elm_lang$core$Json_Decode$maybe(_user$project$Bets_Types_Team$decode)),
				A2(_elm_lang$core$Json_Decode_ops[':='], 'points', _user$project$Bets_Types_Points$decode));
		case 'answer-bracket':
			return A3(
				_elm_lang$core$Json_Decode$object2,
				_user$project$Bets_Types$AnswerBracket,
				A2(_elm_lang$core$Json_Decode_ops[':='], 'bracket', _user$project$Bets_Types_Bracket$decode),
				A2(_elm_lang$core$Json_Decode_ops[':='], 'points', _user$project$Bets_Types_Points$decode));
		case 'answer-topscorer':
			return A3(
				_elm_lang$core$Json_Decode$object2,
				_user$project$Bets_Types$AnswerTopscorer,
				A2(_elm_lang$core$Json_Decode_ops[':='], 'topscorer', _user$project$Bets_Types_Topscorer$decode),
				A2(_elm_lang$core$Json_Decode_ops[':='], 'points', _user$project$Bets_Types_Points$decode));
		case 'answer-participant':
			return A2(
				_elm_lang$core$Json_Decode$object1,
				_user$project$Bets_Types$AnswerParticipant,
				A2(_elm_lang$core$Json_Decode_ops[':='], 'participant', _user$project$Bets_Types_Participant$decode));
		default:
			return _elm_lang$core$Json_Decode$fail('unknown type of question');
	}
};
var _user$project$Bets_Types_Answer$decode = A2(
	_elm_lang$core$Json_Decode$andThen,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'answerType', _elm_lang$core$Json_Decode$string),
	_user$project$Bets_Types_Answer$decodeAnswerTDetails);
var _user$project$Bets_Types_Answer$encodeAnswerT = function (answerT) {
	var _p1 = answerT;
	switch (_p1.ctor) {
		case 'AnswerGroupMatch':
			return _elm_lang$core$Json_Encode$object(
				_elm_lang$core$Native_List.fromArray(
					[
						{
						ctor: '_Tuple2',
						_0: 'answerType',
						_1: _elm_lang$core$Json_Encode$string('answer-group-match')
					},
						{
						ctor: '_Tuple2',
						_0: 'group',
						_1: _user$project$Bets_Types_Group$encode(_p1._0)
					},
						{
						ctor: '_Tuple2',
						_0: 'match',
						_1: _user$project$Bets_Types_Match$encode(_p1._1)
					},
						{
						ctor: '_Tuple2',
						_0: 'score',
						_1: _user$project$Bets_Types_Score$encodeMaybe(_p1._2)
					},
						{
						ctor: '_Tuple2',
						_0: 'points',
						_1: _user$project$Bets_Types_Points$encode(_p1._3)
					}
					]));
		case 'AnswerGroupPosition':
			return _elm_lang$core$Json_Encode$object(
				_elm_lang$core$Native_List.fromArray(
					[
						{
						ctor: '_Tuple2',
						_0: 'answerType',
						_1: _elm_lang$core$Json_Encode$string('answer-group-position')
					},
						{
						ctor: '_Tuple2',
						_0: 'group',
						_1: _user$project$Bets_Types_Group$encode(_p1._0)
					},
						{
						ctor: '_Tuple2',
						_0: 'pos',
						_1: _user$project$Bets_Types_Pos$encode(_p1._1)
					},
						{
						ctor: '_Tuple2',
						_0: 'draw',
						_1: _user$project$Bets_Types_Draw$encode(_p1._2)
					},
						{
						ctor: '_Tuple2',
						_0: 'points',
						_1: _user$project$Bets_Types_Points$encode(_p1._3)
					}
					]));
		case 'AnswerGroupBestThirds':
			return _elm_lang$core$Json_Encode$object(
				_elm_lang$core$Native_List.fromArray(
					[
						{
						ctor: '_Tuple2',
						_0: 'answerType',
						_1: _elm_lang$core$Json_Encode$string('answer-group-best-thirds')
					},
						{
						ctor: '_Tuple2',
						_0: 'best-thirds',
						_1: _user$project$Bets_Types_BestThirds$encode(_p1._0)
					},
						{
						ctor: '_Tuple2',
						_0: 'points',
						_1: _user$project$Bets_Types_Points$encode(_p1._1)
					}
					]));
		case 'AnswerMatchWinner':
			return _elm_lang$core$Json_Encode$object(
				_elm_lang$core$Native_List.fromArray(
					[
						{
						ctor: '_Tuple2',
						_0: 'answerType',
						_1: _elm_lang$core$Json_Encode$string('answer-match-winner')
					},
						{
						ctor: '_Tuple2',
						_0: 'round',
						_1: _user$project$Bets_Types_Round$encode(_p1._0)
					},
						{
						ctor: '_Tuple2',
						_0: 'match',
						_1: _user$project$Bets_Types_Match$encode(_p1._1)
					},
						{
						ctor: '_Tuple2',
						_0: 'next-id',
						_1: _user$project$Bets_Json_Encode$mStrEnc(_p1._2)
					},
						{
						ctor: '_Tuple2',
						_0: 'team',
						_1: _user$project$Bets_Types_Team$encodeMaybe(_p1._3)
					},
						{
						ctor: '_Tuple2',
						_0: 'points',
						_1: _user$project$Bets_Types_Points$encode(_p1._4)
					}
					]));
		case 'AnswerBracket':
			return _elm_lang$core$Json_Encode$object(
				_elm_lang$core$Native_List.fromArray(
					[
						{
						ctor: '_Tuple2',
						_0: 'answerType',
						_1: _elm_lang$core$Json_Encode$string('answer-bracket')
					},
						{
						ctor: '_Tuple2',
						_0: 'bracket',
						_1: _user$project$Bets_Types_Bracket$encode(_p1._0)
					},
						{
						ctor: '_Tuple2',
						_0: 'points',
						_1: _user$project$Bets_Types_Points$encode(_p1._1)
					}
					]));
		case 'AnswerTopscorer':
			return _elm_lang$core$Json_Encode$object(
				_elm_lang$core$Native_List.fromArray(
					[
						{
						ctor: '_Tuple2',
						_0: 'answerType',
						_1: _elm_lang$core$Json_Encode$string('answer-topscorer')
					},
						{
						ctor: '_Tuple2',
						_0: 'topscorer',
						_1: _user$project$Bets_Types_Topscorer$encode(_p1._0)
					},
						{
						ctor: '_Tuple2',
						_0: 'points',
						_1: _user$project$Bets_Types_Points$encode(_p1._1)
					}
					]));
		default:
			return _elm_lang$core$Json_Encode$object(
				_elm_lang$core$Native_List.fromArray(
					[
						{
						ctor: '_Tuple2',
						_0: 'answerType',
						_1: _elm_lang$core$Json_Encode$string('answer-participant')
					},
						{
						ctor: '_Tuple2',
						_0: 'participant',
						_1: _user$project$Bets_Types_Participant$encode(_p1._0)
					}
					]));
	}
};
var _user$project$Bets_Types_Answer$encode = function (_p2) {
	var _p3 = _p2;
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 'id',
				_1: _elm_lang$core$Json_Encode$string(_p3._0)
			},
				{
				ctor: '_Tuple2',
				_0: 'answer',
				_1: _user$project$Bets_Types_Answer$encodeAnswerT(_p3._1)
			}
			]));
};
var _user$project$Bets_Types_Answer$encodeAnswer = function (_p4) {
	var _p5 = _p4;
	return {
		ctor: '_Tuple2',
		_0: _p5._0,
		_1: _user$project$Bets_Types_Answer$encodeAnswerT(_p5._1)
	};
};
var _user$project$Bets_Types_Answer$summary = function (_p6) {
	var _p7 = _p6;
	var _p8 = _p7._1;
	switch (_p8.ctor) {
		case 'AnswerGroupMatch':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'Wedstrijden ',
				_user$project$Bets_Types_Group$toString(_p8._0));
		case 'AnswerGroupPosition':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'Stand ',
				_user$project$Bets_Types_Group$toString(_p8._0));
		case 'AnswerGroupBestThirds':
			return 'Beste nummers 3';
		case 'AnswerMatchWinner':
			return 'MatchWinner';
		case 'AnswerBracket':
			return 'Schema';
		case 'AnswerTopscorer':
			return 'Topscorer';
		default:
			return 'Over jou';
	}
};
var _user$project$Bets_Types_Answer$isComplete = function (_p9) {
	var _p10 = _p9;
	var _p11 = _p10._1;
	switch (_p11.ctor) {
		case 'AnswerGroupMatch':
			return _user$project$Bets_Types_Score$isComplete(_p11._2);
		case 'AnswerGroupPosition':
			return _user$project$Bets_Types_Draw$isComplete(_p11._2);
		case 'AnswerGroupBestThirds':
			return _user$project$Bets_Types_BestThirds$isComplete(_p11._0);
		case 'AnswerMatchWinner':
			return A2(_user$project$Bets_Types_Match$isComplete, _p11._1, _p11._3);
		case 'AnswerBracket':
			return _user$project$Bets_Types_Bracket$isComplete(_p11._0);
		case 'AnswerTopscorer':
			return _user$project$Bets_Types_Topscorer$isComplete(_p11._0);
		default:
			return _user$project$Bets_Types_Participant$isComplete(_p11._0);
	}
};

var _user$project$Bets_Types_Answers$decode = A2(
	_elm_lang$core$Json_Decode$map,
	_elm_lang$core$Dict$toList,
	_elm_lang$core$Json_Decode$dict(_user$project$Bets_Types_Answer$decode));
var _user$project$Bets_Types_Answers$encode = function (answers) {
	var d = A2(_elm_lang$core$List$map, _user$project$Bets_Types_Answer$encodeAnswer, answers);
	return _elm_lang$core$Json_Encode$object(d);
};
var _user$project$Bets_Types_Answers$findGroupAnswers = F2(
	function (fltr, answers) {
		return A2(_elm_lang$core$List$filter, fltr, answers);
	});
var _user$project$Bets_Types_Answers$isGroupPositionAnswer = F2(
	function (grp, _p0) {
		var _p1 = _p0;
		var _p2 = _p1._1;
		if (_p2.ctor === 'AnswerGroupPosition') {
			return _elm_lang$core$Native_Utils.eq(_p2._0, grp);
		} else {
			return false;
		}
	});
var _user$project$Bets_Types_Answers$findGroupPositionAnswers = F2(
	function (grp, answers) {
		return A2(
			_user$project$Bets_Types_Answers$findGroupAnswers,
			_user$project$Bets_Types_Answers$isGroupPositionAnswer(grp),
			answers);
	});
var _user$project$Bets_Types_Answers$isGroupMatchScoreAnswer = F2(
	function (grp, _p3) {
		var _p4 = _p3;
		var _p5 = _p4._1;
		if (_p5.ctor === 'AnswerGroupMatch') {
			return _elm_lang$core$Native_Utils.eq(_p5._0, grp);
		} else {
			return false;
		}
	});
var _user$project$Bets_Types_Answers$findGroupMatchAnswers = F2(
	function (grp, answers) {
		return A2(
			_user$project$Bets_Types_Answers$findGroupAnswers,
			_user$project$Bets_Types_Answers$isGroupMatchScoreAnswer(grp),
			answers);
	});
var _user$project$Bets_Types_Answers$unsetTeamsMatch = F2(
	function (match, teams) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$Basics$flip(_user$project$Bets_Types_Match$unsetTeamMatch),
			match,
			teams);
	});
var _user$project$Bets_Types_Answers$unsetMatchWinner = F7(
	function (teams, answerId, r, match, nextID, mTeam, points) {
		var newMatch = A2(_user$project$Bets_Types_Answers$unsetTeamsMatch, match, teams);
		var newAnswer = function (mTm) {
			return {
				ctor: '_Tuple2',
				_0: answerId,
				_1: A5(_user$project$Bets_Types$AnswerMatchWinner, r, newMatch, nextID, mTm, points)
			};
		};
		var _p6 = mTeam;
		if (_p6.ctor === 'Nothing') {
			return newAnswer(_elm_lang$core$Maybe$Nothing);
		} else {
			return A2(_elm_lang$core$List$member, _p6._0, teams) ? newAnswer(_elm_lang$core$Maybe$Nothing) : newAnswer(mTeam);
		}
	});
var _user$project$Bets_Types_Answers$unsetTeamAnswer = F3(
	function (teams, rnd, answer) {
		var _p7 = answer;
		_v5_3:
		do {
			if (_p7.ctor === '_Tuple2') {
				switch (_p7._1.ctor) {
					case 'AnswerGroupPosition':
						var _p8 = {ctor: '_Tuple2', _0: rnd, _1: _p7._1._2};
						if ((((_p8.ctor === '_Tuple2') && (_p8._0.ctor === 'I')) && (_p8._1.ctor === '_Tuple2')) && (_p8._1._1.ctor === 'Just')) {
							return A2(_elm_lang$core$List$member, _p8._1._1._0, teams) ? {
								ctor: '_Tuple2',
								_0: _p7._0,
								_1: A4(
									_user$project$Bets_Types$AnswerGroupPosition,
									_p7._1._0,
									_p7._1._1,
									{ctor: '_Tuple2', _0: _p8._1._0, _1: _elm_lang$core$Maybe$Nothing},
									_p7._1._3)
							} : answer;
						} else {
							return answer;
						}
					case 'AnswerMatchWinner':
						var _p9 = _p7._1._0;
						var roundToReset = A2(_user$project$Bets_Types_Round$isSameOrANextRound, _p9, rnd);
						return roundToReset ? A7(_user$project$Bets_Types_Answers$unsetMatchWinner, teams, _p7._0, _p9, _p7._1._1, _p7._1._2, _p7._1._3, _p7._1._4) : answer;
					case 'AnswerBracket':
						var newBracket = A3(
							_elm_lang$core$List$foldr,
							_elm_lang$core$Basics$flip(_user$project$Bets_Types_Bracket$unsetQualifier),
							_p7._1._0,
							A2(_elm_lang$core$List$map, _elm_lang$core$Maybe$Just, teams));
						var newAnswer = {
							ctor: '_Tuple2',
							_0: _p7._0,
							_1: A2(_user$project$Bets_Types$AnswerBracket, newBracket, _p7._1._1)
						};
						return newAnswer;
					default:
						break _v5_3;
				}
			} else {
				break _v5_3;
			}
		} while(false);
		return answer;
	});
var _user$project$Bets_Types_Answers$unsetTeams = F3(
	function (answers, mRound, teams) {
		var _p10 = mRound;
		if (_p10.ctor === 'Nothing') {
			return answers;
		} else {
			return A2(
				_elm_lang$core$List$map,
				A2(_user$project$Bets_Types_Answers$unsetTeamAnswer, teams, _p10._0),
				answers);
		}
	});
var _user$project$Bets_Types_Answers$updateAnswer = F2(
	function (newAnswer, currentAnswer) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$Basics$fst(newAnswer),
			_elm_lang$core$Basics$fst(currentAnswer)) ? newAnswer : currentAnswer;
	});
var _user$project$Bets_Types_Answers$setAnswer = F2(
	function (answer, answers) {
		return A2(
			_elm_lang$core$List$map,
			_user$project$Bets_Types_Answers$updateAnswer(answer),
			answers);
	});
var _user$project$Bets_Types_Answers$getAnswer = F2(
	function (answers, answerID) {
		return _elm_lang$core$List$head(
			A2(
				_elm_lang$core$List$filter,
				function (_p11) {
					var _p12 = _p11;
					return _elm_lang$core$Native_Utils.eq(_p12._0, answerID);
				},
				answers));
	});
var _user$project$Bets_Types_Answers$updateBracketAnswerBestThirds = F2(
	function (answers, newBestThirds) {
		var mBrktAnswer = A2(_user$project$Bets_Types_Answers$getAnswer, answers, 'br');
		var takenSlots = A2(
			_elm_lang$core$List$map,
			function (_p13) {
				var _p14 = _p13;
				return {
					ctor: '_Tuple2',
					_0: _p14._2,
					_1: _elm_lang$core$Maybe$Just(_p14._1)
				};
			},
			newBestThirds);
		var takenSlotIds = A2(_elm_lang$core$List$map, _elm_lang$core$Basics$fst, takenSlots);
		var openSlots = A2(
			_elm_lang$core$List$map,
			function (s) {
				return {ctor: '_Tuple2', _0: s, _1: _elm_lang$core$Maybe$Nothing};
			},
			A2(
				_elm_lang$core$List$filter,
				function (s) {
					return _elm_lang$core$Basics$not(
						A2(_elm_lang$core$List$member, s, takenSlotIds));
				},
				_elm_lang$core$Native_List.fromArray(
					['T1', 'T2', 'T3', 'T4'])));
		var allSlots = A2(_elm_lang$core$List$append, takenSlots, openSlots);
		var _p15 = mBrktAnswer;
		if (((_p15.ctor === 'Just') && (_p15._0.ctor === '_Tuple2')) && (_p15._0._1.ctor === 'AnswerBracket')) {
			var newBrkt = A2(_user$project$Bets_Types_Bracket$setBulk, _p15._0._1._0, allSlots);
			var newAnswer = {
				ctor: '_Tuple2',
				_0: _p15._0._0,
				_1: A2(_user$project$Bets_Types$AnswerBracket, newBrkt, _p15._0._1._1)
			};
			return A2(_user$project$Bets_Types_Answers$setAnswer, newAnswer, answers);
		} else {
			return answers;
		}
	});
var _user$project$Bets_Types_Answers_ops = _user$project$Bets_Types_Answers_ops || {};
_user$project$Bets_Types_Answers_ops['=>'] = F2(
	function (v0, v1) {
		return {ctor: '_Tuple2', _0: v0, _1: v1};
	});
var _user$project$Bets_Types_Answers$setMatchScore = F3(
	function (answers, _p16, score) {
		var _p17 = _p16;
		var _p21 = _p17._0;
		var _p20 = _p17._1;
		var mergeScores = F2(
			function (mCurScore, newScore) {
				var _p18 = mCurScore;
				if (_p18.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Just(newScore);
				} else {
					return _elm_lang$core$Maybe$Just(
						A2(_user$project$Bets_Types_Score$merge, newScore, _p18._0));
				}
			});
		var newAnswer = function () {
			var _p19 = _p20;
			if (_p19.ctor === 'AnswerGroupMatch') {
				var newScore = A2(mergeScores, _p19._2, score);
				return A2(
					_user$project$Bets_Types_Answers_ops['=>'],
					_p21,
					A4(_user$project$Bets_Types$AnswerGroupMatch, _p19._0, _p19._1, newScore, _p19._3));
			} else {
				return A2(_user$project$Bets_Types_Answers_ops['=>'], _p21, _p20);
			}
		}();
		return A2(_user$project$Bets_Types_Answers$setAnswer, newAnswer, answers);
	});
var _user$project$Bets_Types_Answers$setTopscorer = F3(
	function (answers, _p22, topscorer) {
		var _p23 = _p22;
		var _p26 = _p23._0;
		var _p25 = _p23._1;
		var newAnswer = function () {
			var _p24 = _p25;
			if (_p24.ctor === 'AnswerTopscorer') {
				return A2(
					_user$project$Bets_Types_Answers_ops['=>'],
					_p26,
					A2(_user$project$Bets_Types$AnswerTopscorer, topscorer, _p24._1));
			} else {
				return A2(_user$project$Bets_Types_Answers_ops['=>'], _p26, _p25);
			}
		}();
		return A2(_user$project$Bets_Types_Answers$setAnswer, newAnswer, answers);
	});
var _user$project$Bets_Types_Answers$setParticipant = F3(
	function (answers, _p27, participant) {
		var _p28 = _p27;
		var _p31 = _p28._0;
		var _p30 = _p28._1;
		var newAnswer = function () {
			var _p29 = _p30;
			if (_p29.ctor === 'AnswerParticipant') {
				return A2(
					_user$project$Bets_Types_Answers_ops['=>'],
					_p31,
					_user$project$Bets_Types$AnswerParticipant(participant));
			} else {
				return A2(_user$project$Bets_Types_Answers_ops['=>'], _p31, _p30);
			}
		}();
		return A2(_user$project$Bets_Types_Answers$setAnswer, newAnswer, answers);
	});
var _user$project$Bets_Types_Answers$setDrawMatchWinner = F2(
	function (_p33, _p32) {
		var _p34 = _p33;
		var _p35 = _p32;
		var _p40 = _p35._0;
		var _p39 = _p35._1;
		var nextTeam = F2(
			function (mTm, match) {
				var _p36 = mTm;
				if (_p36.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					var _p37 = _p36._0;
					return A2(
						_elm_lang$core$List$member,
						_p37,
						_user$project$Bets_Types_Match$teamsInMatch(match)) ? _elm_lang$core$Maybe$Just(_p37) : _elm_lang$core$Maybe$Nothing;
				}
			});
		var _p38 = _p39;
		switch (_p38.ctor) {
			case 'AnswerMatchWinner':
				var newMatch = A2(_user$project$Bets_Types_Match$setTeamMatch, _p38._1, _p34);
				var newSelected = A2(nextTeam, _p38._3, newMatch);
				var newAnswer = A5(_user$project$Bets_Types$AnswerMatchWinner, _p38._0, newMatch, _p38._2, newSelected, _p38._4);
				return A2(_user$project$Bets_Types_Answers_ops['=>'], _p40, newAnswer);
			case 'AnswerBracket':
				var newBracket = A3(_user$project$Bets_Types_Bracket$set, _p38._0, _p34._0, _p34._1);
				var newAnswer = A2(_user$project$Bets_Types$AnswerBracket, newBracket, _p38._1);
				return A2(_user$project$Bets_Types_Answers_ops['=>'], _p40, newAnswer);
			default:
				return A2(_user$project$Bets_Types_Answers_ops['=>'], _p40, _p39);
		}
	});
var _user$project$Bets_Types_Answers$setDraw = F2(
	function (draw, answers) {
		return A2(
			_elm_lang$core$List$map,
			_user$project$Bets_Types_Answers$setDrawMatchWinner(draw),
			answers);
	});
var _user$project$Bets_Types_Answers$setDraws = F2(
	function (draws, answers) {
		setDraws:
		while (true) {
			var _p41 = draws;
			if (_p41.ctor === '[]') {
				return answers;
			} else {
				var answers$ = A2(_user$project$Bets_Types_Answers$setDraw, _p41._0, answers);
				var _v23 = _p41._1,
					_v24 = answers$;
				draws = _v23;
				answers = _v24;
				continue setDraws;
			}
		}
	});
var _user$project$Bets_Types_Answers$setNext = F3(
	function (nextID, team, answers) {
		var _p42 = nextID;
		if (_p42.ctor === 'Just') {
			return A2(
				_user$project$Bets_Types_Answers$setDraw,
				{
					ctor: '_Tuple2',
					_0: _p42._0,
					_1: _elm_lang$core$Maybe$Just(team)
				},
				answers);
		} else {
			return answers;
		}
	});
var _user$project$Bets_Types_Answers$setMatchWinner = F3(
	function (answers, _p43, team) {
		var _p44 = _p43;
		var _p53 = _p44._1;
		var _p45 = _p53;
		if (_p45.ctor === 'AnswerMatchWinner') {
			var _p52 = _p45._0;
			var _p51 = _p45._2;
			var _p50 = _p45._1;
			var _p49 = _p45._3;
			var newAnswers = function () {
				var _p46 = _p49;
				if (_p46.ctor === 'Nothing') {
					return A3(_user$project$Bets_Types_Answers$setNext, _p51, team, answers);
				} else {
					var _p47 = _p46._0;
					return (!_elm_lang$core$Native_Utils.eq(_p47, team)) ? A3(
						_user$project$Bets_Types_Answers$setNext,
						_p51,
						team,
						A3(
							_user$project$Bets_Types_Answers$unsetTeams,
							answers,
							_elm_lang$core$Maybe$Just(_p52),
							_elm_lang$core$Native_List.fromArray(
								[_p47]))) : A3(
						_user$project$Bets_Types_Answers$unsetTeams,
						answers,
						_elm_lang$core$Maybe$Just(_p52),
						_elm_lang$core$Native_List.fromArray(
							[team]));
				}
			}();
			var newTeam = function () {
				var _p48 = _p49;
				if (_p48.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					return _elm_lang$core$Native_Utils.eq(_p48._0, team) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(team);
				}
			}();
			var teamInMatch = A2(
				_elm_lang$core$List$member,
				team,
				_user$project$Bets_Types_Match$teamsInMatch(_p50));
			var newAnswer = teamInMatch ? A5(_user$project$Bets_Types$AnswerMatchWinner, _p52, _p50, _p51, newTeam, _p45._4) : _p53;
			return teamInMatch ? A2(
				_user$project$Bets_Types_Answers$setAnswer,
				{ctor: '_Tuple2', _0: _p44._0, _1: newAnswer},
				newAnswers) : answers;
		} else {
			return answers;
		}
	});
var _user$project$Bets_Types_Answers$updateMatchWinner = F3(
	function (drawID, mTeam, answers) {
		return A2(
			_user$project$Bets_Types_Answers$setDraw,
			{ctor: '_Tuple2', _0: drawID, _1: mTeam},
			answers);
	});
var _user$project$Bets_Types_Answers$setGroupPosition = F6(
	function (answers, answerID, grp, pos, _p54, team) {
		var _p55 = _p54;
		var _p59 = _p55._0;
		var _p56 = function () {
			var _p57 = _p55._1;
			if (_p57.ctor === 'Just') {
				var _p58 = _p57._0;
				return _elm_lang$core$Native_Utils.eq(_p58, team) ? {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Maybe$Nothing,
					_1: _elm_lang$core$Native_List.fromArray(
						[team])
				} : {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Maybe$Just(team),
					_1: _elm_lang$core$Native_List.fromArray(
						[team, _p58])
				};
			} else {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Maybe$Just(team),
					_1: _elm_lang$core$Native_List.fromArray(
						[team])
				};
			}
		}();
		var newTeam = _p56._0;
		var toReset = _p56._1;
		var cleanAnswers = A3(
			_user$project$Bets_Types_Answers$unsetTeams,
			answers,
			_elm_lang$core$Maybe$Just(_user$project$Bets_Types$I),
			toReset);
		var newAnswers = A3(_user$project$Bets_Types_Answers$updateMatchWinner, _p59, newTeam, cleanAnswers);
		var newDraw = {ctor: '_Tuple2', _0: _p59, _1: newTeam};
		var newAnswer = A2(
			_user$project$Bets_Types_Answers_ops['=>'],
			answerID,
			A4(_user$project$Bets_Types$AnswerGroupPosition, grp, pos, newDraw, _elm_lang$core$Maybe$Nothing));
		return A2(_user$project$Bets_Types_Answers$setAnswer, newAnswer, newAnswers);
	});
var _user$project$Bets_Types_Answers$updateBracket = F3(
	function (drawID, mTeam, answers) {
		return A2(
			_user$project$Bets_Types_Answers$setDraw,
			{ctor: '_Tuple2', _0: drawID, _1: mTeam},
			answers);
	});
var _user$project$Bets_Types_Answers$setBestThirds = F5(
	function (answers, answerID, oldBestThirds, newgroup, team) {
		var newBestThirds = A3(_user$project$Bets_Types_BestThirds$updateChoices, newgroup, team, oldBestThirds);
		var newAnswer = A2(
			_user$project$Bets_Types_Answers_ops['=>'],
			answerID,
			A2(_user$project$Bets_Types$AnswerGroupBestThirds, newBestThirds, _elm_lang$core$Maybe$Nothing));
		var newAnswers = A2(_user$project$Bets_Types_Answers$updateBracketAnswerBestThirds, answers, newBestThirds);
		return A2(_user$project$Bets_Types_Answers$setAnswer, newAnswer, newAnswers);
	});
var _user$project$Bets_Types_Answers$setBestThird = F4(
	function (answers, _p60, grp, team) {
		var _p61 = _p60;
		var _p62 = _p61._1;
		if (_p62.ctor === 'AnswerGroupBestThirds') {
			return A5(_user$project$Bets_Types_Answers$setBestThirds, answers, _p61._0, _p62._0, grp, team);
		} else {
			return answers;
		}
	});
var _user$project$Bets_Types_Answers$setBestThirds$ = F5(
	function (answers, answerID, oldBestThirds, newgroup, team) {
		var newBestThirds = A3(_user$project$Bets_Types_BestThirds$updateChoices, newgroup, team, oldBestThirds);
		var teamsToReset = A2(_user$project$Bets_Types_BestThirds$teamsToReset, oldBestThirds, newBestThirds);
		var draws = A2(
			_elm_lang$core$List$map,
			function (_p63) {
				var _p64 = _p63;
				return {
					ctor: '_Tuple2',
					_0: _p64._2,
					_1: _elm_lang$core$Maybe$Just(_p64._1)
				};
			},
			newBestThirds);
		var newAnswer = A2(
			_user$project$Bets_Types_Answers_ops['=>'],
			answerID,
			A2(_user$project$Bets_Types$AnswerGroupBestThirds, newBestThirds, _elm_lang$core$Maybe$Nothing));
		var cleanAnswers = A2(
			_user$project$Bets_Types_Answers$setAnswer,
			newAnswer,
			A3(
				_user$project$Bets_Types_Answers$unsetTeams,
				answers,
				_elm_lang$core$Maybe$Just(_user$project$Bets_Types$II),
				teamsToReset));
		var allSet = _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(newBestThirds),
			4);
		return allSet ? A2(_user$project$Bets_Types_Answers$setDraws, draws, cleanAnswers) : cleanAnswers;
	});
var _user$project$Bets_Types_Answers$setTeam = F4(
	function (answers, _p65, grp, team) {
		var _p66 = _p65;
		var _p69 = _p66._0;
		var _p67 = _p66._1;
		_v36_2:
		do {
			switch (_p67.ctor) {
				case 'AnswerGroupPosition':
					if (_p67._2.ctor === '_Tuple2') {
						var _p68 = _p67._0;
						return _elm_lang$core$Native_Utils.eq(_p68, grp) ? A6(
							_user$project$Bets_Types_Answers$setGroupPosition,
							answers,
							_p69,
							_p68,
							_p67._1,
							{ctor: '_Tuple2', _0: _p67._2._0, _1: _p67._2._1},
							team) : answers;
					} else {
						break _v36_2;
					}
				case 'AnswerGroupBestThirds':
					return A5(_user$project$Bets_Types_Answers$setBestThirds$, answers, _p69, _p67._0, grp, team);
				default:
					break _v36_2;
			}
		} while(false);
		return answers;
	});
var _user$project$Bets_Types_Answers$setWinner = F4(
	function (answers, _p70, slot, homeOrAway) {
		var _p71 = _p70;
		var _p72 = _p71._1;
		if (_p72.ctor === 'AnswerBracket') {
			var newBracket = A3(_user$project$Bets_Types_Bracket$proceed, _p72._0, slot, homeOrAway);
			var newAnswer = A2(
				_user$project$Bets_Types_Answers_ops['=>'],
				_p71._0,
				A2(_user$project$Bets_Types$AnswerBracket, newBracket, _p72._1));
			var newAnswers = A2(_user$project$Bets_Types_Answers$setAnswer, newAnswer, answers);
			return newAnswers;
		} else {
			return answers;
		}
	});

var _user$project$Bets_Types_Candidates$free = function (_p0) {
	var _p1 = _p0;
	return {ctor: '_Tuple3', _0: _p1._0, _1: _p1._1, _2: _user$project$Bets_Types$Free};
};
var _user$project$Bets_Types_Candidates$uniques = F2(
	function (found, tms) {
		uniques:
		while (true) {
			var _p2 = tms;
			if (_p2.ctor === '::') {
				var _p4 = _p2._0._1;
				var _p3 = _p2._1;
				if (A2(_elm_lang$core$List$member, _p4, found)) {
					var _v2 = found,
						_v3 = _p3;
					found = _v2;
					tms = _v3;
					continue uniques;
				} else {
					return A2(
						_elm_lang$core$List_ops['::'],
						{ctor: '_Tuple2', _0: _p2._0._0, _1: _p4},
						A2(
							_user$project$Bets_Types_Candidates$uniques,
							A2(_elm_lang$core$List_ops['::'], _p4, found),
							_p3));
				}
			} else {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			}
		}
	});
var _user$project$Bets_Types_Candidates$findTeams = F2(
	function (answers, grp) {
		findTeams:
		while (true) {
			var _p5 = answers;
			if (_p5.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				var _p9 = _p5._1;
				var _p6 = _p5._0._1;
				if ((((_p6.ctor === 'AnswerGroupMatch') && (_p6._1.ctor === '_Tuple4')) && (_p6._1._0.ctor === '_Tuple2')) && (_p6._1._1.ctor === '_Tuple2')) {
					var _p8 = _p6._0;
					if (_elm_lang$core$Native_Utils.eq(_p8, grp)) {
						var _p7 = {ctor: '_Tuple2', _0: _p6._1._0._1, _1: _p6._1._1._1};
						if (_p7._0.ctor === 'Just') {
							if (_p7._1.ctor === 'Just') {
								return A2(
									_elm_lang$core$List_ops['::'],
									{ctor: '_Tuple2', _0: _p8, _1: _p7._0._0},
									A2(
										_elm_lang$core$List_ops['::'],
										{ctor: '_Tuple2', _0: _p8, _1: _p7._1._0},
										A2(_user$project$Bets_Types_Candidates$findTeams, _p9, grp)));
							} else {
								return A2(
									_elm_lang$core$List_ops['::'],
									{ctor: '_Tuple2', _0: _p8, _1: _p7._0._0},
									A2(_user$project$Bets_Types_Candidates$findTeams, _p9, grp));
							}
						} else {
							if (_p7._1.ctor === 'Just') {
								return A2(
									_elm_lang$core$List_ops['::'],
									{ctor: '_Tuple2', _0: _p8, _1: _p7._1._0},
									A2(_user$project$Bets_Types_Candidates$findTeams, _p9, grp));
							} else {
								var _v7 = _p9,
									_v8 = grp;
								answers = _v7;
								grp = _v8;
								continue findTeams;
							}
						}
					} else {
						var _v9 = _p9,
							_v10 = grp;
						answers = _v9;
						grp = _v10;
						continue findTeams;
					}
				} else {
					var _v11 = _p9,
						_v12 = grp;
					answers = _v11;
					grp = _v12;
					continue findTeams;
				}
			}
		}
	});
var _user$project$Bets_Types_Candidates$teams = F2(
	function (answers, group) {
		return A2(
			_user$project$Bets_Types_Candidates$uniques,
			_elm_lang$core$Native_List.fromArray(
				[]),
			A2(_user$project$Bets_Types_Candidates$findTeams, answers, group));
	});
var _user$project$Bets_Types_Candidates$allThirds = function (answers) {
	var isThird = function (_p10) {
		var _p11 = _p10;
		var _p12 = _p11._1;
		if ((((_p12.ctor === 'AnswerGroupPosition') && (_p12._1.ctor === 'Third')) && (_p12._2.ctor === '_Tuple2')) && (_p12._2._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				{ctor: '_Tuple3', _0: _p12._0, _1: _p12._2._1._0, _2: _user$project$Bets_Types$Third});
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	return A2(_elm_lang$core$List$filterMap, isThird, answers);
};
var _user$project$Bets_Types_Candidates$mergeCandidates = F2(
	function (cands, teams) {
		var positionedTeams = A2(
			_elm_lang$core$List$map,
			function (_p13) {
				var _p14 = _p13;
				return _p14._1;
			},
			cands);
		var notSelected = function (_p15) {
			var _p16 = _p15;
			return _elm_lang$core$Basics$not(
				A2(_elm_lang$core$List$member, _p16._1, positionedTeams));
		};
		return A2(
			_elm_lang$core$List$sortBy,
			function (_p17) {
				var _p18 = _p17;
				return function (_) {
					return _.teamName;
				}(_p18._1);
			},
			A2(
				_elm_lang$core$List$append,
				cands,
				A2(_elm_lang$core$List$filter, notSelected, teams)));
	});
var _user$project$Bets_Types_Candidates$findCandidates = F3(
	function (answers, grp, pos) {
		findCandidates:
		while (true) {
			var groupPos = A2(
				_elm_lang$core$Basics$flip,
				_elm_lang$core$List$member,
				_elm_lang$core$Native_List.fromArray(
					[_user$project$Bets_Types$First, _user$project$Bets_Types$Second, _user$project$Bets_Types$Third]));
			var _p19 = answers;
			if (_p19.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				var _p23 = _p19._1;
				var _p20 = _p19._0._1;
				if (((_p20.ctor === 'AnswerGroupPosition') && (_p20._2.ctor === '_Tuple2')) && (_p20._2._1.ctor === 'Just')) {
					var _p22 = _p20._1;
					var _p21 = _p20._0;
					if (_elm_lang$core$Native_Utils.eq(_p21, grp)) {
						return A2(
							_elm_lang$core$List_ops['::'],
							{ctor: '_Tuple3', _0: _p21, _1: _p20._2._1._0, _2: _p22},
							A3(_user$project$Bets_Types_Candidates$findCandidates, _p23, grp, _p22));
					} else {
						var _v20 = _p23,
							_v21 = grp,
							_v22 = _p22;
						answers = _v20;
						grp = _v21;
						pos = _v22;
						continue findCandidates;
					}
				} else {
					var _v23 = _p23,
						_v24 = grp,
						_v25 = pos;
					answers = _v23;
					grp = _v24;
					pos = _v25;
					continue findCandidates;
				}
			}
		}
	});
var _user$project$Bets_Types_Candidates$candidates = F2(
	function (answers, _p24) {
		var _p25 = _p24;
		var _p26 = _p25._1;
		switch (_p26.ctor) {
			case 'AnswerGroupPosition':
				var _p27 = _p26._0;
				return A2(
					_user$project$Bets_Types_Candidates$mergeCandidates,
					A3(_user$project$Bets_Types_Candidates$findCandidates, answers, _p27, _p26._1),
					A2(
						_elm_lang$core$List$map,
						_user$project$Bets_Types_Candidates$free,
						A2(_user$project$Bets_Types_Candidates$teams, answers, _p27)));
			case 'AnswerGroupBestThirds':
				var thirds = _user$project$Bets_Types_Candidates$allThirds(answers);
				var topThirds = A2(
					_elm_lang$core$List$map,
					function (_p28) {
						var _p29 = _p28;
						return {ctor: '_Tuple3', _0: _p29._0, _1: _p29._1, _2: _user$project$Bets_Types$TopThird};
					},
					_p26._0);
				return A2(_user$project$Bets_Types_Candidates$mergeCandidates, topThirds, thirds);
			default:
				return _elm_lang$core$Native_List.fromArray(
					[]);
		}
	});

var _user$project$Bets_Bet$decodeBet = A5(
	_elm_lang$core$Json_Decode$object4,
	_user$project$Bets_Types$Bet,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'answers', _user$project$Bets_Types_Answers$decode),
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'betId',
		_elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$int)),
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'uuid',
		_elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$string)),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'active', _elm_lang$core$Json_Decode$bool));
var _user$project$Bets_Bet$encode = function (bet) {
	var betObject = _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 'answers',
				_1: _user$project$Bets_Types_Answers$encode(bet.answers)
			},
				{
				ctor: '_Tuple2',
				_0: 'betId',
				_1: _user$project$Bets_Json_Encode$mIntEnc(bet.betId)
			},
				{
				ctor: '_Tuple2',
				_0: 'uuid',
				_1: _user$project$Bets_Json_Encode$mStrEnc(bet.uuid)
			},
				{
				ctor: '_Tuple2',
				_0: 'active',
				_1: _elm_lang$core$Json_Encode$bool(bet.active)
			}
			]));
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: 'bet', _1: betObject}
			]));
};
var _user$project$Bets_Bet$newBet = F2(
	function (bet, newAnswers) {
		return _elm_lang$core$Native_Utils.update(
			bet,
			{answers: newAnswers});
	});
var _user$project$Bets_Bet$setWinner = F4(
	function (bet, answer, slot, winner) {
		return A2(
			_user$project$Bets_Bet$newBet,
			bet,
			A4(_user$project$Bets_Types_Answers$setWinner, bet.answers, answer, slot, winner));
	});
var _user$project$Bets_Bet$setTeam = F4(
	function (bet, answer, group, team) {
		return A2(
			_user$project$Bets_Bet$newBet,
			bet,
			A4(_user$project$Bets_Types_Answers$setTeam, bet.answers, answer, group, team));
	});
var _user$project$Bets_Bet$setMatchScore = F3(
	function (bet, answer, score) {
		return A2(
			_user$project$Bets_Bet$newBet,
			bet,
			A3(_user$project$Bets_Types_Answers$setMatchScore, bet.answers, answer, score));
	});
var _user$project$Bets_Bet$setMatchWinner = F3(
	function (bet, answer, team) {
		return A2(
			_user$project$Bets_Bet$newBet,
			bet,
			A3(_user$project$Bets_Types_Answers$setMatchWinner, bet.answers, answer, team));
	});
var _user$project$Bets_Bet$setParticipant = F3(
	function (bet, answer, participant) {
		return A2(
			_user$project$Bets_Bet$newBet,
			bet,
			A3(_user$project$Bets_Types_Answers$setParticipant, bet.answers, answer, participant));
	});
var _user$project$Bets_Bet$setTopscorer = F3(
	function (bet, answer, topscorer) {
		return A2(
			_user$project$Bets_Bet$newBet,
			bet,
			A3(_user$project$Bets_Types_Answers$setTopscorer, bet.answers, answer, topscorer));
	});
var _user$project$Bets_Bet$findGroupPositionAnswers = F2(
	function (group, bet) {
		return A2(_user$project$Bets_Types_Answers$findGroupPositionAnswers, group, bet.answers);
	});
var _user$project$Bets_Bet$findGroupMatchAnswers = F2(
	function (group, bet) {
		return A2(_user$project$Bets_Types_Answers$findGroupMatchAnswers, group, bet.answers);
	});
var _user$project$Bets_Bet$candidates = F2(
	function (bet, answer) {
		return A2(_user$project$Bets_Types_Candidates$candidates, bet.answers, answer);
	});
var _user$project$Bets_Bet$getAnswer = F2(
	function (bet, answerId) {
		return A2(_user$project$Bets_Types_Answers$getAnswer, bet.answers, answerId);
	});
var _user$project$Bets_Bet$IncomingBet = function (a) {
	return {bet: a};
};
var _user$project$Bets_Bet$decodeIncoming = A2(
	_elm_lang$core$Json_Decode$object1,
	_user$project$Bets_Bet$IncomingBet,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'bet', _user$project$Bets_Bet$decodeBet));
var _user$project$Bets_Bet$decode = A2(
	_elm_lang$core$Json_Decode$map,
	function (x) {
		return x.bet;
	},
	_user$project$Bets_Bet$decodeIncoming);

var _user$project$Utils_Types$roundFromString = function (s) {
	var _p0 = s;
	switch (_p0) {
		case 'I':
			return _user$project$Bets_Types$I;
		case 'II':
			return _user$project$Bets_Types$II;
		case 'III':
			return _user$project$Bets_Types$III;
		case 'IV':
			return _user$project$Bets_Types$IV;
		case 'VI':
			return _user$project$Bets_Types$V;
		default:
			return _user$project$Bets_Types$VI;
	}
};

var _user$project$Main$groupBy = function (toComparable) {
	return _elm_community$list_extra$List_Extra$groupWhile(
		F2(
			function (left, right) {
				return _elm_lang$core$Native_Utils.eq(
					toComparable(left),
					toComparable(right));
			}));
};
var _user$project$Main$viewTeam = function (team) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html_Attributes$class('team cell')
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$span,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$class('flag')
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Bets_Types_Team$flag(team)
					])),
				A2(
				_elm_lang$html$Html$br,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[])),
				A2(
				_elm_lang$html$Html$span,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$class('team-name')
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(
						_user$project$Bets_Types_Team$mdisplay(team))
					]))
			]));
};
var _user$project$Main$decodeRounds = function () {
	var toRoundAndInt = function (_p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _user$project$Utils_Types$roundFromString(_p1._0),
			_1: _p1._1
		};
	};
	var toRoundAndInts = function (rStrIntList) {
		return A2(_elm_lang$core$List$map, toRoundAndInt, rStrIntList);
	};
	return A2(
		_elm_lang$core$Json_Decode$map,
		toRoundAndInts,
		A2(
			_elm_lang$core$Json_Decode$map,
			_elm_lang$core$Dict$toList,
			_elm_lang$core$Json_Decode$dict(_elm_lang$core$Json_Decode$int)));
}();
var _user$project$Main$viewTopscorer$ = F2(
	function (topscorer, points) {
		var clr = function () {
			var _p2 = points;
			if (_p2.ctor === 'Just') {
				return _elm_lang$core$Native_Utils.eq(_p2._0, 9) ? 'border-score' : 'border-wrong';
			} else {
				return 'border-tbd';
			}
		}();
		var cls = A2(
			_elm_lang$core$String$join,
			' ',
			_elm_lang$core$Native_List.fromArray(
				['xxl', 'cell', 'topscorer', 'match', clr]));
		var _p3 = topscorer;
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$class(cls)
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$span,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$class('flag')
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Bets_Types_Team$flag(
								_elm_lang$core$Maybe$Just(_p3._1._0))
							])),
						A2(
						_elm_lang$html$Html$br,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[])),
						A2(
						_elm_lang$html$Html$span,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$class('team-name')
							]),
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html$text(_p3._0._0)
							]))
					]));
		} else {
			return A2(
				_elm_lang$html$Html$section,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('O jee, daar ging iets niet helemaal goed...')
					]));
		}
	});
var _user$project$Main$viewTopscorer = function (ranking) {
	var mAnswer = A2(_user$project$Bets_Bet$getAnswer, ranking.bet, 'ts');
	var _p4 = mAnswer;
	if (((_p4.ctor === 'Just') && (_p4._0.ctor === '_Tuple2')) && (_p4._0._1.ctor === 'AnswerTopscorer')) {
		return A2(
			_elm_lang$html$Html$section,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$h1,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('Topscorer')
						])),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('container left')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_user$project$Main$viewTopscorer$, _p4._0._1._0, _p4._0._1._1)
						]))
				]));
	} else {
		return A2(
			_elm_lang$html$Html$section,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text('O jee, daar ging iets niet helemaal goed...')
				]));
	}
};
var _user$project$Main$didQualify = function (bracket) {
	var _p5 = bracket;
	if (_p5.ctor === 'MatchNode') {
		return _p5._5;
	} else {
		return _p5._2;
	}
};
var _user$project$Main$mkButton = F2(
	function (hasQualified, bracket) {
		var clr = function () {
			var _p6 = hasQualified;
			switch (_p6.ctor) {
				case 'In':
					return 'border-score';
				case 'Out':
					return 'border-wrong';
				default:
					return 'border-tbd';
			}
		}();
		var cls = A2(
			_elm_lang$core$String$join,
			' ',
			_elm_lang$core$Native_List.fromArray(
				['xl', 'cell2', 'match', clr]));
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class(cls)
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Main$viewTeam(
					_user$project$Bets_Types_Bracket$qualifier(bracket))
				]));
	});
var _user$project$Main$mkButtonChamp = function (mBracket) {
	var _p7 = mBracket;
	if (_p7.ctor === 'Just') {
		var _p8 = _p7._0;
		return A2(
			_user$project$Main$mkButton,
			_user$project$Main$didQualify(_p8),
			_p8);
	} else {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[]));
	}
};
var _user$project$Main$viewMatchWinner = F2(
	function (bet, mBracket) {
		var _p9 = mBracket;
		if ((_p9.ctor === 'Just') && (_p9._0.ctor === 'MatchNode')) {
			var _p11 = _p9._0._2;
			var _p10 = _p9._0._3;
			var dash = _elm_lang$html$Html$text(' - ');
			var awayQualified = _user$project$Main$didQualify(_p10);
			var awayButton = A2(_user$project$Main$mkButton, awayQualified, _p10);
			var homeQualified = _user$project$Main$didQualify(_p11);
			var homeButton = A2(_user$project$Main$mkButton, homeQualified, _p11);
			return A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$class('cell2 m irrelevant')
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$class('container centered')
							]),
						_elm_lang$core$Native_List.fromArray(
							[homeButton, awayButton]))
					]));
		} else {
			return A2(
				_elm_lang$html$Html$p,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[]));
		}
	});
var _user$project$Main$viewBracket$ = F2(
	function (bet, bracket) {
		var $final = A2(_user$project$Bets_Types_Bracket$get, bracket, 'm51');
		var champBtn = _user$project$Main$mkButtonChamp($final);
		var champion = A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class('cell2 m irrelevant')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('container centered')
						]),
					_elm_lang$core$Native_List.fromArray(
						[champBtn]))
				]));
		var v = _user$project$Main$viewMatchWinner(bet);
		var m51 = v(
			A2(_user$project$Bets_Types_Bracket$get, bracket, 'm51'));
		var m50 = v(
			A2(_user$project$Bets_Types_Bracket$get, bracket, 'm50'));
		var m49 = v(
			A2(_user$project$Bets_Types_Bracket$get, bracket, 'm49'));
		var m48 = v(
			A2(_user$project$Bets_Types_Bracket$get, bracket, 'm48'));
		var m47 = v(
			A2(_user$project$Bets_Types_Bracket$get, bracket, 'm47'));
		var m46 = v(
			A2(_user$project$Bets_Types_Bracket$get, bracket, 'm46'));
		var m45 = v(
			A2(_user$project$Bets_Types_Bracket$get, bracket, 'm45'));
		var m44 = v(
			A2(_user$project$Bets_Types_Bracket$get, bracket, 'm44'));
		var m43 = v(
			A2(_user$project$Bets_Types_Bracket$get, bracket, 'm43'));
		var m42 = v(
			A2(_user$project$Bets_Types_Bracket$get, bracket, 'm42'));
		var m41 = v(
			A2(_user$project$Bets_Types_Bracket$get, bracket, 'm41'));
		var m40 = v(
			A2(_user$project$Bets_Types_Bracket$get, bracket, 'm40'));
		var m39 = v(
			A2(_user$project$Bets_Types_Bracket$get, bracket, 'm39'));
		var m38 = v(
			A2(_user$project$Bets_Types_Bracket$get, bracket, 'm38'));
		var m37 = v(
			A2(_user$project$Bets_Types_Bracket$get, bracket, 'm37'));
		return A2(
			_elm_lang$html$Html$section,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$id('schema')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('row justified')
						]),
					_elm_lang$core$Native_List.fromArray(
						[m37, m39, m38, m42])),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('row spaced')
						]),
					_elm_lang$core$Native_List.fromArray(
						[m45, m46])),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('row spaced')
						]),
					_elm_lang$core$Native_List.fromArray(
						[m49])),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('row rightside')
						]),
					_elm_lang$core$Native_List.fromArray(
						[m51, champion])),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('row spaced')
						]),
					_elm_lang$core$Native_List.fromArray(
						[m50])),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('row spaced')
						]),
					_elm_lang$core$Native_List.fromArray(
						[m47, m48])),
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('row justified')
						]),
					_elm_lang$core$Native_List.fromArray(
						[m41, m43, m40, m44]))
				]));
	});
var _user$project$Main$viewBracket = function (ranking) {
	var mAnswer = A2(_user$project$Bets_Bet$getAnswer, ranking.bet, 'br');
	var _p12 = mAnswer;
	if (((_p12.ctor === 'Just') && (_p12._0.ctor === '_Tuple2')) && (_p12._0._1.ctor === 'AnswerBracket')) {
		return A2(
			_elm_lang$html$Html$section,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$h1,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('Schema')
						])),
					A2(_user$project$Main$viewBracket$, ranking.bet, _p12._0._1._0)
				]));
	} else {
		return A2(
			_elm_lang$html$Html$section,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text('O jee, daar ging iets niet helemaal goed...')
				]));
	}
};
var _user$project$Main$viewMatch = function (_p13) {
	var _p14 = _p13;
	var _p15 = _p14._1;
	if (_p15.ctor === 'AnswerGroupMatch') {
		var _p18 = _p15._1;
		var displayScore = function (score) {
			var aScore = A2(
				_elm_lang$core$Maybe$withDefault,
				'_',
				A2(
					_elm_lang$core$Maybe$map,
					_elm_lang$core$Basics$toString,
					_user$project$Bets_Types_Score$awayScore(score)));
			var hScore = A2(
				_elm_lang$core$Maybe$withDefault,
				'_',
				A2(
					_elm_lang$core$Maybe$map,
					_elm_lang$core$Basics$toString,
					_user$project$Bets_Types_Score$homeScore(score)));
			return _elm_lang$html$Html$text(
				A2(
					_elm_lang$core$Basics_ops['++'],
					hScore,
					A2(_elm_lang$core$Basics_ops['++'], '-', aScore)));
		};
		var scoreTxt = function () {
			var _p16 = _p15._2;
			if (_p16.ctor === 'Just') {
				return displayScore(_p16._0);
			} else {
				return _elm_lang$html$Html$text('_-_');
			}
		}();
		var scoreView = A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class('cell score-text')
				]),
			_elm_lang$core$Native_List.fromArray(
				[scoreTxt]));
		var clr = function () {
			var _p17 = _p15._3;
			if (_p17.ctor === 'Nothing') {
				return 'border-tbd';
			} else {
				switch (_p17._0) {
					case 0:
						return 'border-wrong';
					case 1:
						return 'border-toto';
					case 3:
						return 'border-score';
					default:
						return 'border-perhaps';
				}
			}
		}();
		var cls = A2(_elm_lang$core$Basics_ops['++'], 'cell xxl score container match ', clr);
		var away = _user$project$Main$viewTeam(
			_user$project$Bets_Types_Match$awayTeam(_p18));
		var home = _user$project$Main$viewTeam(
			_user$project$Bets_Types_Match$homeTeam(_p18));
		return _elm_lang$core$Maybe$Just(
			A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$class(cls)
					]),
				_elm_lang$core$Native_List.fromArray(
					[home, scoreView, away])));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Main$viewMatches = function (ranking) {
	var answers = A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$fst, ranking.bet.answers);
	return A2(
		_elm_lang$html$Html$section,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$h1,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('Uitslagen')
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$class('container')
					]),
				A2(_elm_lang$core$List$filterMap, _user$project$Main$viewMatch, answers))
			]));
};
var _user$project$Main$homeBreadCrumb = A2(
	_elm_lang$html$Html$a,
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$html$Html_Attributes$href('/voetbalpool'),
			_elm_lang$html$Html_Attributes$class('button-like right')
		]),
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$html$Html$text('home')
		]));
var _user$project$Main$RankingSummary = F6(
	function (a, b, c, d, e, f) {
		return {name: a, pos: b, rounds: c, topscorer: d, total: e, uuid: f};
	});
var _user$project$Main$decodeRankingSummary = A7(
	_elm_lang$core$Json_Decode$object6,
	_user$project$Main$RankingSummary,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'name', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'pos', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'rounds', _user$project$Main$decodeRounds),
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'topscorer',
		_elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$int)),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'total', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'uuid', _elm_lang$core$Json_Decode$string));
var _user$project$Main$Rankings = function (a) {
	return {rankings: a};
};
var _user$project$Main$decode = A2(
	_elm_lang$core$Json_Decode$object1,
	_user$project$Main$Rankings,
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'rankings',
		_elm_lang$core$Json_Decode$list(_user$project$Main$decodeRankingSummary)));
var _user$project$Main$Ranking = F7(
	function (a, b, c, d, e, f, g) {
		return {name: a, pos: b, rounds: c, topscorer: d, total: e, uuid: f, bet: g};
	});
var _user$project$Main$decodeRanking = A8(
	_elm_lang$core$Json_Decode$object7,
	_user$project$Main$Ranking,
	A2(_elm_lang$core$Json_Decode_ops[':='], 'name', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'pos', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'rounds', _user$project$Main$decodeRounds),
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'topscorer',
		_elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$int)),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'total', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'uuid', _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'bet', _user$project$Bets_Bet$decodeBet));
var _user$project$Main$Model = F5(
	function (a, b, c, d, e) {
		return {rankings: a, current: b, err: c, location: d, route: e};
	});
var _user$project$Main$ShowDetails = function (a) {
	return {ctor: 'ShowDetails', _0: a};
};
var _user$project$Main$ShowMain = {ctor: 'ShowMain'};
var _user$project$Main$UrlUpdate = F2(
	function (a, b) {
		return {ctor: 'UrlUpdate', _0: a, _1: b};
	});
var _user$project$Main$NavigateTo = function (a) {
	return {ctor: 'NavigateTo', _0: a};
};
var _user$project$Main$RankingReceived = function (a) {
	return {ctor: 'RankingReceived', _0: a};
};
var _user$project$Main$Failure = function (a) {
	return {ctor: 'Failure', _0: a};
};
var _user$project$Main$fetchRanking = F2(
	function (model, url) {
		var newCmd = A3(
			_elm_lang$core$Task$perform,
			_user$project$Main$Failure,
			_user$project$Main$RankingReceived,
			A2(_evancz$elm_http$Http$get, _user$project$Main$decodeRanking, url));
		return {ctor: '_Tuple2', _0: model, _1: newCmd};
	});
var _user$project$Main$Receive = function (a) {
	return {ctor: 'Receive', _0: a};
};
var _user$project$Main$fetchRankingSummary = F2(
	function (model, url) {
		var newCmd = A3(
			_elm_lang$core$Task$perform,
			_user$project$Main$Failure,
			_user$project$Main$Receive,
			A2(_evancz$elm_http$Http$get, _user$project$Main$decode, url));
		return {ctor: '_Tuple2', _0: model, _1: newCmd};
	});
var _user$project$Main$Details = function (a) {
	return {ctor: 'Details', _0: a};
};
var _user$project$Main$detailsMatcher = A3(_sporto$hop$Hop_Matchers$match2, _user$project$Main$Details, '/', _sporto$hop$Hop_Matchers$str);
var _user$project$Main$MainRoute = {ctor: 'MainRoute'};
var _user$project$Main$mainMatcher = A2(_sporto$hop$Hop_Matchers$match1, _user$project$Main$MainRoute, '');
var _user$project$Main$matchers = _elm_lang$core$Native_List.fromArray(
	[_user$project$Main$mainMatcher, _user$project$Main$detailsMatcher]);
var _user$project$Main$routerConfig = {hash: true, basePath: '/voetbalpool/stand', matchers: _user$project$Main$matchers, notFound: _user$project$Main$MainRoute};
var _user$project$Main$urlParser = _elm_lang$navigation$Navigation$makeParser(
	function (_p19) {
		return A2(
			_sporto$hop$Hop$matchUrl,
			_user$project$Main$routerConfig,
			function (_) {
				return _.href;
			}(_p19));
	});
var _user$project$Main$update = F2(
	function (msg, model) {
		update:
		while (true) {
			var _p20 = msg;
			switch (_p20.ctor) {
				case 'Receive':
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{rankings: _p20._0.rankings}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				case 'Failure':
					var err = A2(_elm_lang$core$Debug$log, 'err', _p20._0);
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								err: _elm_lang$core$Maybe$Just(err)
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				case 'RankingReceived':
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								current: _elm_lang$core$Maybe$Just(_p20._0)
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				case 'NavigateTo':
					var command = _elm_lang$navigation$Navigation$newUrl(
						A2(_sporto$hop$Hop$makeUrl, _user$project$Main$routerConfig, _p20._0));
					return {ctor: '_Tuple2', _0: model, _1: command};
				case 'UrlUpdate':
					var _p23 = _p20._0;
					var _p22 = _p20._1;
					var newModel = _elm_lang$core$Native_Utils.update(
						model,
						{route: _p23, location: _p22});
					var _p21 = _p23;
					if (_p21.ctor === 'MainRoute') {
						var _v15 = _user$project$Main$ShowMain,
							_v16 = newModel;
						msg = _v15;
						model = _v16;
						continue update;
					} else {
						var _v17 = _user$project$Main$ShowDetails(_p21._0),
							_v18 = _elm_lang$core$Native_Utils.update(
							model,
							{route: _p23, location: _p22});
						msg = _v17;
						model = _v18;
						continue update;
					}
				case 'ShowMain':
					var newModel = _elm_lang$core$Native_Utils.update(
						model,
						{current: _elm_lang$core$Maybe$Nothing});
					return _elm_lang$core$List$isEmpty(model.rankings) ? A2(_user$project$Main$fetchRankingSummary, newModel, '/app/rankings') : {ctor: '_Tuple2', _0: newModel, _1: _elm_lang$core$Platform_Cmd$none};
				default:
					return A2(
						_user$project$Main$fetchRanking,
						model,
						A2(_elm_lang$core$Basics_ops['++'], '/app/rankings/', _p20._0));
			}
		}
	});
var _user$project$Main$urlUpdate = F2(
	function (_p24, model) {
		var _p25 = _p24;
		var msg = A2(_user$project$Main$UrlUpdate, _p25._0, _p25._1);
		return A2(_user$project$Main$update, msg, model);
	});
var _user$project$Main$init = function (_p26) {
	var _p27 = _p26;
	var _p29 = _p27._0;
	var _p28 = _p27._1;
	var newModel = {
		rankings: _elm_lang$core$Native_List.fromArray(
			[]),
		current: _elm_lang$core$Maybe$Nothing,
		err: _elm_lang$core$Maybe$Nothing,
		route: _p29,
		location: _p28
	};
	return A2(
		_user$project$Main$urlUpdate,
		{ctor: '_Tuple2', _0: _p29, _1: _p28},
		newModel);
};
var _user$project$Main$mkUrlFromRoute = function (route) {
	var _p30 = route;
	if (_p30.ctor === 'MainRoute') {
		return A2(
			_sporto$hop$Hop$matcherToPath,
			_user$project$Main$mainMatcher,
			_elm_lang$core$Native_List.fromArray(
				[]));
	} else {
		return A2(
			_sporto$hop$Hop$matcherToPath,
			_user$project$Main$detailsMatcher,
			_elm_lang$core$Native_List.fromArray(
				[_p30._0]));
	}
};
var _user$project$Main$viewRankingLine = function (_p31) {
	var _p32 = _p31;
	var url = function (uuid) {
		return _user$project$Main$mkUrlFromRoute(
			_user$project$Main$Details(uuid));
	};
	var mkRanking = function (ranking) {
		return A2(
			_elm_lang$html$Html$span,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class('clickable'),
					_elm_lang$html$Html_Events$onClick(
					_user$project$Main$NavigateTo(
						url(ranking.uuid)))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text(ranking.name)
				]));
	};
	var players = A2(
		_elm_lang$core$List$intersperse,
		_elm_lang$html$Html$text(', '),
		A2(_elm_lang$core$List$map, mkRanking, _p32._1._1));
	return A2(
		_elm_lang$html$Html$tr,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$td,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$class('pos')
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(
						_elm_lang$core$Basics$toString(_p32._0))
					])),
				A2(
				_elm_lang$html$Html$td,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$class('name')
					]),
				players),
				A2(
				_elm_lang$html$Html$td,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$class('points')
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(
						_elm_lang$core$Basics$toString(_p32._1._0))
					]))
			]));
};
var _user$project$Main$rankingsBreadCrumb = function () {
	var toRanking = _user$project$Main$NavigateTo(
		_user$project$Main$mkUrlFromRoute(_user$project$Main$MainRoute));
	return A2(
		_elm_lang$html$Html$span,
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html_Attributes$class('button-like right clickable'),
				_elm_lang$html$Html_Events$onClick(toRanking)
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html$text('stand')
			]));
}();
var _user$project$Main$viewOverview = function (rs) {
	var homelink = A2(
		_elm_lang$html$Html$p,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Main$homeBreadCrumb,
				_elm_lang$html$Html$text(' / '),
				_user$project$Main$rankingsBreadCrumb,
				_elm_lang$html$Html$text(' / ')
			]));
	var rankingViewByPoints = function (_p33) {
		var _p34 = _p33;
		var _p35 = _p34._1._1;
		var players = A2(
			_elm_lang$core$String$join,
			', ',
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.name;
				},
				_p35));
		var hdr = A2(
			_elm_lang$html$Html$p,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$strong,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(
							_elm_lang$core$Basics$toString(_p34._0))
						])),
					_elm_lang$html$Html$text(
					A2(
						_elm_lang$core$Basics_ops['++'],
						' (',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p34._1._0),
							A2(_elm_lang$core$Basics_ops['++'], ' ', 'punten): ')))),
					_elm_lang$html$Html$text(players)
				]));
		var no = _elm_lang$core$List$length(_p35);
		var nOfPlayers = _elm_lang$core$Native_Utils.eq(no, 1) ? '' : A2(
			_elm_lang$core$Basics_ops['++'],
			' (',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(no),
				' deelnemers)'));
		return A2(
			_elm_lang$html$Html$section,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$p,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('point-header')
						]),
					_elm_lang$core$Native_List.fromArray(
						[hdr]))
				]));
	};
	var toPositions = F2(
		function (pos, prs) {
			var _p36 = prs;
			if (_p36.ctor === '::') {
				var _p37 = _p36._0._1;
				var nextPos = pos + _elm_lang$core$List$length(_p37);
				return A2(
					_elm_lang$core$List_ops['::'],
					{
						ctor: '_Tuple2',
						_0: pos,
						_1: {ctor: '_Tuple2', _0: _p36._0._0, _1: _p37}
					},
					A2(toPositions, nextPos, _p36._1));
			} else {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			}
		});
	var toPointRankingsTuple = function (rs) {
		var _p38 = _elm_lang$core$List$head(rs);
		if (_p38.ctor === 'Just') {
			return {
				ctor: '_Tuple2',
				_0: function (_) {
					return _.total;
				}(_p38._0),
				_1: rs
			};
		} else {
			return {ctor: '_Tuple2', _0: -1, _1: rs};
		}
	};
	var rankingsByPoints = A2(
		toPositions,
		1,
		A2(
			_elm_lang$core$List$map,
			toPointRankingsTuple,
			A2(
				_user$project$Main$groupBy,
				function (_) {
					return _.total;
				},
				rs)));
	var rankingsViewsByPoints = A2(
		_elm_lang$html$Html$section,
		_elm_lang$core$Native_List.fromArray(
			[]),
		A2(_elm_lang$core$List$map, rankingViewByPoints, rankingsByPoints));
	var rankingsViewsByPoints2 = A2(
		_elm_lang$html$Html$table,
		_elm_lang$core$Native_List.fromArray(
			[]),
		A2(_elm_lang$core$List$map, _user$project$Main$viewRankingLine, rankingsByPoints));
	return A2(
		_elm_lang$html$Html$section,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				homelink,
				A2(
				_elm_lang$html$Html$h1,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('De stand')
					])),
				rankingsViewsByPoints2
			]));
};
var _user$project$Main$viewTop = function (ranking) {
	return A2(
		_elm_lang$html$Html$p,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Main$homeBreadCrumb,
				_elm_lang$html$Html$text(' / '),
				_user$project$Main$rankingsBreadCrumb,
				_elm_lang$html$Html$text(' / '),
				A2(
				_elm_lang$html$Html$span,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$class('button-like right')
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(ranking.name)
					])),
				_elm_lang$html$Html$text(' / ')
			]));
};
var _user$project$Main$viewRanking = function (model) {
	return A2(
		_elm_lang$html$Html$section,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Main$viewTop(model),
				_user$project$Main$viewMatches(model),
				_user$project$Main$viewBracket(model),
				_user$project$Main$viewTopscorer(model)
			]));
};
var _user$project$Main$view = function (model) {
	var vw = function () {
		var _p39 = model.current;
		if (_p39.ctor === 'Nothing') {
			return _user$project$Main$viewOverview(model.rankings);
		} else {
			return _user$project$Main$viewRanking(_p39._0);
		}
	}();
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[vw]));
};
var _user$project$Main$main = {
	main: A2(
		_elm_lang$navigation$Navigation$program,
		_user$project$Main$urlParser,
		{
			init: _user$project$Main$init,
			update: _user$project$Main$update,
			view: _user$project$Main$view,
			urlUpdate: _user$project$Main$urlUpdate,
			subscriptions: function (_p40) {
				return _elm_lang$core$Platform_Sub$none;
			}
		})
};

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
_elm_lang$core$Native_Platform.addPublicModule(Elm['Main'], 'Main', typeof _user$project$Main$main === 'undefined' ? null : _user$project$Main$main);

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

