/* eslint-disable no-console */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser, uploadPhoto];
  return Promise.allSettled([promises[0](firstName, lastName), promises[1](fileName)])
    .then((values) => {
      const results = [];
      values.forEach((value) => {
        if (value.status === 'fulfilled') {
          results.push({ status: value.status, value: value.value });
        } else {
          results.push({ status: value.status, value: `${value.reason}` });
        }
      });
      return results;
    });
}
