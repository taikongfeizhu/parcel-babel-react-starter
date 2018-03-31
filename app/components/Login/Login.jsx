import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

@inject('store')
@observer
export default class Login extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  }
  render() {
    return (
      <div className='page login'>
        Your login form here...
        {this.props.store.authenticated &&
        !this.props.store.authenticating &&
        <Redirect to='/' />}
      </div>
    );
  }
}
