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
