import React from 'react';
import { NavLink } from 'react-router-dom';

import { pathRoot } from '../../AppRouter';

const NotFound = () => (
  <div>
    <h1>
      404
    </h1>
    <h3>
      This page does not exist
    </h3>
    <NavLink
      to={pathRoot}
    >
      go back to Questions List ->
    </NavLink>
  </div>
);

export default NotFound;
