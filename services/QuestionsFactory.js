surveyBot.factory('QuestionsFactory', function QuestionsFactory(){
  var factory = {};
  factory.responses = [];

  factory.addResponse = function(){
    var response = { text: factory.response, time: new Date() };
    factory.responses.push(response);
    factory.questionResponse = null;
  };

  return factory;

});
