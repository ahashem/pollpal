import React from 'react';
import PropTypes from 'prop-types';

/**
 * Display
 * @param question
 * @param published_at
 * @param choices
 */
const QuestionExcerpt = ({ excerpt: { url, question, published_at: published, choices } }) => {
  return (
    <div>
      <p>{question}</p>
      <p>{published}</p>
      <p>{choices ? choices.length : 0}</p>
    </div>
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
