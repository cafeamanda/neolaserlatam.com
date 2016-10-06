'use strict';

angular.module('neoApp_en-us')

.controller('PageCtrl', ['$scope', function ($scope) {

  console.log("Page Controller reporting for duty.");

}])

.controller('TreatCtrl', ['$scope', function($scope) {
  console.log("Treatment Controller reporting for duty.");
}]);
