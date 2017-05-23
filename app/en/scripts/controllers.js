'use strict';

angular.module('neoApp_en-us')

.controller('ArticlesCtrl', ['$scope', 'filesFactory', function ($scope, filesFactory) {
  $scope.proctofiles = filesFactory.getProctoFiles();
  $scope.plddfiles = filesFactory.getPlddFiles();
  $scope.entfiles = filesFactory.getEntFiles();
}]);
