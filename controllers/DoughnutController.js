surveyBot.controller('DoughnutCtrl', function DonutCtrl($scope, ResponsesFactory, $timeout){
  $scope.labels = ["Bernie Sanders", "Hillary Clinton", "Arnold Schwarzenegger", "Homer Simpson", "Donald Trump"];
  $scope.data = [0,0,0,0,0];

  $scope.results = ResponsesFactory.presidentResults;

  $timeout(function() {
    $scope.data = [
      $scope.results.bernie,
      $scope.results.hillary,
      $scope.results.arnold,
      $scope.results.homer,
      $scope.results.donald
    ];
  }, 500);

});
