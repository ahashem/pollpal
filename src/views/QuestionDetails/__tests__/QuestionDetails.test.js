import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Spin } from 'antd';

import QuestionDetails from '../QuestionDetails';


describe('<QuestionDetails /> Component', () => {
  it('should render children', () => {
    const questionsList = {
      loading: false,
      error: false,
      errorMes: '',
    };
    const mockStore = configureStore();
    const store = mockStore({ questionsList });

    const rendered = shallow(<QuestionDetails question={store} />);

    expect(rendered).toMatchSnapshot();
  });
});
