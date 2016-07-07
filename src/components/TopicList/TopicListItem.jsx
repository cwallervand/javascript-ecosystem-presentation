window.TopicListItem = React.createClass({
  render: function() {
    return (
      <li>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
      </li>
    );
  }
});
