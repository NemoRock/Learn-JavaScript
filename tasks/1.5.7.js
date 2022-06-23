
function unique(arr) {
    return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
]
alert( unique(values) ) // Hare,Krishna,:-O


// function aclean(arr) {
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         let sorted = arr[i].toLowerCase().split("").sort().join("")
//         obj[sorted] = arr[i]
//     }
//     return Object.values(obj)
// }
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
alert( aclean(arr) ) // "nap,teachers,ear" или "PAN,cheaters,era"


function aclean(arr) {
    let uniqueItems = new Set()
    let total = []

    arr.forEach((elem) => {
        let destElem = [...elem.toLowerCase()].sort().join("")
        if (!uniqueItems.has(destElem)) {
            uniqueItems.add(destElem)
            total.push(elem)
        }
    })
    return total
}