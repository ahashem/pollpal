import React from 'react';

import module from '../QuestionDetails.module';
import { questionsApi } from '../../../utils/API';
import { mockQuestions } from '../../../utils/test-utils';

jest.mock('../../../utils/API');

beforeAll(() => {
  const mockStore = {
    getState: () => ({
      QuestionDetails: {
        questions: [],
      },
    }),
  };

  module.config({
    name: 'questionsList',
    store: mockStore,
  });
});

describe('<QuestionDetails /> Module', () => {
  describe('Get Question Details API', () => {
    let generator;
    beforeEach(() => {
      generator = module.actions.getQuestionDetails();
    });

    test('it should loading before getting question', () => {
      expect(generator.next().value).toEqual({
        loading: true,
      });
    });

    test('it should return question details and save it to the state', async () => {
      questionsApi.getQuestionById.mockReturnValue(new Promise((resolve) => {
        resolve(mockQuestions[0]);
      }));
      generator.next();
      const question = await generator.next().value;
      expect(question).toEqual(mockQuestions[0]);
    });

    test('it should handle returning error from API', async () => {
      generator.next();

      questionsApi.getQuestionById.mockReturnValue(new Promise((resolve, reject) => {
        const error = {
          errorCode: 500,
          errorMsg: 'Sorry, an error has occurred',
        };
        reject(new Error(JSON.stringify(error)));
      }));

      const question = await generator.next().value;

      expect(generator.next(question).value).toEqual({
        error: true,
        errorMsg: 'Sorry, an error has occurred',
        loading: false,
      });
    });

    test('it should finish loading after getting questions', async () => {
      generator.next();
      questionsApi.getQuestionById.mockReturnValue(new Promise((resolve) => {
        resolve(mockQuestions);
      }));

      const questionsData = await generator.next().value;

      expect(generator.next(questionsData).value).toHaveProperty('loading', false);
    });
  });
});
