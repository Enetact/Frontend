import localforage from 'localforage';

export const USER_STORAGE_KEY = 'auth-data';

localforage.config({
  name: 'MissionUnderwriters',
  description: '',
});

export default localforage;
