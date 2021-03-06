angular.module('minhasDiretivas', [])
  .directive('meuPainel', function(){

    var ddo = {}

    ddo.transclude = true;

    ddo.restrict = 'AE';

    ddo.scope = {
      titulo : '@titulo'
    };

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;

  })

  .directive('meuBotaoPerigo', function(){

    var ddo = {}

    ddo.restrict = 'E';

    ddo.scope = {
      nome : '@',
      acao : '&'
    };

    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

    return ddo;

  })

  .directive('meuFocus', function(){

    var ddo = {};

    ddo.restrict = "A";

    ddo.scope = {
      focado : '='
    };

    ddo.link = function(scope, element){
      //quero observar qualquer mudança em 'focado'
      scope.$watch('focado', function() {
        if(scope.focado){
          element[0].focus();
          scope.focado = false;
        }
    });
  };

    return ddo;

  })


  .directive('minhaFoto', function(){

    var ddo = {}

    ddo.restrict = 'AE';

    ddo.scope = {
      titulo : '@titulo',
      url : '@url'
    };

    //ddo.templateUrl = 'js/directives/minha-foto.html';

    ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

    return ddo;

  });
