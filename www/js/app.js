// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova','starter.controllers', 'starter.services'])

.run(function($ionicPlatform,$state,$rootScope) {
    Parse.initialize('0d7CZ01vFUD1Q6N8Tt6z8ciw0MHz7bpSi5QqynWP', 'YlIkTk3MBXdMZXjL9BdcXrIDirWRyETps3HZQnTB');
    var currentUser = Parse.User.current();
    $rootScope.user = null;
    $rootScope.isLoggedIn = false;

    if (currentUser) {
        $rootScope.user = currentUser;
        $rootScope.isLoggedIn = true;
        $state.go('app.home');
    }

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }


  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('auth', {
    url: '/auth',
    templateUrl: 'templates/auth.html',
    controller: 'authCtrl'
  })

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.request', {
    url: '/request',
    views: {
      'tab-request': {
        templateUrl: 'templates/tab-request.html',
        controller: 'requestCtrl'
      }
    }
  })


  .state('tab.explorerDetails', {
    url: '/explorerDetails',
    views: {
      'tab-request': {
        templateUrl: 'templates/tab-explorerDetails.html',
        controller: 'explorerDetailsCtrl'
      }
    }
  })

  .state('tab.requestlistdetails', {
    url: '/requestlistdetails',
    views: {
      'tab-request': {
        templateUrl: 'templates/tab-requestlistdetails.html',
        controller: 'requestCtrl'
      }
    }
  })

  .state('tab.makeorder', {
    url: '/makeorder',
    views: {
      'tab-makeorder': {
        templateUrl: 'templates/tab-makeorder.html',
        controller: 'makeorderCtrl'
      }
    }
  })

    .state('tab.getlistdetails', {
      url: '/getlistdetails',
      views: {
        'tab-getlist': {
          templateUrl: 'templates/tab-getlistdetails.html',
          controller: 'getlistCtrl'
        }
      }
    })

  .state('tab.orders', {
      url: '/orders',
      views: {
        'tab-orders': {
          templateUrl: 'templates/tab-orders.html',
          controller: 'OrdersCtrl'
        }
      }
    })
    .state('tab.order-detail', {
      url: '/orders/:chatId',
      views: {
        'tab-orders': {
          templateUrl: 'templates/order-detail.html',
          controller: 'OrderDetailsCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/auth');

});
