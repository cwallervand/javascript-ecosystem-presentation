import React from 'react';

import TopicListItem from './TopicListItem';

const TopicList = ({topics}) =>
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

export default TopicList;
