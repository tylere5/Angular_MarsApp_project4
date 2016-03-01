(function() {
  'use strict';

  angular
    .module('red')
    .controller('MainCtrl', MainCtrl);

  /** @ngInject */
  function MainCtrl($scope, $state) {
      $scope.description = 'Angular Seed Application';

      $scope.gotocheckin = function (){
        $state.go('check-in');
      };
  }

})();
