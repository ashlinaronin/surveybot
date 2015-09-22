surveyBot.controller('FunQCtrl', function FunQCtrl($scope, ResponsesFactory) {
  $scope.question = "What's the funnest thing you've done recently?";
  $scope.responses = ResponsesFactory.responses;
  $scope.ResponsesFactory = ResponsesFactory;


});
