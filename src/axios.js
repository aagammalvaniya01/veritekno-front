import axios from "axios";
// import { notification } from "antd";
import { NotificationManager } from "react-notifications";

import config from "./config";
import * as tokenService from "./services/token";
const instance = axios.create({
  baseURL: config.baseURI,
  headers: {
    "Content-type": "application/json",
  },
});

async function get(
  url,
  { params = {}, accessToken = false, responseType = "json", headers = {} } = {}
) {
  const authHeaders = {};

  if (accessToken) {
    authHeaders["Authorization"] = `Bearer ${tokenService.getAccessToken()}`;
  }

  const response = await instance({
    url,
    params,
    responseType,
    method: "get",
    headers: { ...authHeaders, ...headers },
  });
  return response;
}

async function post(url, { params = {}, body = {}, accessToken = false, headers = {} } = {}) {
  const authHeaders = {};

  if (accessToken) {
    authHeaders["Authorization"] = `Bearer ${tokenService.getAccessToken()}`;
  }

  try {
    const response = await instance({
      url,
      params,
      data: body,
      method: "post",
      headers: { ...authHeaders, ...headers },
    });
    NotificationManager.success(response?.data?.message, response?.data?.status);
    return response;
  } catch (error) {
    const errorMessage = error?.response?.data
      ? error?.response?.data?.error
      : "An error occurred.";
    NotificationManager.error(errorMessage, "Error");

    console.log("console_error", error);
    return error;
  }
}

async function put(url, { params = {}, body = {}, accessToken = false, headers = {} } = {}) {
  const authHeaders = {};

  if (accessToken) {
    authHeaders["Authorization"] = `Bearer ${tokenService.getAccessToken()}`;
  }

  try {
    const response = await instance({
      url,
      params,
      data: body,
      method: "put",
      headers: { ...authHeaders, ...headers },
    });
    NotificationManager.success(response?.data?.message, response?.data?.status);
    return response;
  } catch (error) {
    const errorMessage = error?.response?.data
      ? error?.response?.data?.error
      : "An error occurred.";
    NotificationManager.error(errorMessage, "Error");

    console.log(error);
    return error;
  }
}

async function remove(url, { params = {}, accessToken = false, headers = {} } = {}) {
  const authHeaders = {};

  if (accessToken) {
    authHeaders["Authorization"] = `Bearer ${tokenService.getAccessToken()}`;
  }

  try {
    const response = await instance({
      url,
      params,
      method: "delete",
      headers: { ...authHeaders, ...headers },
    });
    NotificationManager.success(response?.data?.message, response?.data?.status);
    return response;
  } catch (error) {
    const errorMessage = error?.response?.data
      ? error?.response?.data?.error
      : "An error occurred.";
    NotificationManager.error(errorMessage, "Error");

    console.log(error);
  }
}

const http = {
  ...instance,
  get,
  post,
  put,
  remove,
};

export default http;
