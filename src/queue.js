const { prepend, take } = require('kyanite')
const _type = require('./_internal/_types').Queue

function Queue (...list) {
  let data = [...list]
  let size = list.length

  function enqueue (d) {
    data = Queue(prepend(d, data))
    size += 1

    return data
  }

  function dequeue () {
    size -= 1
    data = take(size, data)

    return data
  }

  return {
    enqueue,
    dequeue,
    size,
    constructor: Queue,
    '@@type': _type,
    [Symbol.hasInstance]: instance => {
      return instance['@@type'] === _type
    }
  }
}

module.exports = Queue
