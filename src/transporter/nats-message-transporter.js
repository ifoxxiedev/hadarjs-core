const Subscriber = require('../events/subscriber');
const MessageTransporter = require('./message-transporter')

class NatsMessageTransporter extends MessageTransporter {
    constructor(stan) {
        super()
        this.stan = stan;
    }

    createPublisher() {

    }

    createSubscriber() {
        return new Subscriber(this.stan, {
            subject: process.env.__DISCOVERY_RECEIVE_MESSAGES,
            ackWait: 1000 * 5,
            queueGroupName: process.env.__DISCOVERY_QUEUE_GROUP_NAME
        })
    }
}

module.exports = NatsMessageTransporter