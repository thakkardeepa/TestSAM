var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("Australia/Sydney");
    callback(null, {
        statusCode: '200',
        body: 'The time in Sydney is: ' + currentTime.toString(),
    });
};
