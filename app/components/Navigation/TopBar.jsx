import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import TopNav from './TopNav';
import Button from './Button';
import './TopBar.less';

@withRouter
@inject('store')
@observer
export default class TopBar extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.store = this.props.store.appState;
    this.authenticate = this.authenticate.bind(this);
  }

  authenticate(e) {
    if (e) e.preventDefault();
    this.store.authenticate();
  }

  render() {
    const { authenticated } = this.store;
    return (
      <div className='topbar'>
        <TopNav location={this.props.location} />
        <Button
          onClick={this.authenticate}
          title={authenticated ? 'Log out' : 'Sign in'}
        />
      </div>
    );
  }
}
