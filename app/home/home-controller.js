var app = angular.module('home', []);

app.controller("homeController",  homeController);


function homeController($scope, $state){
    $scope.mensagem = "controlador da home";

    $scope.vaiParaAgenda = function (){
      $state.go('agenda');
    }
}
