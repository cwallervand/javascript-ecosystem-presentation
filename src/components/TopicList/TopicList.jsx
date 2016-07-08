var React = require('react');

var TopicListItem = require('./TopicListItem.jsx');

var TopicList = React.createClass({
  render: function() {
    return (
      <ul>
        {
          this.props.topics.map(function(topic) {
            return (
              <TopicListItem
                name={topic.name}
                description={topic.description}
                key={topic.id}
              />
            );
          })
        }
      </ul>
    );
  }
});

module.exports = TopicList;
