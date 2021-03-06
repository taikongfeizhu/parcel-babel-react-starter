import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Match, Link } from 'react-router-dom';
import Protected from '../Wrapper/Protected';
import DataWrapper from '../Wrapper/DataWrapper';
import './posts.less';

@Protected
@DataWrapper
@observer
export default class SubPage extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.getItem = this.getItem.bind(this);
  }

  getItem() {
    console.log(this.store.appState.getItem);
  }

  render() {
    const { items } = this.store.appState;
    return (
      <div className='page posts'>
        <h1 onClick={this.getItem}>Posts</h1>
        <p className='subheader'>
          Posts are fetched from jsonplaceholder.typicode.com
        </p>
        <hr />
        <ul>
          {items && items.length
            ? items.slice(6, 12).map(post => (
              <li key={post.id}>
                <Link
                  to={`${this.props.match.path}/${post.id}`}
                >
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.body.substring(0, 120)}</p>
              </li>
              ))
            : 'Loading...'}
        </ul>
      </div>
    );
  }
}
