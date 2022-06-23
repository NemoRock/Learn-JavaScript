
alert(camelize("background-color"))
alert(camelize("list-style-image"))
alert(camelize("-webkit-transition"))

function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('')
}




let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert( filtered ) // 3,1
alert( arr ) //5,3,8,1

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b))
}




let arr = [5, 3, 8, 1]
filterRangeInPlace(arr, 1, 4)
alert( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
        if (val < a || val > b) {
            arr.splice(i, 1)
            i--
        }
    }
}

let arr = [5, 2, 1, -10, 8]
arr.sort((a, b) => b - a)
alert( arr )

let arr = ["HTML", "JavaScript", "CSS"]
let sorted = copySorted(arr)
alert( sorted ) // CSS, HTML, JavaScript
alert( arr ) // HTML, JavaScript, CSS (без изменений)

function copySorted(arr) {
    return arr.slice().sort()
}


let calc = new Calculator
alert( calc.calculate("3 + 7") ) // 10
let powerCalc = new Calculator
powerCalc.addMethod("*", (a, b) => a * b)
powerCalc.addMethod("/", (a, b) => a / b)
powerCalc.addMethod("**", (a, b) => a ** b)
let result = powerCalc.calculate("2 ** 3")
alert( result ) // 8


function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    }
    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN
        }
        return this.methods[op](a, b)
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func
    }
}


let vasya = { name: "Вася", age: 25 }
let petya = { name: "Петя", age: 30 }
let masha = { name: "Маша", age: 28 }
let users = [ vasya, petya, masha ]

let names = users.map(item => item.name)
    alert( names ) // Вася, Петя, Маша


let vasya = { name: "Вася", surname: "Пупкин", id: 1 }
let petya = { name: "Петя", surname: "Иванов", id: 2 }
let masha = { name: "Маша", surname: "Петрова", id: 3 }
let users = [ vasya, petya, masha ]

let usersMapped = users.map(user => ({fullName: `${user.name} ${user.surname}`,id: user.id
}))

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин


let vasya = { name: "Вася", age: 25 }
let petya = { name: "Петя", age: 30 }
let masha = { name: "Маша", age: 28 }
let arr = [ vasya, petya, masha ]
sortByAge(arr)
alert(arr[0].name) // Вася
alert(arr[1].name) // Маша
alert(arr[2].name) // Петя

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1)
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        [array[i], array[j]] = [array[j], array[i]]
    }
}
let arr = [1, 2, 3,4,5]
shuffle(arr)
alert(arr)
shuffle(arr)
alert(arr)
shuffle(arr)
alert(arr)


let vasya = { name: "Вася", age: 25 }
let petya = { name: "Петя", age: 30 }
let masha = { name: "Маша", age: 29 }
let arr = [ vasya, petya, masha ]
alert(getAverageAge(arr)) // 28

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length
}


function unique(arr) {
    let result = []
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str)
        }
    }
    return result
}
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
]
alert( unique(strings) ) // кришна,харе,:-O


