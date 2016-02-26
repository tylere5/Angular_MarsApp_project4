(function() {
  'use strict';

  angular
    .module('red')
    .controller('MainCtrl', MainCtrl);

  /** @ngInject */
  function MainCtrl($scope) {
      $scope.description = 'Angular Seed Application';
  }

})();
