const { createHmac } = require('crypto')

console.log('                          ')
console.log(`                           
    ██╗░░██╗███╗░░░███╗░█████╗░░█████╗░                      
    ██║░░██║████╗░████║██╔══██╗██╔══██╗                      
    ███████║██╔████╔██║███████║██║░░╚═╝                      
    ██╔══██║██║╚██╔╝██║██╔══██║██║░░██╗                      
    ██║░░██║██║░╚═╝░██║██║░░██║╚█████╔╝                      
    ╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝░╚════╝░                      
                                       `)
console.log('                          ')

console.log('HMAC: Hash-Based Message Authentication Code. Its a hash that also requires a password, so the only person that can create the same hash signature must also have the coresponded password or key')
console.log('                          ')
console.log('---> message: nice coc bro 🍆 👍 <---')
console.log('                          ')
console.log('key1: secret_key')

const key = 'secret_key'
const message = 'nice coc bro 🍆 👍'

const hmac = createHmac('sha256', key).update(message).digest('hex')
console.log(hmac)
// --------------------------------------
const key2 =  'secret_key_2'
const hmac2 = createHmac('sha256', key2).update(message).digest('hex')

console.log('                          ')
console.log('key2: secret_key_2')
console.log(hmac2)
