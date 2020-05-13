const _type = require('./_internal/_types').Maybe
const { isNil } = require('kyanite')

function Nothing () {
  return []
}

function Just (a) {
  return a
}

function Maybe (x) {
  function withDefault (n) {
    if (isNil(x)) {
      return n
    }

    return x
  }

  function zero (x) {
    return x === 0
  }

  return {
    withDefault,
    zero,
    constructor: Maybe,
    '@@type': _type,
    [Symbol.hasInstance]: instance => {
      return instance['@@type'] === _type
    }
  }
}

module.exports = {
  Maybe,
  Just,
  Nothing
}
