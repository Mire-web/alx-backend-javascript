import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser, uploadPhoto];
  return Promise.allSettled([promises[0](firstName, lastName), promises[1](fileName)])
    .then((values) => (values));
}
