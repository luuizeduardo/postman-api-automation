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

describe('Teste do método Post e Put - Postman API', function() {
  it('deve registrar as informações de foo1', function () {
    return frisby
      .post('https://postman-echo.com/post', {
        agent,
        body: JSON.stringify({
          'foo1': 'bar1'
        })
      })
        .expect('status', 200)
  });

  it('deve atualizar as informações de foo1', function () {
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

