let user = {
    name: "John",
    years: 30
}
let {name, years: age, isAdmin = false} = user
alert( name ) // John
alert( age ) // 30
alert( isAdmin ) // false



let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}
alert(topSalary(salaries))
function topSalary(salaries) {
    let max = 0
    let maxSalariesName = null
    for(const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary
            maxSalariesName = name
        }
    }
    return maxSalariesName
}