// const { scryptSync, randomBytes, timingSafeEqual } = require('crypto-js')
const { scryptSync, randomBytes, timingSafeEqual } = require('crypto')

function signup(password, email){
    const salt = randomBytes(16).toString('hex')
    const hashedPassword = scryptSync(password, salt, 64).toString('hex')

    const user = { email, password: `${salt}:${hashedPassword}` }

    users.push({user})

    return user
}

function login(email, password){
    const user = users.find(v => v.email === email)

    const [salt, key] = password.split(':')
    const hashedBuffer = scryptSync(password, salt, 64)

    const keyBuffer = Buffer.from(key, 'hex')
    const match = timingSafeEqual(hashedBuffer, keyBuffer)

    if (match) {
        return 'login success!'
    } else {
        return 'login fail!'
    }
}
let users = ['@User']
let email = 'sdasdasdasdasdas'
let password = 'user_password'
const resultlogin = login(email, password)
const resultsignup = signup(email, password, users)

console.log(resultsignup)
console.log(resultlogin)

