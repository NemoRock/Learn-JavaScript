
function makeCounter() {
    let count = 0
    function counter() {
        return count++
    }
    counter.set = value => count = value
    counter.decrease = () => count--
    return counter
}
alert(makeCounter())



sum(1)(2)
sum(1)(2)(3)
sum(5)(-1)(2)
sum(6)(-1)(-2)(-3)
sum(0)(1)(2)(3)(4)(5)

function sum(a) {
    let currentSum = a
    function f(b) {
        currentSum += b
        return f
    }
    f.toString = function() {
        return currentSum
    }
    return f
}
