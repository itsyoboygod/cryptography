const { publicEncrypt, privateDecrypt} = require('crypto')
const {publicKey, privateKey} = require('./keypair')

const message = 'Bruuuuh!'

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
)

console.log(encryptedData.toString('hex'),'---')

const dencryptedData = privateDecrypt(
    privateKey,
    encryptedData
)

console.log(dencryptedData.toString('utf-8'),'---')