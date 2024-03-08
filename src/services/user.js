import http from "../axios";
import config from "../config";
export const login = async (body) => {
  const { data } = await http.post(config.apiEndPoint.user.login, {
    body,
  });
  console.log("console_data", data);
  return data;
};

/**
 *
 * @param {Object} body
 * @returns {Object} data
 */
export const registerUser = async (body) => {
  const { data } = await http.post(config.apiEndPoint.user.create, {
    body,
  });

  return data;
};

export const AddUser = async (body) => {
  const { data } = await http.post(config.apiEndPoint.user.addUser, {
    body,
  });

  return data;
};
