let d = new Date(2012, 1, 20, 3, 12)
alert( d )


function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    return days[date.getDay()]
}

let date = new Date(2022, 5, 23)
alert(getWeekDay(date))
alert( getLocalDay(date) )

function getLocalDay(date) {
    let day = date.getDay()
    if (day === 0) {
        day = 7
    }
    return day
}


alert(getDateAgo(date, 1))
alert(getDateAgo(date, 2))
alert(getDateAgo(date, 365))

function getDateAgo(date, days) {
    let dateCopy = new Date(date)
    dateCopy.setDate(date.getDate() - days)
    return dateCopy.getDate()
}


function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0)
    return date.getDate()
}

alert( getLastDayOfMonth(2019, 0) )
alert( getLastDayOfMonth(2022, 1) )
alert( getLastDayOfMonth(2020, 1) )
alert( getSecondsToday() )

function getSecondsToday() {
    return (Date.now() - (new Date((new Date())
        .getFullYear(), (new Date()).getMonth(), (new Date()).getDate())).getTime()) / 1000;
}



alert( formatDate(new Date(new Date - 1)) ) // "прямо сейчас"
alert( formatDate(new Date(new Date - 30 * 1000)) ) // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ) // "5 мин. назад"
alert( formatDate(new Date(new Date - 86400 * 1000)) ) // вчера

function formatDate(date) {
    let diff = new Date() - date
    if (diff < 1000) {
        return 'прямо сейчас'
    }
    let sec = Math.floor(diff / 1000)
    if (sec < 60) {
        return sec + ' сек. назад'
    }
    let min = Math.floor(diff / 60000)
    if (min < 60) {
        return min + ' мин. назад'
    }
    let d = date
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2))
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':')
}