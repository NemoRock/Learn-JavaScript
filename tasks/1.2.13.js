
for (i=1; i<11; i++){
    if (i%2===0){
        alert(i)
    }
}





let i = 0
while (i < 3) {

    alert( `number ${i}!` )
    i++
}





for (i=1 ; i <= 100 && i;){
    i = prompt('Введите число больше ста:', '')
}






n=100
for (i = 2; i <= n; i++) {
    flag = true
    for (j = 2; j < i; j++) {
        if (i % j === 0) {
            flag = false
            break
        }
        }
    if (flag) alert(i)
}
