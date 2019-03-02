# Streamlabs

Streamlabs application which exposes two simple pages to the browser

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Streamlabs has a few requirements. You will need to make sure you meets the following requirements:

```
Git 
Docker
```

### Installing

How to get a development env running:

Clone the repository
```
git clone https://github.com/cfaguilera20/streamlabs.git
```

It will create a directory called streamlabs inside the current folder.
Inside that directory, it will generate the project structure:

```
├── README.md
├── package.json
├── .gitignore
├── .travis
├── docker-compose.yml
├── Dockerfile
├── Dockerfile.dev
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── components
        ├── ....
    ├── containers
        ├── ....
    ├── hoc
        ├── ....
    ├── shared
        ├── ....
    ├── store
        ├── ....
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

Once the repository is cloned, you can open your project folder:

```
cd streamlabs
```

Inside the project, you have to run the following commands:

```
docker-compose up -d 
```

Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

## Deployment

The application use Travis to deploy to AWS.

## Built With

* [Create React App](https://github.com/facebook/create-react-app) - Create React apps with no build configuration.

* [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
* [Redux-Saga](https://github.com/redux-saga/redux-saga) - Library that aims to make application side effects easier to manage, more efficient to execute, easy to test, and better at handling failures.

## Authors

* **Carlos Aguilera** - *Initial work* - [cfaguilera20](https://github.com/cfaguilera20)
