surveyBot.controller('ResultsCtrl', function ResultsCtrl($scope, ResponsesFactory){
  $scope.responses = ResponsesFactory.responses;
  $scope.ResponsesFactory = ResponsesFactory;

  // Do calculation of results here, tally answers for display, etc.
});
