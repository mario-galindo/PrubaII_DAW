app.controller('MainController',function($scope,$firebaseArray){

    var fireDB = firebase.database();
     $scope.chatList = {};

     $scope.usuario;
     $scope.mensaje;
     
    
    $scope.nuevoChat = function(){

        var hora = new Date().toLocaleString();
        var msj = {
            nick:$scope.usuario,
            message:$scope.mensaje,
            hora:hora
        }

        console.log(msj);
        fireDB.ref('/chats').push().set(msj);
        $scope.listarChats();
        $scope.mensaje = "";  
    }

    
    $scope.listarChats = function(){
        var ref = firebase.database().ref().child("chats");
        $scope.chatList = $firebaseArray(ref);
    }

    $scope.limpiarSala = function(){
         var ref = firebase.database().ref().child("chats").remove();
    }


});