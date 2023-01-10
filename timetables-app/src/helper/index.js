export const getFormatedDate = () => {
    const date = new Date();
    const day = getWeekDay(date); 
    const dayNumber = date.getDate();
    const month = getMonth(date);
    
    return day + ', ' + dayNumber + ' ' + month;
}

function getMonth(date){
    let months = ['Янв.', 'Февр.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.',];

    return months[date.getMonth()]
}

export function getWeekDay(date) {
    let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    return days[date.getDay()];
  }