surveyBot.factory('ResponsesFactory', function ResponsesFactory(){
  var factory = {};
  factory.responses = [];

  factory.addResponse = function(){
    var response = { text: factory.response, time: new Date() };
    factory.responses.push(response);
    factory.response = null;
  };

  return factory;

});
