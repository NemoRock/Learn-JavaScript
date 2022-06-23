function sumTo(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}
function sumToR(n) {
    if (n === 1) return 1
    return n + sumTo(n - 1)
}
function sumToF(n) {
    return n * (n + 1) / 2;
}
function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1
}
// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2)
// }
function fib(n) {
    let a = 1
    let b = 1
    for (let i = 3; i <= n; i++) {
        let c = a + b
        a = b
        b = c
    }
    return b
}
alert(sumTo(100))
alert(sumToF(100))
alert(sumToR(100))
alert(factorial(10))
alert(fib(13))
alert(fib(77))

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}
printListCycle(list)
printListRecursion(list)
printReverseListCycle(list)
printReverseListRecursion(list)

function printListCycle(list){
    let tmp = list
    while (tmp) {
        alert(tmp.value)
        tmp = tmp.next
    }
}
function printListRecursion(list){
    alert(list.value)
    if (list.next) {
        printListRecursion(list.next)
    }
}
function printReverseListRecursion(list) {
    if (list.next) {
        printReverseListRecursion(list.next)
    }
    alert(list.value)
}
function printReverseListCycle(list) {
    let arr = []
    let tmp = list
    while (tmp) {
        arr.push(tmp.value)
        tmp = tmp.next
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        alert( arr[i] )
    }
}


