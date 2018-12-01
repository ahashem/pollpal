import React from 'react';
import { shallow } from 'enzyme/build';

import Choices from '../Choices';

import { mockQuestions } from '../../../utils/test-utils';

describe('<Choices /> Component', () => {
  it('should render children and match snapshot', () => {
    const mockOnChange = jest.fn();

    const rendered = shallow(<Choices
      choices={mockQuestions[0].choices}
      onChange={mockOnChange}
      loading={false}
    />);

    expect(rendered).toMatchSnapshot();
  });
});
