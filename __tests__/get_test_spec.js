const frisby = require('frisby');
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false
});

describe('Get - Postman API', function() {
  it('must check that the endpoint is functional and getting the right information', function () {
    return frisby.get('https://postman-echo.com/get?foo1=bar1&foo2=bar2', {agent})
      .expect('status', 200)
      .expect('json', 'args', {
        foo1: 'bar1',
        foo2: 'bar2'
      });
  });
});