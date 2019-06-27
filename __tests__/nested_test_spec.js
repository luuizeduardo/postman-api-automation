const frisby = require('frisby');
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false
});

describe('Nested test with Get and Post methods - Postman API', function() {
  it('must load the foo1 value to update', function () {
    return frisby.get('https://postman-echo.com/get?foo1=bar1&foo2=bar2', {agent})
      .expect('status', 200)
      .expect('json', 'args', {
        foo1: 'bar1',
        foo2: 'bar2'
      })
      .then(function (res) {
        let foo = res._json.args.foo1 + '23';
        return frisby.post('https://postman-echo.com/post', {
          agent,
          body: JSON.stringify({
            'foo1': foo
          })
        })
          .expect('status', 200)
      });
  });
});

