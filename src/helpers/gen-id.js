const crypto = require("crypto");

module.exports = str => {
    const size = str ? str.length : Math.ceil(Math.random() * 5 - 1 + 1)
    return crypto.randomBytes(size).toString('hex')
}