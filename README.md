# [Web] Proffy
[![react](https://img.shields.io/badge/reactjs-16.13.1-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
[![eslint](https://img.shields.io/badge/eslint-6.8.0-4b32c3?style=flat-square&logo=eslint)](https://eslint.org/)
[![airbnb-style](https://flat.badgen.net/badge/style-guide/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/DiegoVictor/proffy-web/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


This web version allow NGOs to register yourself and manage its incidents. All the resources used by this application comes from its [`API`](https://github.com/DiegoVictor/bethehero-api).

## Table of Contents
* [Screenshots](#screenshots)
* [Installing](#installing)
* [Configuring](#configuring)
    * [.env](#env)
    * [API](#api)
* [Usage](#usage)

# Screenshots
Click to expand.<br>
<img src="https://raw.githubusercontent.com/DiegoVictor/proffy-web/master/screenshots/home.png" width="49%"/>
<img src="https://raw.githubusercontent.com/DiegoVictor/proffy-web/master/screenshots/teachers.png" width="49%"/>
<img src="https://raw.githubusercontent.com/DiegoVictor/proffy-web/master/screenshots/form.png" width="49%"/>

# Installing
Easy peasy lemon squeezy:
```
$ yarn
```
Or:
```
$ npm install
```
> Was installed and configured the [`eslint`](https://eslint.org/) and [`prettier`](https://prettier.io/) to keep the code clean and patterned.

## Configuring
Configure your environment variables and remember to start the [API](https://github.com/DiegoVictor/proffy-api) before to start this app.

### .env
In this file you may configure the API's url. Rename the `.env.example` in the root directory to `.env` then just update with your settings.

key|description|default
---|---|---
REACT_APP_API_URL|API's url with version (v1)|`http://localhost:3333/v1`

### API
Start the [API](https://github.com/DiegoVictor/proffy-api) (see its README for more information). In case of any change in the API's `port` or `host` remember to update the [`.env`](#env) too.


# Usage
To start the app run:
```
$ yarn start
```
Or:
```
npm run start
```
