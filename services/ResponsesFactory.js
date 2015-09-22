surveyBot.factory('ResponsesFactory', function ResponsesFactory(){
  var factory = {};
  factory.responses = [];

  factory.addResponse = function(){
    var response = {
      fun: factory.fun,
      embarrassing: factory.embarrassing,
      time: new Date()
    };

    factory.responses.push(response);
    factory.fun = null;
    factory.embarrassing = null;
  };

  return factory;
});
