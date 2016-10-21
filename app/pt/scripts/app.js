'use strict';

angular.module('neoApp_pt-br', ['ui.router', 'angular.backtop'])

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
        controller:'PageCtrl'
      },
      'footer': {
        templateUrl: 'app/pt/templates/footer.html'
      }
    }
  })

  .state('app.about', {
    url:'sobre-nos',
    views: {
      'content@': {
        templateUrl: 'app/pt/partials/about.html'
      }
    }
  })

  .state('app.events', {
    url:'ultimos-eventos',
    views: {
      'content@': {
        templateUrl: 'app/pt/partials/events.html'
      }
    }
  })

  .state('app.contact', {
    url:'fale-conosco',
    views: {
      'content@': {
        templateUrl: 'app/pt/partials/contact.html',
        controller: 'PageCtrl'
      }
    }
  })

  .state('app.products', {
    url:'nossos-produtos',
    views: {
      'content@': {
        templateUrl: 'app/pt/partials/products.html'
      }
    }
  })

  .state('app.neoV980', {
    url:'neoV-980',
    views: {
      'content@': {
        templateUrl: 'app/pt/partials/neoV980.html',
        controller: 'PageCtrl'
      }
    }
  })

  .state('app.neoV1470', {
    url:'neoV-1470',
    views: {
      'content@': {
        templateUrl: 'app/pt/partials/neoV1470.html'
      }
    }
  })

  .state('app.treatments', {
    url:'tratamentos',
    views: {
      'content@': {
        templateUrl: 'app/pt/partials/treatments.html'
      }
    }
  })

  .state('app.EVLA', {
    url:'aplicacoes-endovasculares',
    views: {
      'content@': {
        templateUrl: 'app/pt/partials/EVLA.html',
        controller: 'TreatCtrl'
      }
    }
  })

  .state('app.PLDD', {
    url:'PLDD',
    views: {
      'content@': {
        templateUrl: 'app/pt/partials/PLDD.html'
      }
    }
  })

  .state('app.proctology', {
    url:'proctologia',
    views: {
      'content@': {
        templateUrl: 'app/pt/partials/proctology.html'
      }
    }
  })

  .state('app.ENT', {
    url:'otorrinolaringologia',
    views: {
      'content@': {
        templateUrl: 'app/pt/partials/ENT.html'
      }
    }
  })

  .state('app.signin', {
    url:'sign-in',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/signin.html'
      }
    }
  })

  $urlRouterProvider.otherwise('/pt-br/');
})

.run(function($rootScope){
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});
