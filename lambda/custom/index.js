'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "amzn1.ask.skill.bd7a21a1-421b-417e-a4e6-7671c0765d50";

var SKILL_NAME = "UT Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a UT fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "The University of Texas was founded in 1883.",
    "OU sucks.",
    "Legend has it that if you happen to see a one of the famous ‘albino squirrels’ on your way to take an exam, you’ll ace it!",
    "The famous Big Bertha drum weighs in at over 500 pounds, measures eight feet in diameter, and is almost a century old.",
    "The University Library holds close to 10 million volumes, making it the 7th largest college library in the country.",
    "The very beautiful Littlefield Fountain, located on the South Mall, was built to commemorate UT students and alumni who died during World War I.",
    "Smokey The Cannon was built in 1953 and is shot every time the school’s football team, the Longhorns, score a touchdown. It gets fired a lot!",
    "Quite a few famous celebrities are former UT students, including Mathew McConahey, Kevin Durant and Ricky Williams!",
    "The Hook ‘em Horns hand signal was introduced at 1955 during a pep rally, by head cheerleader at the time Harley Clark Jr. and was later recognized as Top College Hand Signal by Sports Illustrated.",
    "UT’s mascot, Bevo, earned its name during 1915 when the Aggies won 13-0 during a football match up. Thrilled, the Longhorns changed the 13 to a B, the hyphen to an E and added a V before the 0. The result? Bevo.",
    "The school song 'The eyes of Texas' is actually kind of creepy. Look up the lyrics if you have to.",
    "There is a turtle pond located near the main tower that has turtles.",
    "Known as the Forty Acres, the campus actually spans 434 acres."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};