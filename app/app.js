var app = angular.module("cursoAngular", ['ngMaterial',
 'ui.router',
  'home',
  'agenda'

]);




app.controller("cursoAngularController", function($scope){
  $scope.mensagem = "Olá Mundo !";
  $scope.contatos = [];

  $scope.adicionaUm = function(){
    var contatoTemp = angular.copy($scope.contato);
    $scope.contatos.push(contatoTemp);
    $scope.contato = {};
  };
});






app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "home/home.html",
      controller: "homeController"
    })
    .state('agenda', {
      url: "/agenda",
      templateUrl: "agenda/agenda.html",
      controller: "agendaController"
    });
});
