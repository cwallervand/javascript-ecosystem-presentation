var React = require('react');

var TopicList = require('./components/TopicList/TopicList.jsx');

var AppContainer = React.createClass({
  render: function() {
    var topics = [
      {
        name: 'Webpack',
        description: 'A module bundler...and so much more',
        id: 1
      },
      {
        name: 'npm',
        description: 'An awesome package manager',
        id: 2
      },
      {
        name: 'Babel',
        description: 'The compiler for writing next generation JavaScript',
        id: 3
      },
      {
        name: 'es6',
        description: 'The latest and greatest in the JavaScript language',
        id: 4
      },
      {
        name: 'eslint',
        description: 'A configurable linter for your es6 code',
        id: 5
      },
    ];
    return (
      <div className="app-container">
        <TopicList topics={topics} />
      </div>);
  }
});

module.exports = AppContainer;
