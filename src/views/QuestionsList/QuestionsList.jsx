import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'speedux';
import { Alert, List, Spin } from 'antd';

import module from './QuestionsList.module';
import QuestionExcerpt from '../../components/QuestionExcerpt/QuestionExcerpt';
import { NavLink } from 'react-router-dom';

const { Item: ListItem } = List;

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
    return (
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
        dataSource={questions}
        renderItem={question => (
          <NavLink
            to={question.url}
          >
            <ListItem>
              <QuestionExcerpt
                excerpt={question}
              />
            </ListItem>
          </NavLink>
        )}
      />
    );
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
