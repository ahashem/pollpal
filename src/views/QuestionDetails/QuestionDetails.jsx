import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'speedux';
import { Alert, Button, List, Skeleton } from 'antd';

import module from './QuestionDetails.module';
import { withRouter } from 'react-router-dom';
import Helpers from '../../utils/helpers';

const { Item } = List;

class QuestionDetails extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      vote: PropTypes.func,
      getQuestionDetails: PropTypes.func,
    }).isRequired,
    state: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.bool,
      errorMsg: PropTypes.string,
      question: PropTypes.shape({
        url: PropTypes.string,
        published_at: PropTypes.string,
        question: PropTypes.string,
        choices: PropTypes.arrayOf(PropTypes.shape({
          choice: PropTypes.string,
          url: PropTypes.string,
          votes: PropTypes.number,
        }))
      }),
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };

  componentDidMount() {
    const { actions, match } = this.props;
    actions.getQuestionDetails(match.params.id);
  }

  vote = (choice) => {
    const { actions, match } = this.props;
    actions.vote(match.params.id, choice);
  };

  /**
   *
   * @param {Array} choices
   * @param {Boolean} loading
   * @return {*}
   */
  renderQuestionsChoices = (choices = [], loading = false) => {
    const choicesCount = choices.reduce((acc, curr) => acc + curr.votes, 0);
    return (
      <List
        itemLayout="horizontal"
        loading={loading}
        dataSource={choices}
        renderItem={choice => (
          <Item key={choice.url}>
            <Skeleton avatar title={false} loading={loading} active>
              <Item.Meta
                title={choice.choice}
                description={`${choice.votes} votes`}
              />
              <div>{`${Helpers.calculatePercentage(choice.votes, choicesCount)} %`}</div>
            </Skeleton>
          </Item>
        )}
      />
    );
  };

  render() {

    const { state } = this.props;
    const { loading, question: questionDetails, error, errorMsg } = state;
    const { question, choices } = questionDetails;

    return (
      <div>
        <h1>Questions Detail</h1>
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
        {<React.Fragment>
          <h3>Question: {question}</h3>
          {this.renderQuestionsChoices(choices, loading)}
          <Button
            htmlType="submit"
            type="primary"
          >
            Save
          </Button>
        </React.Fragment>
        }
      </div>
    );
  }
}

export default withRouter(connect(QuestionDetails, module));