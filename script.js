let password1 = document.getElementById('password')
let length1 = 18;

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let numbers = "0123456789"
let symbol = "!@#$%^&*()/*-+<>|:;`~__\\="

let allchars = uppercase + lowercase + numbers + symbol

function createpass(){
    let password= ""
    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]
    
    while(length1 > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)]
    }
    password1.value = password
}
function copypassword(){
    password1.select()
    document.execCommand("copy")
}