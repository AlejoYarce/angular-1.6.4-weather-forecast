weatherApp.directive('panelLabel', function () {
    return {
        restric: 'AE',
        templateUrl: 'directives/panelLabel/panelLabel.tpm.html',
        replace: false,
        scope: {
            tempValue: '@',
            tempRange: '@',
            tempColor: '@'
        },
        link: function(scope, elements, attrs) {
            scope.styleColor = {
                'color': scope.tempColor
            }
        }
    };
});