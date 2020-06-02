class ConnectorWrapper {

    connect() {
        throw new Error("Implement this method here!")
    }

    setConnection(conn) {
        this.client = conn;
    }

    get connection() {
        if(!this.client) throw new Error("Call method 'connect' before get connection!")
        return this.client;
    }
}


module.exports = ConnectorWrapper;