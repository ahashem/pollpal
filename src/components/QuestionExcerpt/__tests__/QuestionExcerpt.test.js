import React from 'react';
import { shallow } from 'enzyme/build';

import QuestionExcerpt from '../QuestionExcerpt';

import { mockQuestions } from '../../../utils/test-utils'

describe('<QuestionExcerpt /> Component', () => {
  it('should render children and match snapshot', () => {
    const rendered = shallow(<QuestionExcerpt
      excerpt={mockQuestions[0]}
    />);

    expect(rendered).toMatchSnapshot();
  });
});
