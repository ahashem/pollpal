import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'speedux';
import { Alert, Spin } from 'antd';

import module from './QuestionsList.module';
import QuestionExcerpt from '../../components/QuestionExcerpt/QuestionExcerpt';


class QuestionsList extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      getQuestionsList: PropTypes.func,
    }).isRequired,
    state: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.bool,
      errorMsg: PropTypes.string,
      questions: PropTypes.arrayOf(PropTypes.shape({
        question: PropTypes.string,
      })),
    }).isRequired
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.getQuestionsList();
  }

  /**
   *
   * @param questions
   * @return {*}
   */
  renderQuestionsExcerpts = (questions) => {
    return questions.map((question, index) => {
      return (
        <QuestionExcerpt excerpt={question}/>
      );
    });
  };

  render() {

    const { state } = this.props;
    const { loading, questions, error, errorMsg } = state;

    return (
      <div>
        {
          error && (
            <Alert
              message="API Error"
              description={errorMsg}
              type="error"
              closable
            />
          )
        }
        {loading ?
          (
            <Spin/>
          )
          : this.renderQuestionsExcerpts(questions)
        }
      </div>
    );
  }
}

export default connect(QuestionsList, module);
