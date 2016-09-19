javascript-ecosystem-presentation
=================================

## 1-index.html
* Run `python -m SimpleHTTPServer 8080`
* Open http://localhost:8080/index.html

This version is an example of how JavaScript was included in an application back in the days.
All the necessary scripts are included (in correct order) in index.html

## 2-npm
* Run `npm install`
* Run `python -m SimpleHTTPServer 8080`
* Open http://localhost:8080/index.html

This version uses npm to maintain third party JavaScript.
In index.html we now reference React and ReactDOM from `node_modules` instead of some CDN on the internet.
If we update React though we still need to make changes to the index.html as well.

**Changed files:**

* index.html
* package.json

## 3-webpack-bundling
* Run `npm install`
* Run `npm run build`
* Run `python -m SimpleHTTPServer 8080`
* Open http://localhost:8080/index.html

This version uses webpack to bundle the application (and libraries like React) into one (or several) JavaScript bundle files.

**Changed files:**

* index.html
* package.json
* webpack.config.development.js

## 4-webpack-devserver
* Run `npm install`
* Run `npm start` (no longer need for python server)
* Open http://localhost:8080/

This version replaces the python SimpleHTTPServer with webpack's devserver. We will now be able to do stuff like linting, transpiling and testing while developing.

**Changed files:**

* package.json

## 5-webpack-html
* Run `npm install`
* Run `npm start` (no longer need for python server)
* Open http://localhost:8080/

This version uses the html-plugin for webpack to generate an index.html automatically. This way we don't need to update index.html manually with new files and such.

**Changed files:**

* package.json
* webpack.config.development.js
* index_template.html

## 6-es6
* Run `npm install`
* Run `npm start` (no longer need for python server)
* Open http://localhost:8080/

This version uses the EcmaScript6 standard for writing JavaScript. Babel is used via webpack.

**Changed files:**

* webpack.config.development.js
* .babelrc

## 7-eslint
* Run `npm install`
* Run `npm start` (no longer need for python server)
* Open http://localhost:8080/

This version uses eslint (via webpack) to check if the code conforms to certain standards.

**Changed files:**

* webpack.config.development.js
* .babelrc
* package.json
