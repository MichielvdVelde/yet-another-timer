'use strict';

/**
 * yet-another-timer
*/
export class Timer {
	constructor() {
		this.reset();
	}

	/**
	 * Start the timer
	*/
	start() {
		if(this._ran) throw new Error('timer already ran. use reset() first');
		if(this._running) throw new Error('timer currently running');
		this._running = true;
		this._hrtime = process.hrtime();
	}

	/**
	 * Stop the timer
	*/
	stop() {
		if(!this._running) throw new Error('timer not running');
		this._hrtime = process.hrtime(this._hrtime);
		this._runtime = (this._hrtime[0] * 1000) + (this._hrtime[1] / 1000000);
		this._running = false;
		this._ran = true;
		return this._runtime;
	}

	/**
	 * Get the timer's time
	*/
	time() {
		if(!this._ran) throw new Error('timer not ran yet');
		if(this._running) throw new Error('timmer currently running');
		return this._runtime;
	}

	/**
	 * Peek the current run time without stopping the timer
	*/
	peek() {
		if(!this._running) throw new Error('timer not running');
		let hrtime  = process.hrtime(this._hrtime);
		return (hrtime[0] * 1000) + (hrtime[1] / 1000000);
	}

	/**
	 * Return true if the timer has ran and finished
	*/
	isFinished() {
		return this._ran;
	}

	/**
	 * Rest timer variables
	*/
	reset() {
		this._hrtime = null;
		this._runtime = 0;
		this._running = false;
		this._ran = false;
	}
}
