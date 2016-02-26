(function() {
  'use strict';

  angular
    .module('red')
    .controller('EncountersCtrl', EncountersCtrl);

  /** @ngInject */
  function EncountersCtrl($scope, $http, $state) {
      var ENCOUNTERS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

      $scope.gotoreport = function(){
        $state.go('report');
      };
      $scope.description = {};

      $http({
        method: 'GET',
        url: ENCOUNTERS_GET_URL
      }).then(function(response){
          $scope.encounters = response.data.encounters;
      }, function(error){
          // TODO: handle error
      });

  }

})();
