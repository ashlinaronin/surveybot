surveyBot.controller('QCtrl', function QCtrl($scope, ResponsesFactory) {
  $scope.fun = ResponsesFactory.fun;
  $scope.embarrassing = ResponsesFactory.embarrassing;
  $scope.ResponsesFactory = ResponsesFactory;
});
