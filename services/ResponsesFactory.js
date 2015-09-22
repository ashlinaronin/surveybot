surveyBot.factory('ResponsesFactory', function ResponsesFactory(){
  var factory = {};
  factory.funResponses = [];
  factory.embarrassingResponses = [];

  factory.addFunResponse = function(){
    var funResponse = { text: factory.funResponse, time: new Date() };
    factory.funResponses.push(funResponse);
    factory.funResponse = null;
  };

  factory.addEmbarrassingResponse = function(){
    var embarrassingResponse = { text: factory.embarrassingResponse, time: new Date() };
    factory.embarrassingResponses.push(embarrassingResponse);
    factory.embarrassingResponse = null;
  };

  return factory;

});
