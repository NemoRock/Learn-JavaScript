
let age
if (14 <= age && age <= 90){
   // alert('14 <= age <= 90')
}
if (14 < age || age < 90){
   // alert('14 > age || age > 90')
}
if (!(14 <= age && age <= 90)){
   // alert('14 > age || age > 90')
}



login = prompt('Ваш логин?','')
if (login==='Админ'){
    password = prompt('Введите пароль:', '')
    if (password === null){
        alert('Отменено')
    }
    else if (password === 'Я главный'){
        alert('Здравствуйте!')
    }else {
        alert('Неверный пароль')
    }
} else if  (login === null){
    alert('Отменено')
} else{
    alert('Я вас не знаю')
}