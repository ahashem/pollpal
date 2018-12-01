import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import QuestionsList from '../QuestionsList';


describe('<QuestionsList /> Component', () => {
  it('should render children', () => {
    const QuestionsListStore = {
      loading: false,
      error: false,
      errorMes: '',
    };
    const mockStore = configureStore();
    const store = mockStore({ QuestionsListStore });

    const rendered = shallow(<QuestionsList store={store} />);

    expect(rendered).toMatchSnapshot();
  });
});
