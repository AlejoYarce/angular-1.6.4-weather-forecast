function changeToDay() {
    return function(date) {
        return moment(date * 1000).format('dddd');
    };
}

function changeToDate() {
    return function(date) {
        return moment(date * 1000).format('DD-MM-YYYY');
    };
}

function changeToCelsius() {
    return function(kGrade) {
        return (kGrade -273.15).toFixed(2) + ' °C';
    }
}

weatherApp
    .filter('changeToDay', changeToDay)
    .filter('changeToDate', changeToDate)
    .filter('changeToCelsius', changeToCelsius);