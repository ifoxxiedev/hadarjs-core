class StoreResolver {

    resolve() {
        throw new Error("Implement this method into subclass!");
    }

    store() {
        throw new Error("Implement this method into subclass!");
    }

    unstore() {
        throw new Error("Implement this method into subclass!");
    }

    getStoredServices() {
        throw new Error("Implement this method into subclass!");
    }

    getStoreService() {
        throw new Error("Implement this method into subclass!");
    }
}

module.exports = StoreResolver