import { ENDPOINTS } from '@/utils/constants';
import { rest } from 'msw';
import {
  statesMock,
  jobCategoriesMock,
  crewSizeMock,
  durationMock,
  quotationMock,
} from './data';

export const handlers = [
  rest.get(`${ENDPOINTS.STATE_BY_ZIPCODE}/:zipcode`, (req, res, ctx) => {
    return res(ctx.json(statesMock[0]));
  }),
  rest.get(ENDPOINTS.JOB_CATEGORIES, (req, res, ctx) => {
    return res(ctx.json(jobCategoriesMock));
  }),
  rest.get(ENDPOINTS.CREW_SIZE, (req, res, ctx) => {
    return res(ctx.json(crewSizeMock));
  }),
  rest.get(ENDPOINTS.DURATION, (req, res, ctx) => {
    return res(ctx.json(durationMock));
  }),
  rest.post(ENDPOINTS.ESTIMATED_QUOTATION, (req, res, ctx) => {
    return res(ctx.json(quotationMock));
  }),
  rest.post(ENDPOINTS.MESSAGE, (req, res, ctx) => {
    return res(ctx.json({ status: 200 }));
  }),
];
