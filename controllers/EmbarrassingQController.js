surveyBot.controller('EmbarrassingQCtrl', function EmbarrassingQCtrl($scope, ResponsesFactory) {
  $scope.question = "What's your most embarrassing moment?";
  $scope.embarrassingResponses = ResponsesFactory.embarrassingResponses;
  $scope.ResponsesFactory = ResponsesFactory;
});
