

function printNumbersInterval(from, to) {
    let current = from
    let timerId = setInterval(function() {
        alert(current)
        if (current === to) {
            clearInterval(timerId)
        }
        current++
    }, 1000)
}

function printNumbersTimeout(from, to) {
    go()
    function go() {
        alert(from)
        from++
        if (from <= to) {
            setTimeout(go, 1000)
        }
    }
}
printNumbersInterval(1, 10)
printNumbersTimeout(1, 10)
