import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

const ActiveLink = ({ to, activeOnlyWhenExact, ...rest }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <Link to={to} {...rest} className={match ? 'active' : ''} />
    )}
  />
);

ActiveLink.propTypes = {
  activeOnlyWhenExact: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
};

export default ActiveLink;
