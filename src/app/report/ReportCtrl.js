(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCtrl', ReportCtrl);

  /** @ngInject */
  function ReportCtrl($scope, $http, $cookies, $state, $filter) {
      var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
      var REPORT_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

      $scope.showValidation = false;

      $scope.report = {
        colonist_id: $cookies.getObject('mars_user').id,
        date: $filter('date')(new Date(), 'yyyy-MM-dd')
      };

      $http({
        method: 'GET',
        url: ALIENS_GET_URL
      }).then(function(response){
          $scope.aliens = response.data.aliens;
      }, function(error){
          // TODO: handle error
      });

      $scope.submit = function(event){
        event.preventDefault();

        $http({
          method: 'POST',
          url: REPORT_POST_URL,
          data: { 'encounter' : $scope.report }
        }).then(function(response){
          console.log(response);
        }, function(error){
          console.log(error);
        });
      };
  }

})();
