import React from 'react';
import TopicList from './components/TopicList/TopicList';

const AppContainer = () => {
  const topics = [
    {
      name: 'Back to basics',
      description: 'A walkthrough of how we used to do things back in the day',
      id: 1,
    },
    {
      name: 'npm',
      description: 'How can we manage third party code using an awesome package manager',
      id: 2,
    },
    {
      name: 'Webpack bundling',
      description: 'How do we use Webpack to bundle our source code',
      id: 3,
    },
    {
      name: 'Webpack devserver ',
      description: 'How do we use Webpack as a devserver',
      id: 4,
    },
    {
      name: 'Templating an index.html file with Webpack',
      description: 'How can we automize an index.html file to load the content we want using Webpack',
      id: 5,
    },
    {
      name: 'ES6',
      description: 'How can we used the latest and greates from JavaScript (through Babel through Webpack)',
      id: 6,
    },
    {
      name: 'Eslint',
      description: 'How can me make sure that our source code conforms to a specific code style (using Eslint through Webpack)',
      id: 7,
    },
  ];

  return (
    <div className="app-container">
      <TopicList topics={topics} />
    </div>
  );
};

export default AppContainer;
