surveyBot.controller('QCtrl', function QCtrl($scope, ResponsesFactory) {
  $scope.president = ResponsesFactory.president;
  $scope.science = ResponsesFactory.science;
  $scope.ResponsesFactory = ResponsesFactory;
});
