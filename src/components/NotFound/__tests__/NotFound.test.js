import React from 'react';
import { shallow } from 'enzyme/build';

import NotFound from '../NotFound';


describe('<NotFound /> Component', () => {
  it('should render children and match snapshot', () => {
    const rendered = shallow(<NotFound/>);

    expect(rendered).toMatchSnapshot();
  });
});
