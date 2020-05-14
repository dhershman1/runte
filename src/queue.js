const _type = require('./_internal/_types').Queue

function Queue (...list) {
  let data = [...list]
  let size = list.length

  function enqueue (d) {
    data = Queue(data.concat(d))
    size += 1

    return data
  }

  function dequeue () {
    size -= 1
    data = data.slice(1)

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
