'use strict';

angular.module('neoApp_pt-br')

.controller('ProctoCtrl', ['$scope', 'proctoFactory', function ($scope, proctoFactory) {
  $scope.proctofiles = proctoFactory.getFiles();
}])

.controller('PLDDCtrl', ['$scope', 'plddFactory', function ($scope, plddFactory) {
  $scope.plddfiles = plddFactory.getFiles();
}])

.controller('ENTCtrl', ['$scope', 'entFactory', function ($scope, entFactory) {
  $scope.entfiles = entFactory.getFiles();
}]);
