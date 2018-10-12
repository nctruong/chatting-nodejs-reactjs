import './styles/style.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import RootContainer from './containers/RootContainer';
import configureStore from './store/configure-store';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <RootContainer />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};
render();

if (module.hot) {
  module.hot.accept('./containers/RootContainer', () => {
    render();
  });
}

// ReactDOM.render(
//   <RootContainer />,
//   document.getElementById('root')
// )
// if (module.hot) {
//   module.hot.accept('./Root', () => {
//     // eslint-disable-next-line
//     const NextRoot = require('./containers/RootContainer').default
//     ReactDOM.render(
//       <RootContainer />,
//       document.getElementById('root')
//     )
//   })
// }
