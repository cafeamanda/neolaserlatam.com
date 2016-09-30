'use strict';

angular.module('neoApp_pt-br', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // Main
  .state('app', {
    url: '/pt-br/',
    views: {
      'header': {
        templateUrl: 'app/pt/templates/header.html'
      },
      'content': {
        templateUrl:'app/pt/partials/home.html',
        controller: 'PageCtrl'
      },
      'footer': {
        templateUrl: 'app/pt/templates/footer.html'
      }
    }
  })

  .state('app.faleconosco', {
    url:'fale-conosco',
    views: {
      'content@': {
        templateUrl: 'app/pt/partials/contact.html',
        controller: 'PageCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/pt-br/');
});
