surveyBot.factory('ResponsesFactory', function ResponsesFactory(){
  var factory = {};
  factory.responses = [];
  factory.presidentResults = {};
  factory.scienceResults = {};


  factory.addResponse = function(){
    var response = {
      president: factory.president,
      science: factory.science,
      time: new Date()
    };

    factory.responses.push(response);
    factory.president = "";
    factory.science = "";
  };

  return factory;
});
