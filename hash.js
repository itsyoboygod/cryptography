const { createHash } = require('crypto')

function hash(input){
    return createHash('sha256').update(input).digest('hex')
}

console.log('                          ')
console.log(`                          
    ██╗░░██╗░█████╗░░██████╗██╗░░██╗
    ██║░░██║██╔══██╗██╔════╝██║░░██║
    ███████║███████║╚█████╗░███████║
    ██╔══██║██╔══██║░╚═══██╗██╔══██║
    ██║░░██║██║░░██║██████╔╝██║░░██║
    ╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝                
                                       `)
console.log('                          ')
console.log('Hashing: get a input data and transform the data into a mixed/fixed_length value. But its dificult to reverse engenieer the message')
console.log('                          ')

const prompt = require('prompt-sync')();
const password_1 = prompt('Enter your first password/key: ');
console.log(`Psswd/Key 1: ${password_1}`);

const password_2 = prompt('Enter your second password/key: ');
console.log(`Psswd/Key 2: ${password_2}`);

let password = 'hi mom!'
const hash1 = hash(password_1)
console.log('                          ')
console.log(`hash1 : psswd = ${password_1}`)
console.log(hash1)
console.log('                          ')

    password = 'hi mom!'
const hash2 = hash(password_2)
console.log(`hash1 : psswd = ${password_2}`)
console.log(hash2)
console.log('---------------------------')

const match = hash1 === hash2
console.log(match ? '✔️ psswd matched !' : ' ❌ psswd does not match !')
