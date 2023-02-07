const request = require('request');

const options = {
  method: 'GET',
  url: 'http://desktop-oe63k6d:7800/register/v1/register',
  headers: {accept: 'application/json'}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
