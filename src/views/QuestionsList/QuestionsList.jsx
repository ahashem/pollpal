import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'speedux';
import { Alert, List, Skeleton } from 'antd';

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
   * @param loading
   * @return {*}
   */
  renderQuestionsExcerpts = (questions, loading = false) => {
    return (
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
        dataSource={questions}
        loading={loading}
        renderItem={question => (
          <NavLink
            to={question.url}
          >
            <ListItem>
              <Skeleton loading={loading} active>
                <QuestionExcerpt
                excerpt={question}
              />
              </Skeleton>
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
        <h1>Questions</h1>
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
        {
          <React.Fragment>

            {this.renderQuestionsExcerpts(questions, loading)}
          </React.Fragment>
        }
      </div>
    );
  }
}

export default connect(QuestionsList, module);
