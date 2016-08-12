import React, { PropTypes } from 'react';

import TopicListItem from './TopicListItem';

const TopicList = ({ topics }) =>
  <ul>
    {
      topics.map((topic) =>
        <TopicListItem
          name={topic.name}
          description={topic.description}
          key={topic.id}
        />
      )
    }
  </ul>;

TopicList.propTypes = {
  topics: PropTypes.array,
};

export default TopicList;
