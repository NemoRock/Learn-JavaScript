Function.prototype.defer = function(ms) {
    setTimeout(this, ms)
}
function f1() {
    alert("Hello!")
}
f1.defer(1000) // выведет "Hello!" через 1 секунду




Function.prototype.defer = function(ms) {
    let f2 = this
    return function(...args) {
        setTimeout(() => f2.apply(this, args), ms)
    }
}
function f(a, b) {
    alert( a + b )
}
f.defer(4000)(1, 2) // выведет 3 через 4 секунды