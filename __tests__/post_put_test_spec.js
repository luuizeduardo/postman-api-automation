const frisby = require('frisby');
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false
});

frisby.globalSetup({
  request: {
    headers: {
      'Content-Type': 'application/json',
    }
  }
});

describe('Test Post and Put methods - Postman API', function() {
  it('must registrate the foo1 informations', function () {
    return frisby
      .post('https://postman-echo.com/post', {
        agent,
        body: JSON.stringify({
          'foo1': 'bar1'
        })
      })
        .expect('status', 200)
  });

  it('must update the foo1 informations', function () {
    return frisby
      .put('https://postman-echo.com/put', {
        agent,
        body: JSON.stringify({
          'foo1': 'bar2'
        })
      })
        .expect('status', 200)
  });
});

