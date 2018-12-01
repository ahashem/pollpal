import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Spin } from 'antd';

import QuestionsList from '../QuestionsList';


describe('<QuestionsList /> Component', () => {
  it('should render children', () => {
    const questionsList = {
      loading: false,
      error: false,
      errorMes: '',
    };
    const mockStore = configureStore();
    const store = mockStore({ questionsList });

    const rendered = shallow(<QuestionsList store={store} />);

    expect(rendered).toMatchSnapshot();
  });

  describe('<QuestionsList /> Component UI', () => {
    describe('UI during loading', () => {
      let wrapper;

      beforeAll(() => {
        const questionsList = {
          loading: true,
        };
        const mockStore = configureStore();
        const store = mockStore({ questionsList });

        wrapper = mount(<QuestionsList store={store}/>);
      });

      test('it should render loading spinner while loading', () => {
        const spinner = wrapper.find('Spin');
        expect(spinner.exists()).toBe(true);
      });

      test('it should not render other elements', () => {
        const spinner = wrapper.find(Spin);
        expect(spinner.exists()).toBe(true);
      });

    });

  });
});
