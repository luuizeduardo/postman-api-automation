const frisby = require('frisby');
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false
});

describe('Teste aninhado com métodos Get e Post - Postman API', function() {
    it('deve carregar o valor de foo1 para atualizar', function () {
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

