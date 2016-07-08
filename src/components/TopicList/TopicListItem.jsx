var React = require('react');

var TopicListItem = React.createClass({
  render: function() {
    return (
      <li>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
      </li>
    );
  }
});

module.exports = TopicListItem;
