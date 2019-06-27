# Automação de APIs com Frisby.js

Este projeto visa mostrar como funciona a automação de testes funcionais de APIs com a ferramenta [Frisby.js](https://frisbyjs.com).

Usamos como exemplo as APIs que o Postman disponibiliza [publicamente](https://docs.postman-echo.com/?version=latest) para esta demonstração.

## Instalação

- Garanta que o [Node](https://nodejs.org) está instalado: `node -v`
- Faça o clone deste projeto.
- Na pasta onde o projeto foi clonado, rode o comando: `npm install`

## Instalando o Report Portal localmente

- Caso não tenha o [Docker](https://www.docker.com/) instalado em sua máquina, realize a instalação.

Após a instalação do Docker, você poderá criar containers e expô-los da maneira que achar melhor. O Report Portal depende da criação de alguns containers para seu funcionamento.

Neste repositório há um arquivo chamado `docker-compose.yml`, ele é responsável por gerenciar os containers que são necessários para subir a aplicação do Report Portal. Para usá-lo:

- Abra o terminal na pasta em que você clonou o projeto.
- Rode os seguintes comandos:
  - `mkdir data/elasticsearch`
  - `chmod g+rwx data/elasticsearch`
  - `chgrp 1000 data/elasticsearch`
    - **Obs.:** Isto é necessário apenas na instalação do report.
- Para subir os containers com o Report, rode o seguinte comando: `docker-compose -p reportportal up -d --force-recreate`
  - A lista completa destes comandos são encontrados na [documentação da ferramenta](https://reportportal.io/download).

Ao finalizar a subida destes containers, você deverá ter acesso ao report através de seu navegador.

## Execução dos testes

- Para executar os testes, rode o comando: `npm test`

## Links úteis

Existe uma [série de posts no medium](https://medium.com/serasa-consumidor/parte-1-introdu%C3%A7%C3%A3o-e-requisi%C3%A7%C3%B5es-get-6c7ec9c7c778) sobre este assunto onde mostro a construção destes testes passo a passo.