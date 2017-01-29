'use strict';

angular.module('neoApp_es-mx')

.controller('ProctoCtrl', ['$scope', 'proctoFactory', function ($scope, proctoFactory) {
  $scope.proctofiles = proctoFactory.getFiles();
}])

.controller('PLDDCtrl', ['$scope', 'plddFactory', function ($scope, plddFactory) {
  $scope.plddfiles = plddFactory.getFiles();
}])

.controller('ENTCtrl', ['$scope', 'entFactory', function ($scope, entFactory) {
  $scope.entfiles = entFactory.getFiles();
}])

.controller('ArticlesCtrl', ['$scope', 'proctoFactory', 'plddFactory', 'entFactory', function ($scope, proctoFactory, plddFactory, entFactory) {
  $scope.proctofiles = proctoFactory.getFiles();
  $scope.plddfiles = plddFactory.getFiles();
  $scope.entfiles = entFactory.getFiles();
}]);
