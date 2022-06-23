let styles = ['Джаз', 'Блюз']
styles.push('Рок-н-ролл')
styles[Math.floor((styles.length - 1) / 2)] = 'Классика'
alert( styles.shift() )
styles.unshift('Рэп', 'Регги')
alert(styles)




function sumInput() {
    let numbers = []
    for(;;) {
        let value = prompt("Введите число", '0')
        if (value === "" || value === null || !isFinite(value)) break
        numbers.push(+value)
    }
    let sum = 0
    for (let number of numbers) {
        sum += number
    }
    return sum
}
alert(sumInput())



alert(getMaxSubSum([-1, -2, -3])) //0
alert(getMaxSubSum([-1, 2, 3, -9])) //5
alert(getMaxSubSum([2, -1, 2, 3, -9])) //6
alert(getMaxSubSum([-1, 2, 3, -9, 11])) //11
alert(getMaxSubSum([-2, -1, 1, 2])) //3
alert(getMaxSubSum([100, -9, 2, -3, 5])) //100
alert(getMaxSubSum([1, 2, 3])) //6

function getMaxSubSum(arr) {
    let maxSum = 0
    let partialSum = 0
    for (let value of arr) {

        if (value + partialSum >= 0) {
            maxSum += value
        } else {maxSum = 0}
        if (maxSum > partialSum) partialSum = maxSum
    }
    return partialSum
}
