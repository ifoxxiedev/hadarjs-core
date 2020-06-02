const uuid = require("uuid");

class Subscriber {

    constructor(stan, { subject, queueGroupName, ackWait }) {
        this.stan = stan;
        this.subject = subject.toString();
        
        this.queueGroupName = queueGroupName || uuid.v4()
        this.ackWait = ackWait || 5 * 1000
    }

    subscribe() {
        const sub = this.stan.subscribe(
            this.subject,
            this.queueGroupName,
            this.getSubscriptionOptions());

        sub.on('message', async (msg) => {
            console.log(`Transport message received from ${msg.getSequence()} -> ${msg.getSubject()}::${this.queueGroupName}`)
            const parsedMessage = this.parseMessage(msg)

            await this.onMessage(parsedMessage, msg)
        });

        sub.on('unsubscribed', () => {
            this.stan.close()
        })
        return sub;
    }

    parseMessage(msg) {
        const data = msg.getData();
        return typeof data === 'string' 
            ? JSON.parse(data) 
            : JSON.parse(data.toString('utf-8'))
    }

    getSubscriptionOptions() {
       return this.stan
        .subscriptionOptions()
        // .setDeliverAllAvailable()
        // .setManualAckMode(true)
        // .setAckWait(this.ackWait)
        .setDurableName(this.queueGroupName) 
    }


    onMessage() {
        throw new Error("Implement this method into subclass")
    }
}


module.exports = Subscriber