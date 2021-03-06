import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import LazyRoute from 'lazy-route';
import TopBar from './Navigation/TopBar';

@withRouter
@inject('store')
@observer
export default class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  componentDidMount() {
    this.authenticate();
  }

  authenticate(e) {
    if (e) e.preventDefault();
    this.store.appState.authenticate(true);
  }

  render() {
    const {
      authenticated,
      authenticating,
      timeToRefresh,
      refreshToken,
      testval,
    } = this.store.appState;
    return (
      <div className='wrapper'>
        {/* <DevTools /> */}
        <TopBar />
        <Route
          exact
          path='/'
          render={props => (
            <LazyRoute {...props} component={import('./Home')} />
          )}
        />
        <Route
          exact
          path='/posts'
          render={props => (
            <LazyRoute {...props} component={import('./SubPage')} />
          )}
        />
        <Route
          exact
          path='/posts/:id'
          render={props => (
            <LazyRoute {...props} component={import('./SubItem')} />
          )}
        />
        <Route
          exact
          path='/login'
          render={props => (
            <LazyRoute {...props} component={import('./Login')} />
          )}
        />
        <footer>
          {testval}
          <a href='https://twitter.com/mhaagens' target='_blank' rel='noopener noreferrer'>
            @mhaagens
          </a>
          {' '}
          | github:
          {' '}
          <a href='https://github.com/mhaagens' target='_blank' rel='noopener noreferrer'>
            mhaagens
          </a>
        </footer>
      </div>
    );
  }
}
