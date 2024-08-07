/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  return promise.then((response) => ({ status: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => console.log('Got a response from API'));
}
