'use strict';

angular.module('neoApp_en-us', ['ui.router', 'angular.backtop'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // Main
  .state('app', {
    url: '/en/',
    views: {
      'header': {
        templateUrl: 'app/en/templates/header.html'
      },
      'content': {
        templateUrl:'app/en/partials/home.html'
      },
      'footer': {
        templateUrl: 'app/en/templates/footer.html'
      }
    }
  })

  .state('app.about', {
    url:'about-us',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/about.html'
      }
    }
  })

  .state('app.salesrep', {
    url:'find-your-rep',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/salesrep.html'
      }
    }
  })

  .state('app.events', {
    url:'latest-events',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/events.html'
      }
    }
  })

  .state('app.contact', {
    url:'contact-us',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/contact.html',
      }
    }
  })

  .state('app.distributors', {
    url:'become-a-distributor',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/distributor.html'
      }
    }
  })

  .state('app.products', {
    url:'our-products',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/products.html'
      }
    }
  })

  .state('app.neoV980', {
    url:'our-products/neoV-980',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/neoV980.html',
      }
    }
  })

  .state('app.neoV1470', {
    url:'our-products/neoV-1470',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/neoV1470.html'
      }
    }
  })

  .state('app.treatments', {
    url:'treatments',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/treatments.html'
      }
    }
  })

  .state('app.EVLA', {
    url:'treatments/endovascular-applications',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/EVLA.html',
      }
    }
  })

  .state('app.PLDD', {
    url:'treatments/percutaneous-laser-disc-decompression',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/PLDD.html',
        controller: 'ArticlesCtrl'
      }
    }
  })

  .state('app.proctology', {
    url:'treatments/proctology',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/proctology.html',
        controller: 'ArticlesCtrl'
      }
    }
  })

  .state('app.ENT', {
    url:'treatments/ENT',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/ENT.html',
        controller: 'ArticlesCtrl'
      }
    }
  })

  .state('app.articles', {
    url:'treatments/related-articles',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/articles.html',
        controller: 'ArticlesCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/en/');
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
