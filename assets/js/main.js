/* Clock */
const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes'),
      seconds = document.getElementById('clock-seconds')

const clock = () => {
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6
        
    // Rotação dos elementos
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000) // 1000 = 1seg

/* Texto da Hora e data */
const textHour = document.getElementById('text-hour'),
      textMinute = document.getElementById('text-minutes'),
      textAmPm = document.getElementById('text-ampm'),
      dateDay = document.getElementById('date-day'),
      dateMonth = document.getElementById('date-month'),
      dateYear = document.getElementById('date-year')

const clockText = () => {
    let date = new date()

    let hh = date.getHours(),
    ampm,
    mm = date.getMinutes(),
    day = date.getDate (),
    month = date.getMonth (),
    year = date.getFullYear ()

    /* Trocando de 12 para 24 */

    // if( hh >= 12){
    //     hh =  - 12
    //     ampm = 'PM'
    // }else{
    //     ampm = 'AM'
    // }

    if(hh == 0){hh = 12}

    if(hh < 10){hh == `0${hh}`}

    textHour.innerHTML = `${hh}:`
    textMinute.innerHTML = mm
}
setInterval(clockText, 1000)