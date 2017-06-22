weatherApp.controller('mainController', [
    '$scope',
    '$location',
    'forecastService',
    function ($scope, $location, forecastService) {
        $scope.city = '';

        $scope.$watch('city', function () {
            forecastService.city = $scope.city;
        });

        $scope.getForecast = function() {
            $location.path('/forecast');
        }
    }
]);