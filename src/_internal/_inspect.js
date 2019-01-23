const { type } = require('kyanite')

function arrInspect (list) {
  return list.length
    ? list.map(_inspect).reduce((acc, v) => acc + ',' + v)
    : list
}

function _inspect (x) {
  if (x && type(x._inspect) === 'Function') {
    return `${x._inspect()}`
  }

  switch (type(x)) {
    case 'Function':
      return 'Function'
    case 'Array':
      return `[${arrInspect(x)}]`
    case 'Object':
      return `{ ${Object.keys(x).reduce((acc, key) => {
        return acc.concat([`${key}:${inspect(x[key])}`])
      }, []).join(', ')} }`
    case 'String':
      return `"${x}"`
    case 'Symbol':
    case 'Date':
      return `${x.toString()}`
    default:
      return `${x}`
  }
}

module.exports = _inspect
