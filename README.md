# Yet another timer

`yet-another-timer` is exactly what it sounds like - another timer to measure
execution time. Simple to use and without any whistles or bells - just the bare
essentials.

This module has been built with ES2015 and uses [Babel](https://babeljs.io/). If you're just using this
module without modifying it, you can use it as-is. For development, a `gulpfile`
has been included which takes care of transpiling (see the section below).

# Install

```
npm i yet-another-timer
```

# Usage

```js
var Timer = require('yet-another-timer');

var timer = new Timer();

// Start the timer
timer.start();
// Simulate some sort of work...
setTimeout(function() {
	// Work is done
	timer.stop();

	// Display the result
	console.log('Timer ran for %dms', timer.time().toFixed(3));
}, 500);
```

# Development

The ES2015 file is located in the `src` folder. Gulp outputs the transpiled file
to `dist`. The module's `package.json` is set up to use the transpiled version
in `dist` by default.

If you made modifications to the file in `src`, you'll need to run `gulp` in order
for Babel to transpile the code. Then you can use this module anywhere in your code
as you're used to.

# Changelog

<<<<<<< HEAD
* 0.0.2 - 11 January 2016
 * Add `peek()` (documentation to follow)
 * Move `running` flag to before `hrtime` start
 * Update license year
=======
* 0.0.2 - 29 December 2015
  * `stop()` now returns the execution time directly as well
>>>>>>> 4e85704aa117b35df20b8919339d381647865fd6
* 0.0.1 - 28 December 2015
  * First commit
  * Published on npm

# License

Copyright 2016 Michiel van der Velde.

This software is licensed under the [MIT License](LICENSE)
