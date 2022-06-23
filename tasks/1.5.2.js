//
let x = +prompt('Введите первое число:', '0')
let y = +prompt('Введите второе число:', '0')
alert(x+y)


alert( 6.35.toFixed(2))



function readNumber() {
    let num

    do {
        num = prompt("Введите число", 0)
    } while ( !isFinite(num) )

    if (num === null || num === '') return null

    return +num
}
alert(readNumber())




alert( random(1, 5) ) // 1.2345623452
alert( random(1, 5) ) // 3.7894332423
alert( random(1, 5) ) // 4.3435234525

function random(min, max) {
    return min + Math.random() * (max - min)
}



alert( randomInteger(1, 5) ) // 1
alert( randomInteger(1, 5) ) // 3
alert( randomInteger(1, 5) ) // 5

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
}