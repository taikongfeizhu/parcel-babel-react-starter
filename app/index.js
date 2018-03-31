import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';
import { rehydrate, hotRehydrate } from 'rfx-core';
import { isProduction } from './utils/constants';
import App from './components/App';
import stores from './stores/stores';

import './styles/main.less';

const store = rehydrate();

const renderApp = () => {
  render(
    <AppContainer>
      <Router>
        <Switch>
          <Provider store={isProduction ? store : hotRehydrate()}>
            <App />
          </Provider>
        </Switch>
      </Router>
    </AppContainer>,
    document.getElementById('root'),
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept(() => renderApp(App));
}
