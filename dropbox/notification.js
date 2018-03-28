'use strict';

const AWS = require('aws-sdk');
const accountSid = ''
const authToken = ''
const client = require('twilio')(accountSid, authToken)

module.exports.notification = (event, context, callback) => {

  console.log('notification')
  // const data = JSON.parse(event);
  console.log(event)

  client.messages.create(
    {
      to: '',
      from: '+17787604373',
      body: `${event.filename} has been added to your S3 bucket`
    },
    (err, message) => {
      console.log(message.sid)
      const response = {
        statusCode: 200,
        body: JSON.stringify({ message: "Notification sent" }),
      }
      callback(null, response);
    }
  )
};
