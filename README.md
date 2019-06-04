# Korma

### Example

```js
var korma = require('korma');
var seeya = korma(function(str1, str2){
  return str1.concat(' ').concat(str2);
}, 'Thats all folks.');

seeya('See you next time'); // 'Thats all folks. See you next time'
```

## Installation

### Node

To install korma in a Node application use npm.

```
$ npm install korma
```

## Test

To run tests use npm.

```
$ npm install
$ npm test
```
## License

[MIT](LICENSE)

Copyright (c) 2014-2019 [Chris Johnson](https://github.com/cmjio)
