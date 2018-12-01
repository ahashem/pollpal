import React from 'react';

import module from '../QuestionsList.module';
import { questionsApi } from '../../../utils/API';
import { mockQuestions } from '../../../utils/test-utils';

jest.mock('../../../utils/API');

beforeAll(() => {
  const mockStore = {
    getState: () => ({
      QuestionsList: {
        questions: [],
      },
    }),
  };

  module.config({
    name: 'QuestionsList',
    store: mockStore,
  });
});

describe('<QuestionsList /> Module', () => {
  describe('Get Questions API', () => {
    let generator;
    beforeEach(() => {
      generator = module.actions.getQuestionsList();
    });

    test('it should loading before getting questions', () => {
      expect(generator.next().value).toEqual({
        loading: true,
      });
    });

    test('it should return all questions and save it to the state', async () => {
      questionsApi.getAllQuestions.mockReturnValue(new Promise((resolve) => {
        resolve(mockQuestions);
      }));
      generator.next();
      const allQuestions = await generator.next().value;
      expect(allQuestions).toEqual(mockQuestions);
    });

    test('it should handle returning error from API', async () => {
      generator.next();

      questionsApi.getAllQuestions.mockReturnValue(new Promise((resolve, reject) => {
        const error = {
          errorCode: 500,
          errorMsg: 'Sorry, an error has occurred',
        };
        reject(new Error(JSON.stringify(error)));
      }));

      const allQuestions = await generator.next().value;

      expect(generator.next(allQuestions).value).toEqual({
        error: true,
        errorMsg: 'Sorry, an error has occurred',
        loading: false,
      });
    });

    test('it should finish loading after getting questions', async () => {
      generator.next();
      questionsApi.getAllQuestions.mockReturnValue(new Promise((resolve) => {
        resolve(mockQuestions);
      }));

      const questionsData = await generator.next().value;

      expect(generator.next(questionsData).value).toHaveProperty('loading', false);
    });
  });
});
