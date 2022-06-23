let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}
alert( sumSalaries(salaries) ) // 650

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0)
}


let user = {
    name: 'John',
    age: 30
}
alert( count(user) ) // 2

function count(obj) {
    return Object.keys(obj).length
}