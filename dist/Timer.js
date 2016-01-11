'use strict';

/**
 * yet-another-timer
*/

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = exports.Timer = (function () {
	function Timer() {
		_classCallCheck(this, Timer);

		this.reset();
	}

	/**
  * Start the timer
 */

	_createClass(Timer, [{
		key: 'start',
		value: function start() {
			if (this._ran) throw new Error('timer already ran. use reset() first');
			if (this._running) throw new Error('timer currently running');
			this._running = true;
			this._hrtime = process.hrtime();
		}

		/**
   * Stop the timer
  */

	}, {
		key: 'stop',
		value: function stop() {
			if (!this._running) throw new Error('timer not running');
			this._hrtime = process.hrtime(this._hrtime);
			this._runtime = this._hrtime[0] * 1000 + this._hrtime[1] / 1000000;
			this._running = false;
			this._ran = true;
			return this._runtime;
		}

		/**
   * Get the timer's time
  */

	}, {
		key: 'time',
		value: function time() {
			if (!this._ran) throw new Error('timer not ran yet');
			if (this._running) throw new Error('timmer currently running');
			return this._runtime;
		}

		/**
   * Peek the current run time without stopping the timer
  */

	}, {
		key: 'peek',
		value: function peek() {
			if (!this._running) throw new Error('timer not running');
			var hrtime = process.hrtime(this._hrtime);
			return hrtime[0] * 1000 + hrtime[1] / 1000000;
		}

		/**
   * Return true if the timer has ran and finished
  */

	}, {
		key: 'isFinished',
		value: function isFinished() {
			return this._ran;
		}

		/**
   * Rest timer variables
  */

	}, {
		key: 'reset',
		value: function reset() {
			this._hrtime = null;
			this._runtime = 0;
			this._running = false;
			this._ran = false;
		}
	}]);

	return Timer;
})();