surveyBot.controller('EmbarrassingQCtrl', function EmbarrassingQCtrl($scope, ResponsesFactory) {
  $scope.question = "What's your most embarrassing moment?";
  $scope.responses = ResponsesFactory.responses;
  $scope.ResponsesFactory = ResponsesFactory;
});
