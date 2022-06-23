
let ucFirst = function (str){
    if (!str) return str
    return str[0].toUpperCase() + str.slice(1);
 }
alert( ucFirst("вася") )



let checkSpam = function (str){
    let lowerStr = str.toLowerCase()
    return lowerStr.includes('viagra') || lowerStr.includes('xxx')
}
alert(checkSpam('buy ViAgRA now'))
alert(checkSpam('free xxxxx'))
alert(checkSpam("innocent rabbit"))



function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str
}
alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
alert(truncate("Всем привет!", 20))



alert( extractCurrencyValue('$120') === 120 )
function extractCurrencyValue(str) {
    return +str.slice(1)
}