angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, mainSrv, $stateParams) {
    $scope.packages = mainSrv.packageInfo;
    
})