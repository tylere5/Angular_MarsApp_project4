(function() {
  'use strict';

  angular
    .module('red')
    .controller('CheckinCtrl', CheckinCtrl);

  /** @ngInject */
  function CheckinCtrl($scope, $http, $rootScope, $state, $cookies){
    var JOBS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
    var COLONIST_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
    //placeholder object for POST request to /colonists
    $scope.colonist = {};
    // fetch all jobs
    $http({
      method: 'GET',
      url: JOBS_GET_URL
    }).then(function(response){
        $scope.jobs = response.data.jobs;
    }, function(error){
        // TODO: handle error
    });

    $scope.login = function(event){
      event.preventDefault();

      $http({
        method: 'POST',
        url: COLONIST_POST_URL,
        data: {
          'colonist' : $scope.colonist
        }
      }).then(function(response){
        $rootScope.colonist = response.data.colonist;
        $cookies.putObject('mars_user', response.data.colonist);
        $state.go('encounters');
      }, function(error){
        console.log(error);
      });
    };

}
})();
