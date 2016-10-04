'use strict';

angular.module('neoApp_en-us', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // Main
  .state('app', {
    url: '/en-us/',
    views: {
      'header': {
        templateUrl: 'app/en/templates/header.html'
      },
      'content': {
        templateUrl:'app/en/partials/home.html',
        controller:'PageCtrl'
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
        controller: 'PageCtrl'
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
    url:'neoV-980',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/neoV980.html',
        controller: 'PageCtrl'
      }
    }
  })

  .state('app.neoV1470', {
    url:'neoV-1470',
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
    url:'endovascular-applications',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/EVLA.html',
        controller: 'TreatCtrl'
      }
    }
  })

  .state('app.PLDD', {
    url:'percutaneous-laser-disc-decompression',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/PLDD.html'
      }
    }
  })

  .state('app.proctology', {
    url:'proctology',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/proctology.html'
      }
    }
  })

  .state('app.ENT', {
    url:'otolaryngology',
    views: {
      'content@': {
        templateUrl: 'app/en/partials/ENT.html'
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

  $urlRouterProvider.otherwise('/en-us/');
})

.run(function($rootScope){
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});
