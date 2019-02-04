const { EventEmitter } = require('events');

/**
 * A very classy class with lots of class
 * @extends EventEmitter
 */
class ClassyClass extends EventEmitter {
    /**
     * Constructs a thing
     */
    constructor() {
        super();

        /**
         * Just some thing
         * @type {?number}
         */
        this.thing = 42;
    }
    /**
     * Does some stuff
     * @param {?string} stuff Stuff to do
     * @param {StuffDoer} doer Callback do to the stuff
     * @returns {?number} A thing
     */
    doStuff(stuff, doer) {
        console.log(`Doing some pretty crazy stuff with ${stuff}`);
        doer(stuff);
        return this.thing;
    }

    /**
     * Who knows what this does
     * @emits ClassyClass#thingDone
     */
    hmm() {
        console.log('Hmm..');

        /**
         * Emitted when a thing is done
         * @event ClassyClass#thingDone
         * @param {SomeThing} thingy Thing
         */
        this.emit('thingDone', 4242424242);
    }
}
/**
 * Just some thing
 * @typedef {Object} SomeThing
 * @property {number} someNumber A really cool number
 */

/**
 * Does some stuff with some other stuff
 * @callback StuffDoer
 * @param {?string} stuff Stuff to use to do stuff
 */

/**
 * @external ClientOptions
 * @see {@link http://hydrobolt.github.io/discord.js/#!/docs/tag/master/typedef/ClientOptions}
 */

/**
 * Oh boy, an export!
 * @type {function}
 */
module.exports = ClassyClass;
