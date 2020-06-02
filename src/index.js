const BaseConnector = require('./connector/base-connector')
const NatsConnectorWrapper = require('./connector/nats-connector')

const Publisher  = require('./events/publisher')
const Subscriber  = require('./events/subscriber')

const StoreService  = require('./store/store-service')


const MessageTransporter  = require('./transporter/message-transporter')
const NatsMessageTransporter  = require('./transporter/nats-message-transporter')


module.exports = {
    connector: {
      BaseConnector,
      NatsConnectorWrapper
    },
    events: {
        Publisher,
        Subscriber
    },
    services: {
        StoreService
    },
    transporter: {
        NatsMessageTransporter,
        MessageTransporter
    }
}