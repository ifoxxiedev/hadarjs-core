class Publisher {
    constructor(stan, { subject }) {
        this.stan = stan;
        this.subject = subject;
    }

    publish(data) {
        this.stan.publish(this.subject, Buffer.from(JSON.stringify(data)), (err, result) => {
            if (err) return this.emit('error', err);
            this.onPublished(result)
        });
    }

    onPublished() {
        throw new Error("Implement this method into subclass")
    }
}

module.exports = Publisher