export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  let count = 0;
  if (weakMap.get(endpoint)) count = weakMap.get(endpoint);
  weakMap.set(endpoint, count + 1);
  if (weakMap.get(endpoint) >= 5) throw new Error('Endpoint load is high');
};
