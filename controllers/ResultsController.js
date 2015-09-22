surveyBot.controller('ResultsCtrl', function ResultsCtrl($scope, ResponsesFactory){
  $scope.responses = ResponsesFactory.responses;
  $scope.ResponsesFactory = ResponsesFactory;

  // Sync results with Responses Factory
  $scope.presidentResults = ResponsesFactory.presidentResults;
  $scope.scienceResults = ResponsesFactory.scienceResults;


  $scope.presidentResults = {
    "bernie": 0,
    "hillary": 0,
    "arnold": 0,
    "homer": 0,
    "donald": 0
  };

  $scope.scienceResults = {
    "carl": 0,
    "neil": 0,
    "bill": 0,
    "richard": 0,
    "michio": 0
  };

  $scope.calculateResults = function() {
    $scope.responses.forEach(function(response) {
      // Increment the count for the president chosen in this response
      $scope.presidentResults[response.president] += 1;
      $scope.scienceResults[response.science] += 1;
    });
  };

});
