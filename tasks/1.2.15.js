
function checkAge(age){
    return age>18?true:confirm('Родители разрешили?')
}

function checkAge2(age){
    return (age>18)||confirm('Родители разрешили?')
}



function min(a,b){
    return a<b ? a : b
}


x = +prompt("Введите натуральное число:", '')
n = +prompt("Введите степень числа:", '')

if (Number.isInteger(x)&&Number.isInteger(n)){
    pow(x, n)
} else {
    alert('Вы указали не числа')
}

function pow(x,n){
        if (x<1){
            alert('Вы указали не натуральное число')
        }else if (x===1||n===0){
            alert(1)
        }else{alert(x**n)}
}


