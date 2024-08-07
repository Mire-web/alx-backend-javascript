/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  promise.then((response) => {
    console.log('Got a response from API');
  })
    .catch(() => { throw new Error(); });
}
