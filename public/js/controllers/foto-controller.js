angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams, cadastroDeFotos) {

  $scope.foto = {};
  $scope.mensagem = '';

  if($routeParams.fotoId){
    recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
      $scope.foto = foto;
    }, function(erro){
      console.log(erro);
      $scope.mensagem = "Nao foi possível obter a foto"
    });
  }


  $scope.submeter = function(){
    if($scope.formulario.$valid){

    cadastroDeFotos.cadastrar($scope.foto)
    .then(function(dados){
      $scope.mensagem = dados.mensagem;
      if(dados.inclusao) $scope.foto = {};
      $scope.focado = true; //novidade
      $scope.formulario.$setPristine();
      $scope.formulario.$setUntouched();
      //colocar codigo de limpeza de form pristine
    })
    .catch(function(erro){
      $scope.mensagem = erro.mensagem;
    });
}
};
});
