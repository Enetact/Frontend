export enum QueryId {
  Quotes = 'quotes',
}

export const BASE_API = process.env.REACT_APP_BASE_API || '/v1';

export const ENDPOINTS = {
  CREW_SIZE: `${BASE_API}/crews`,
  DURATION: `${BASE_API}/jobdurations`,
  LIMITS: `${BASE_API}/limits`,
  COMPLETE_PROJECTS: `${BASE_API}/completeprojects`,
  ZIPCODES: `${BASE_API}/zipcodes`,
  JOB_CATEGORIES: `${BASE_API}/jobcategories`,
  POLICIES: `${BASE_API}/policies`,
  ESTIMATED_QUOTATION: `${BASE_API}/quotes/getestimatedquotation`,
  ACTUAL_QUOTATION: `${BASE_API}/quotes/getactualquotation`,
  STATE_BY_ZIPCODE: `${BASE_API}/states/zipcodes`,
  USERS: `${BASE_API}/users`,
  SIGNUP: `${BASE_API}/auth/register`,
  LOGIN: `${BASE_API}/auth/login`,
  MESSAGE: `${BASE_API}/messages`,
  AUTH_LOGIN: `${BASE_API}/auth/login`,
  AUTH_REFRESH: `${BASE_API}/auth/refresh-tokens`,
  AUTH_FORGOT_PASSWORD: `${BASE_API}/auth/forgot-password`,
};
