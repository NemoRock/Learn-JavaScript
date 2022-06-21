
languageNameJS = prompt('Какое «официальное» название JavaScript?','')

if (languageNameJS === 'ECMAScript'){
    alert('Верно!')
}else {
    alert('Не знаете? ECMAScript!')
}



signNumber = prompt('Укажите число', '')
if (signNumber>0){
    alert(1)
}else if (signNumber<0){
    alert(-1)
} else {
    alert(0)
}



let result
result = (a+b<4) ?'Мало':'Много'


let login
let message
message =(login === 'Сотрудник')?'Привет':(login === 'Директор')?
    'Здравствуйте':(login === '')?'Нет логина':''