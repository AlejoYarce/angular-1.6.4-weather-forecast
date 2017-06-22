weatherApp.controller('mainController', [
    '$scope',
    'forecastService',
    function ($scope, forecastService) {
        $scope.city = '';

        $scope.$watch('city', function () {
            forecastService.city = $scope.city;
        });
    }
]);