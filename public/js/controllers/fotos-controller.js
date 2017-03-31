angular
  .module('alurapic')
  .controller('FotosController', function($scope, recursoFoto){
    $http.get('v1/fotos')
    .success(function(fotos){
      $scope.fotos = fotos;
    })
    .error(function(erro){
      console.error('As fotos nao foram carregadas');
    })

    $scope.remover = function(foto){
      $http.delete('/v1/fotos/' + foto._id)
        .success(function(){
          var indiceDaFoto = $scope.fotos.indexOf(foto);
          $scope.fotos.splice(indiceDaFoto, 1);
          $scope.mensagem = 'Foto '+ foto.titulo + ' removida com sucesso!';
        })
        .error(function(erro){
          console.log(erro);
          $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
        });

};
});
