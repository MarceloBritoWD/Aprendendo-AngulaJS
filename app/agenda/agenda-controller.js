var app = angular.module('agenda', []);

app.controller("agendaController",  agendaController);


function agendaController($scope, $state){
    $scope.mensagem = "controlador da agenda";

    

}
