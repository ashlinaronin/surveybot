surveyBot.controller('ResponsesCtrl', function ResponsesCtrl($scope, ResponsesFactory){
  $scope.funResponses = ResponsesFactory.funResponses;
  $scope.embarrassingResponses = ResponsesFactory.embarrassingResponses;
  $scope.ResponsesFactory = ResponsesFactory;
});
