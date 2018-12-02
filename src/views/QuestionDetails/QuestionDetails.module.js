import { createModule } from 'speedux';
import { questionsApi } from '../../utils/API';

export default createModule('questionDetails', {

  state: {
    loading: false,
    error: false,
    errorMsg: '',
    question: {},
    voting: false,
    voted: {}
  },

  actions: {
    /**
     * this action get Question Details
     * @param {string} questionId
     */
    * getQuestionDetails(questionId) {
      yield {
        loading: true,
      };

      const question = yield questionsApi.getQuestionById(questionId).catch(e => e);

      if (question instanceof Error) {
        const { errorMsg } = JSON.parse(question.message);
        yield {
          loading: false,
          error: true,
          errorMsg,
        };
      } else {
        yield {
          loading: false,
          question,
        };
      }
    },

    /**
     * this action Performs Vote on a certain Question's choice
     * @param {string} voteUrl
     */
    * vote(voteUrl) {
      yield {
        voting: true,
      };

      const voted = yield questionsApi.voteOnChoice(voteUrl).catch(e => e);

      if (voted instanceof Error) {
        const { errorMsg } = JSON.parse(voted.message);
        yield {
          voting: false,
          error: true,
          errorMsg,
        };
      } else {
        yield {
          voting: false,
          voted,
        };
      }
    },
  },

  handlers: {},
});
