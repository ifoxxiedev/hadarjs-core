const { EventEmitter } = require('events')

class BaseRemoteEvent extends EventEmitter {

    constructor(options) {
        super(options);
        this.eventMapper = {}
    }

    on(event, ...listeners) {
        /*
            this.eventMapper = {
                [event]: [...listeners]
            }
        */
        this.eventMapper[event] = [...listeners]
        super.on(event, ...listeners)
    }


    emit(event, ...args) {
        super.emit(event, ...args)
        /*
            this.eventMapper = {
                [event]: [...listeners]
            }
        */
        // const listeners = this.eventMapper[event];
        // if (listeners && listeners.length) {
        //     super.removeListener(event, ...listeners)
        // } 
    }
}

module.exports = BaseRemoteEvent