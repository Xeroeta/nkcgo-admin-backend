'use strict';

const dynamodb = require('../shared/dynamodb');

module.exports.user_badges_list = (event, context, callback) => {
    console.log('Event object: ');
    console.log(event);
  const params = {
    TableName: process.env.DYNAMODB_USER_BADGES_TABLE,
  };

  // fetch all todos from the database
  dynamodb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t fetch the user badges list.'));
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  });
};
