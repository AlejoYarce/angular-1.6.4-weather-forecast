weatherApp.controller('forecastController', [
    '$scope',
    'forecastService',
    '$location',
    'usSpinnerService',
    function ($scope, forecastService, $location, usSpinnerService) {
        $scope.days = 7;
        $scope.city = forecastService.city;

        if ( $scope.city ) {
            forecastService.getForecastByCity($scope.city, $scope.days).then(function (result) {
                usSpinnerService.spin('spinner-1');

                setForecast(result);
            });
        } else {
            $location.path('/');
        }

        $scope.subtractDays = function() {
            usSpinnerService.spin('spinner-1');

            var days = $scope.days;
            days--;

            if ( days < 1 ) {
                days = 1;
            }

            $scope.days = days;
            forecastService.getForecastByCity($scope.city, $scope.days).then(function (result) {
                setForecast(result);
            });
        };

        $scope.changeDay = function() {
            usSpinnerService.spin('spinner-1');

            var days = $scope.days;

            if ( days < 1 ) {
                days = 1;
            } else if ( days > 14 ) {
                days = 14;                
            }

            $scope.days = days;
            forecastService.getForecastByCity($scope.city, $scope.days).then(function (result) {
                setForecast(result);
            });
        };

        $scope.addDays = function() {
            usSpinnerService.spin('spinner-1');

            var days = $scope.days;
            days++;

            if ( days > 14 ) {
                days = 14;
            }

            $scope.days = days;
            forecastService.getForecastByCity($scope.city, $scope.days).then(function (result) {
                setForecast(result);
            });
        };

        function setForecast (result) {
            $scope.forecast = result.list;
            $scope.coord = result.city.coord.lat + ', ' + result.city.coord.lon;
            usSpinnerService.stop('spinner-1');
        };
    }
]);