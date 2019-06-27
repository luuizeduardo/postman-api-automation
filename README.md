# API automation with Frisby.js

This project demonstrates how to do API test automation using [Frisby.js](https://frisbyjs.com)

I've used the [public APIs from Postman](https://docs.postman-echo.com/?version=latest) as an example to this demonstration.

## Setup

- Make sure [Node](https://nodejs.org) is installed on your machine: run `node -v` in terminal
- Clone/Fork the project.
- Open the terminal in the folder that the project was cloned in and run the command: `npm install`

## Installing Report Portal

- In case you don't have [Docker](https://www.docker.com/) installed, please do so.

After Docker setup, you'll be able to create containers in your machine and expose them as you wish. Report Portal setup depends of some containers to work correctly.

The docker-compose.yml file is responsible for managing the required containers to setup the Report Portal application. In order to do that, execute the steps bellow:

- Open the terminal in the folder that the project was cloned in
- Run the commands:
  - `mkdir data/elasticsearch`
  - `chmod g+rwx data/elasticsearch`
  - `chgrp 1000 data/elasticsearch`
    - **PS.:** This is required only on the application setup
- Run the command `docker-compose -p reportportal up -d --force-recreate` to start the containers
  - The complete command list is available in the [application manual](https://reportportal.io/download))

Given that all the steps are completed successfully, you’ll have access to the report through your web browser.

## Test execution

- Run the command `npm test` to execute your test suit.

## Useful links

There's a [serie of posts on medium](https://medium.com/serasa-consumidor/parte-1-introdu%C3%A7%C3%A3o-e-requisi%C3%A7%C3%B5es-get-6c7ec9c7c778) where you can find step by step how to create the test suite.