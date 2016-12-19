angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, mainSrv, $stateParams) {

    $scope.location;
    if ($stateParams.id === '112233') {
        $scope.location = mainSrv.travelInfo[0];
    } else if ($stateParams.id === '1122343') {
        $scope.location = mainSrv.travelInfo[1];
    } else if ($stateParams.id === '11223489') {
        $scope.location = mainSrv.travelInfo[2];
    }

    $scope.background = {
        "background": "url(" + $scope.location.image + ")",
        "background-size": "cover"
    }

});