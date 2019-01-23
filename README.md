# Runte

A tiny collection and my stab at playing around with creating new data types within JS

> **Note**: None of this is easily accessible via npm as of right now since this is just an experiment

> **Note 2**: All of the code in usage is subject to change espcially the requires/import setup

## Types

### Tuple

The tuple in Runte works like the tuple in [Elm](https://package.elm-lang.org/packages/elm/core/latest/Tuple) it's a 2D data set

#### Usage

```js
const tuple = require('runte/tuple')

const foo = tuple(1, 2)

foo.toArray() // => [1, 2]
foo.map(x => x + 1).toArray() // => [2, 3]
foo.mapFirst(x => x + 1).toArray() // => [2, 2]
foo.mapSecond(x => x + 1).toArray() // => [1, 3]
foo.first() // => 1
foo.second() // => 2
```

It's important to notice here that the maps create a brand new tuple and return it. **This may be subject to change** for quality of life and usage purposes.

### Maybe

The Maybe type is a WIP currently.

The Maybe type allows for data to be there, or not. (it's maybe there)

#### Usage

```js
const { Maybe, Just, Nothing } = require('runte/Maybe')

Maybe(10).withDefault('N/A') // => 10
Maybe(null).withDefault('N/A') // => 'N/A'
Nothing() // => []
Just(10) // => 10
```

More to come and tweaks to happen on the Maybe type soon.
