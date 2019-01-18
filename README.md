# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* This is the internal ui library for simpleryo
* Version 0.2.3

### Pre-requisites ###

Before getting started, make sure you have a specific version of Node.js installed. The boron LTS is an ideal starting point.

* Install `nvm` (Node Version Manager) [Here is the install instruction](https://github.com/creationix/nvm#installation)
* Check out the boron LTS(Long-term Support) of Node.js by following scripts

```javascript
nvm install --lts=boron
nvm use --lts=boron
```

Also install `yarn` as dependency management tool. [Detail about the installation](https://yarnpkg.com/en/docs/install)

```javascript
brew install yarn --ignore-dependencies
```

### How do I get set up? ###
* Clone the Repo

* Install dependencies
```javascript
yarn install
```

* Start a web server
```javascript
yarn start
```

* How to run tests
```javascript
yarn run test
```

* How to build
```javascript
yarn run build
```

### Contribution guidelines ###
* Writing tests
* Code review
* [Learn Markdown](https://guides.github.com/features/mastering-markdown/)

### Who do I talk to? ###

* Repo owner or admin

### Code standard ###

- Branch name
  - Feature/dropdown (such as the development of new modules dropdown)

  - Bugfix/dropdown-not-work-on-ie (such as repair dropdown does not work on ie)

  - Spike/animation (such as trying a animation)
