import React from 'react';

const TopicListItem = ({name, description}) =>
  <li>
    <h3>{name}</h3>
    <p>{description}</p>
  </li>;

  export default TopicListItem;
