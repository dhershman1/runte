const test = require('tape')
const { type } = require('kyanite')
const { Maybe } = require('../src/maybe')

test('Maybe', t => {
  const m = Maybe(0)

  t.true(type(m) === 'Object', 'Maybe returns a proper object back')
  t.end()
})

test('Maybe -- With Default', t => {
  t.same(Maybe(9).withDefault('N/A'), 9, 'Did not use default because value exists')
  t.same(Maybe(null).withDefault('N/A'), 'N/A', 'Used default because value is nil')
  t.end()
})
