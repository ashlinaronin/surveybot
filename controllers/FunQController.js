surveyBot.controller('FunQCtrl', function FunQCtrl($scope, QuestionsFactory) {
  $scope.question = "What's the funnest thing you've done recently?";
  $scope.responses = QuestionsFactory.responses;
  $scope.QuestionsFactory = QuestionsFactory;


});
