# ordr

[![NPM](https://nodei.co/npm/ordr.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ordr/)

> Given a string representing one Unicode character, return an integer representing the Unicode code point of that character.  
ES6 implementation of **[`Python built-in ord()`](https://docs.python.org/3.6/library/functions.html#ord)** function

This is the inverse of **[`char`](https://www.npmjs.com/package/char)**.


## Install

```
$ npm install --save ordr
```


## Usage

```js
const ord = require('ordr')

console.log(ord('A'))
// => 65

console.log(ord('a'))
// => 97

console.log(ord('€'))
// => 8364

console.log(ord('@'))
// => 64
```


## License

MIT © **[`Nicolás Quiroz`](https://nicolasquiroz.com)**
