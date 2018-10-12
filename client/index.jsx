import React from 'react';
import ReactDOM from 'react-dom';

import RootContainer from './containers/RootContainer';

ReactDOM.render(
  <RootContainer />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./Root', () => {
    // eslint-disable-next-line
    const NextRoot = require('./containers/RootContainer').default
    ReactDOM.render(
      <RootContainer />,
      document.getElementById('root')
    )
  })
}
