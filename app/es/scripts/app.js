'use strict';

angular.module('neoApp_es-mx', ['ui.router', 'angular.backtop'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // Main
  .state('app', {
    url: '/es/',
    views: {
      'header': {
        templateUrl: 'app/es/templates/header.html'
      },
      'content': {
        templateUrl:'app/es/partials/home.html',
      },
      'footer': {
        templateUrl: 'app/es/templates/footer.html'
      }
    }
  })

  .state('app.about', {
    url:'quienes-somos',
    views: {
      'content@': {
        templateUrl: 'app/es/partials/about.html'
      }
    }
  })

  .state('app.salesrep', {
    url:'encuentra-el-representante-mas-cerca-de-ti',
    views: {
      'content@': {
        templateUrl: 'app/es/partials/salesrep.html'
      }
    }
  })

  .state('app.events', {
    url:'eventos',
    views: {
      'content@': {
        templateUrl: 'app/es/partials/events.html'
      }
    }
  })

  .state('app.contact', {
    url:'contactanos',
    views: {
      'content@': {
        templateUrl: 'app/es/partials/contact.html',
      }
    }
  })

  .state('app.distributors', {
    url:'conviertase-en-un-distribuidor',
    views: {
      'content@': {
        templateUrl: 'app/es/partials/distributor.html',
      }
    }
  })

  .state('app.products', {
    url:'nuestros-productos',
    views: {
      'content@': {
        templateUrl: 'app/es/partials/products.html'
      }
    }
  })

  .state('app.neoV980', {
    url:'our-products/neoV-980',
    views: {
      'content@': {
        templateUrl: 'app/es/partials/neoV980.html',
      }
    }
  })

  .state('app.neoV1470', {
    url:'our-products/neoV-1470',
    views: {
      'content@': {
        templateUrl: 'app/es/partials/neoV1470.html'
      }
    }
  })

  .state('app.treatments', {
    url:'tratamientos',
    views: {
      'content@': {
        templateUrl: 'app/es/partials/treatments.html'
      }
    }
  })

  .state('app.EVLA', {
    url:'tratamientos/aplicaciones-endo-vasculares',
    views: {
      'content@': {
        templateUrl: 'app/es/partials/EVLA.html',
      }
    }
  })

  .state('app.PLDD', {
    url:'tratamientos/descompresion-percutanea-discal-con-laser',
    views: {
      'content@': {
        templateUrl: 'app/es/partials/PLDD.html',
        controller: 'ArticlesCtrl'
      }
    }
  })

  .state('app.proctology', {
    url:'treatments/proctologia',
    views: {
      'content@': {
        templateUrl: 'app/es/partials/proctology.html',
        controller: 'ArticlesCtrl'
      }
    }
  })

  .state('app.ENT', {
    url:'treatments/ENT',
    views: {
      'content@': {
        templateUrl: 'app/es/partials/ENT.html',
        controller: 'ArticlesCtrl'
      }
    }
  })

  .state('app.articles', {
    url:'treatments/articulos-relacionados',
    views: {
      'content@': {
        templateUrl: 'app/es/partials/articles.html',
        controller: 'ArticlesCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/es/');
})

.run(function($rootScope){
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
})

.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
  $rootScope
  .$on('$stateChangeSuccess', function(event){
    if (!$window.ga) return;
    $window.ga('send', 'pageview', {
      page: $location.path()
    });
  })
}]);
