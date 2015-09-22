surveyBot.controller('FunQCtrl', function FunQCtrl($scope, ResponsesFactory) {
  $scope.question = "What's the funnest thing you've done recently?";
  $scope.funResponses = ResponsesFactory.funResponses;
  $scope.ResponsesFactory = ResponsesFactory;


});
