import React, {PropTypes} from 'react';

const TopicListItem = ({name, description}) =>
  <li>
    <h3>{name}</h3>
    <p>{description}</p>
  </li>;

TopicListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default TopicListItem;
