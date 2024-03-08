import http from "../axios";
import config from "../config";
export const createContactUs = async (body) => {
  const { data } = await http.post(config.apiEndPoint.contactUs.create, {
    body,
    accessToken: true,
  });

  return data;
};
