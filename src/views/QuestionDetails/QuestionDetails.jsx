import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'speedux';
import { Alert, Button } from 'antd';

import Choices from '../../components/Choices/Choices';
import module from './QuestionDetails.module';
import { pathRoot } from '../../AppRouter';

import './QuestionDetails.scss';

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
      voting: PropTypes.bool,
      voted: PropTypes.shape({}),
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    selectedChoiceUrl: null,
  };

  componentDidMount() {
    const { actions, match } = this.props;
    actions.getQuestionDetails(match.params.id);
  }

  /**
   * Handle choice Voting action
   */
  vote = () => {
    const { actions, history } = this.props;
    const { selectedChoiceUrl } = this.state;

    actions.vote(selectedChoiceUrl);
    history.push(pathRoot);
  };

  /**
   * Preserve selected choice URL
   * @param e
   */
  selectChoice = (e) => {
    this.setState({
      selectedChoiceUrl: e.target.value
    });
  };

  /**
   *
   * @param {Array} choices
   * @param {Boolean} loading
   * @return {*}
   */
  renderQuestionsChoices = (choices = [], loading = false) => {
    return (
      <div style={{ marginBottom: 16 }}>
        <Choices
          onChange={this.selectChoice}
          loading={loading}
          choices={choices}
        />
      </div>
    );
  };

  render() {
    const { selectedChoiceUrl } = this.state;
    const { state } = this.props;
    const { loading, voting, question: questionDetails, error, errorMsg } = state;
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
            loading={voting}
            onClick={this.vote}
            disabled={!selectedChoiceUrl}
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
