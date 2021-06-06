import { BASE_URL } from '../constants/index';

export const requestWrapper = async (
  url: string,
  method: string,
  body: Object
) => {
  try {
    const mainCall = async () => {
      return await fetch(`${BASE_URL}${url}`, {
        method: method,
        body: JSON.stringify(body),
      });
    };
    var response = await mainCall();
    var json = await response.json();
    return { json, response };
  } catch (e) {
    throw e;
  }
};

export const getRequestWrapper = async (url: string, method = 'GET') => {
  try {
    const mainCall = async () => {
      return await fetch(`${BASE_URL}${url}`, {
        method: method,
      });
    };
    var response = await mainCall();
    var json = await response.json();
    return { json, response };
  } catch (e) {
    throw e;
  }
};
