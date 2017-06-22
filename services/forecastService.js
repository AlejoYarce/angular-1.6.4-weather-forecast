weatherApp.service('forecastService', [
    '$http',
    function ($http) {
        this.city = '';
        return {
            getForecastByCity: function(city, days) {
                var apiKey = '94c211fb1aef979cc4a2ba5390e05f70';
                var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
                url += city;
                url += '&appid=' + apiKey;
                url += '&cnt=' + days;

                return $http.get(url).then(function (result) {
                    return result.data;
                })
                .catch(function(err) {
                    console.log(err);
                });
            }
        };
}]);