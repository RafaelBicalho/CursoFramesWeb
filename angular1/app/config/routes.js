angular.module('primeiraApp').config([
  '$stateProvider', //Obj do UI Router
  '$urlRouterProvider', //Obj do UI Router
  function($stateProvider, $urlRouterProvider){
    $stateProvider.state('dashboard', {
      url: "/dashboard",
      templateUrl: "dashboard/dashboard.html"
    }).state('billingCycle', {
      url: "/billingCycles",
      templateUrl: "billingCycle/tabs.html"
    })

    $urlRouterProvider.otherwise('/dashboard')
  }
])
