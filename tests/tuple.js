const test = require('tape')
const tuple = require('../src/Tuple')

test('Tuple -- Creating works', t => {
  const tu = tuple(1, 2)

  t.same(tu.toArray(), [1, 2], 'Tuple created and shifted correctly')
  t.end()
})

test('Tuple -- Built in functionality', t => {
  const tu = tuple(1, 2)

  t.same(tu.first(), 1, 'Got first tuple value')
  t.same(tu.second(), 2, 'Got second tuple value')
  t.same(tu.toArray(), [1, 2], 'Shifted to an array correctly')
  t.end()
})

test('Tuple -- built in map functionality no mutation', t => {
  const tu = tuple(1, 2)

  t.same(tu.map(x => x * 2).toArray(), [2, 4], 'Mapped over both values')
  t.same(tu.mapFirst(x => x - 1).toArray(), [0, 2], 'Mapped only the first value')
  t.same(tu.mapSecond(x => x - 1).toArray(), [1, 1], 'Mapped over only the second value')
  t.end()
})
