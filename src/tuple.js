/**
 * The tuple in runte is associated with the "product of type" theory
 * In our case a tuple is a duo of two bits of information (2D points)
 */
const _curry2 = require('./_internal/_curry2')
const _type = require('./_internal/_types').Tuple
const _isNil = require('./_internal/_isNil')

function Tuple (a, b) {
  if (_isNil(a) || _isNil(b)) {
    throw new Error('Tuples must have 2 values to set')
  }
  const slots = [].slice.call([a, b])

  function first () {
    return slots[0]
  }

  function second () {
    return slots[1]
  }

  function toArray () {
    return slots
  }

  function map (fn) {
    return Tuple(...slots.map(fn))
  }

  function mapFirst (fn) {
    return Tuple(fn(slots[0]), slots[1])
  }

  function mapSecond (fn) {
    return Tuple(slots[0], fn(slots[1]))
  }

  return {
    first,
    second,
    toArray,
    map,
    mapFirst,
    mapSecond,
    constructor: Tuple,
    '@@type': _type
  }
}

module.exports = _curry2(Tuple)
