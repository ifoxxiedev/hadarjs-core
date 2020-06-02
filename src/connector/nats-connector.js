const nats = require('node-nats-streaming')
const ConnectorWrapper = require('./base-connector')

class NatsWrapper extends ConnectorWrapper {

    connect(clusterId, clientId, { url }) {
        return new Promise((r, j) =>  {
            this.setConnection(nats.connect(clusterId, clientId, { url: url || process.env.NATS_HOST || 'http://0.0.0.0:4222' }));

            this.client.on('connect', () => {
                console.log("Nats streming server has been connected")
                r(this.client)
            })
            this.client.on('error', (err) => {
                console.error("Error to connect to nats streming server")
                j(err)
            })

            this.client.on('close', () => {
                console.log("Nats connection has been closed")
                this.client = null;
            })

            
        })
    }
}

module.exports = new NatsWrapper()