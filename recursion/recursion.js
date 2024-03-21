function print(str){
    str = str.replace(/[\n]/g, '<br/>')
    str = str.replace(/[ \t]/g, '&nbsp;')
    let content = document.getElementById('content')
    content.innerHTML += str + '<br/>'
}

let counter = 0
function Inception (){
    if(counter > 0){
        return "Done!"
    }
    counter++
    Inception()
}

console.log(Inception())

let counter2 = 0
function Inception2 (){
    if(counter2 > 0){
        return "Done!"
    }
    counter2++
    return Inception2()
}

console.log(Inception2())

print(`
let counter = 0
function Inception (){
    if(counter > 0){
        return "Done!"
    }
    counter++
    Inception()
}

console.log(Inception())
// undefined

let counter2 = 0
function Inception2 (){
    if(counter2 > 0){
        return "Done!"
    }
    counter2++
    return Inception2()
}

console.log(Inception2())
// Done!
`)