const passwordField= document.getElementById('Password')
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialSymbols = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
const length=12;

const createPassword =()=>{
    let password='';
    password +=uppercase[Math.floor(Math.random() * uppercase.length)]
    password +=lowercase[Math.floor(Math.random() *lowercase.length)]
}
