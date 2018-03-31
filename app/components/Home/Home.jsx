import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import './home.less';

@inject('store')
@observer
export default class Home extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    return (
      <div className='page home'>
        <header>
          <div className='hero-unit'>
            <div className='react-logo' />
            <h1>React MobX React-Router 4 Boilerplate</h1>
          </div>
          <div className='hero-subunit'>
            <h4>
              A simple starting point for React with routing, data-fetching and state management!
            </h4>
          </div>
          <div className='github-buttons'>
            <a
              href='https://github.com/mhaagens/react-mobx-react-router4-boilerplate'
              target='_blank'
              rel='noopener noreferrer'
            >
              Download from GitHub
            </a>
          </div>
        </header>
        <main>
          <div className='section-header'>
            <h3>Included libraries</h3>
            <hr />
          </div>
          <div className='boilerplate-item'>
            <div className='boilerplate-logo react' />
            <div className='boilerplate-item-content'>
              <a
                href='https://facebook.github.io/react/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <h4>React</h4>
              </a>
              <small>UI Library</small>
              <p>
                React makes it painless to create
                {' '}
                <br />
                interactive UIs.
              </p>
            </div>
          </div>
          <div className='boilerplate-item'>
            <div className='boilerplate-logo mobx' />
            <div className='boilerplate-item-content'>
              <a
                href='http://mobxjs.github.io/mobx/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <h4>MobX</h4>
              </a>
              <small>Reactive State Management</small>
              <p>
                MobX is a battle tested library that makes state management simple and scalable.
              </p>
            </div>
          </div>
          <div className='boilerplate-item'>
            <div className='boilerplate-logo reactrouter' />
            <div className='boilerplate-item-content'>
              <a
                href='https://react-router.now.sh/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <h4>React Router 4</h4>
              </a>
              <small>Routing Library</small>
              <p>
                React Router is a declarative way to render, at any location, any UI that you and
                your team can think up.
              </p>
            </div>
          </div>
          <div className='boilerplate-item'>
            <div className='boilerplate-logo webpack' />
            <div className='boilerplate-item-content'>
              <a href='https://parceljs.org/' target='_blank' rel='noopener noreferrer'>
                <h4>Parcel</h4>
              </a>
              <small>Module Bundler</small>
              <p>
                Blazing fast, zero configuration web application bundler.
              </p>
            </div>
          </div>
          <div className='section-header extras'>
            <h4>Extras</h4>
            <hr />
            <ul>
              <li>✓ Async Component Loading</li>
              <li>✓ Code-splitting</li>
              <li>✓ Extracted and autoprefixed CSS</li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}
