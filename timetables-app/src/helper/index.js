export const getFormatedDate = (date) => {
    const day = getWeekDay(date); 
    const dayNumber = date.getDate();
    const month = getMonth(date);
    
    return day + ', ' + dayNumber + ' ' + month;
}

function getMonth(date){
    let months = ['Янв.', 'Февр.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.',];

    return months[date.getMonth()]
}

export const DAYS_OF_WEEK = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

export function getWeekDay(date) {

    return DAYS_OF_WEEK[date.getDay()];
  }