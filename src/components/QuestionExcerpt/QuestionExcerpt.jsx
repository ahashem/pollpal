import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

import Helpers from '../../utils/helpers';

/**
 * Display Question summary
 * @param question
 * @param published_at
 * @param choices
 */
const QuestionExcerpt = ({ excerpt: { url, question, published_at: published, choices } }) => {
  return (
    <Card
      title={question}
      hoverable
    >
      <p>{Helpers.formatDate(published)}</p>
      <p>{choices ? choices.length : 0} choice(s)</p>
    </Card>
  );
};

QuestionExcerpt.propTypes = {
  excerpt: PropTypes.shape({
    url: PropTypes.string,
    questions: PropTypes.string,
    published_at: PropTypes.string,
    choices: PropTypes.arrayOf(PropTypes.shape({}))
  }).isRequired,
};

QuestionExcerpt.defaultProps = {};

export default QuestionExcerpt;
