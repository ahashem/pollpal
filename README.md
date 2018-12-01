# PollPal


[![Codacy Badge](https://api.codacy.com/project/badge/Grade/80d9ac310ed94c00ae5f72200720ad52)](https://app.codacy.com/app/ahashem/pollpal?utm_source=github.com&utm_medium=referral&utm_content=ahashem/pollpal&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.org/ahashem/pollpal.svg?branch=master)](https://travis-ci.org/ahashem/pollpal)
[![codecov](https://codecov.io/gh/ahashem/pollpal/branch/master/graph/badge.svg)](https://codecov.io/gh/ahashem/pollpall)

## About PollPal
 

### Development Stack:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For state management an abstraction layer over Redux, redux-sagas is used, to avoid redundancy and editing lots of files. Check [Speedux](https://github.com/teefouad/speedux). 

For rapid UI prototyping and consistency, [AntD](https://github.com/ant-design/ant-design) design language is used.


### Instructions
#1 Clone the project repository.

#2 `nvm install` or use NodeJS `8.12.0` or Higher (NPM `6.4`+). 

#3 Install dependencies: `yarn install`

#4 Before starting, create a `.env` file by copying `.env-example` and source the Environment configurations: `$> source .env`

Note:
Example of environment configuration, the env. variable `REACT_APP_POLLS_BASE_URL` can be set to use the debugging version of the API In development environment: `REACT_APP_POLLS_BASE_URL=https://private-b7de7-pollsapi.apiary-proxy.com/` yet In production environment can consume the Real API:
`REACT_APP_POLLS_BASE_URL=https://polls.apiblueprint.org/`

#5 Start development server: `yarn start`

#6 Additionally, to run tests: `yarn test` or lint using `yarn lint` 


### API
Built Using [Apiary's Polls API](https://pollsapi.docs.apiary.io). 
