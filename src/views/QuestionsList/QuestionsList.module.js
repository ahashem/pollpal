import { createModule } from 'speedux';
import { questionsApi } from '../../utils/API';

export default createModule('QuestionsList', {

  state: {
    loading: false,
    error: false,
    errorMsg: '',
    questions: [],
  },

  actions: {
    /**
     * this action get all questions
     */
    * getQuestionsList() {
      yield {
        loading: true,
      };

      const allQuestions = yield questionsApi.getAllQuestions().catch(e => e);

      if (allQuestions instanceof Error) {
        const { errorMsg } = JSON.parse(allQuestions.message);
        yield {
          loading: false,
          error: true,
          errorMsg,
        };
      } else {
        yield {
          loading: false,
          questions: allQuestions,
        };
      }
    },
  },

  handlers: {},
});
