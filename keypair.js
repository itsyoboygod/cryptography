const {generateKeyPairSync} = require('crypto')

const {privateKey, publicKey} = generateKeyPairSync('rsa',{
    modulusLength: 2048, 
    publicKeyEcoding: {
        type: 'spki',
        format: 'pam',
    },
    privateKeyEcoding: {
        type: 'pkcs8',
        format: 'pam',
        cipher: 'aes-256-cbc',
        passphrase: 'top secret'
    }
})

console.log('KeyPair is a pair of publicKey and privetKey. The sender encrypt your data with your own privet key and the public key and then send the data to the reciver. The reciver get the data and use the public key and your own privet key to decrypt the data safely')
console.log('                          ')
console.log(publicKey)
console.log(privateKey)

module.exports = {
    privateKey, publicKey
}