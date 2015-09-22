surveyBot.controller('EmbarrassingQCtrl', function EmbarrassingQCtrl($scope, QuestionsFactory) {
  $scope.question = "What's your most embarrassing moment?";
  $scope.responses = QuestionsFactory.responses;
  $scope.QuestionsFactory = QuestionsFactory;
});
