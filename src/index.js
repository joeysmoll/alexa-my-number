var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function() {
        this.emit('LaunchIntent');
    },

    'LaunchIntent': function() {
        this.emit(':ask', "Hi, what is your number?");
    },

    'NumberIntent': function() {
        var myNumber = this.event.request.intent.slots.myNumber.value;
        var myDecimal = this.event.request.intent.slots.myDecimal.value;
        if (myDecimal == null) {
            this.emit(':tell', "Your number is  " + myNumber);
        } else {
            this.emit(':tell', "Your number is  " + myNumber + "point " + myDecimal);
        }
    }
};