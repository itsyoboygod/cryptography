const {createCipheriv, randomBytes, createDecipheriv} = require('crypto')

const message = 'wats nine plus tan?'

const key = randomBytes(32)
const iv = randomBytes(16)


const cipher = createCipheriv('aes256', key, iv)

const encryptedMessage = cipher.update(message, 'utf8', 'hex')
                            + cipher.final('hex')


const decipher = createDecipheriv('aes256', key, iv)

const dencryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8')
                            + decipher.final('utf8')


console.log('In Symmetric Encryption, both partys share the same password/key to see the chiper data')
console.log('                          ')
console.log('Shared key : ')
console.log(encryptedMessage)
console.log('data : ')
console.log(dencryptedMessage)