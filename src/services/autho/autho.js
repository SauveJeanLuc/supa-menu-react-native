import axios from "axios";

const ENVIRONMENT = {
  API_URL: "http://196.223.240.154:8099/supapp/api",
};

export async function signup(data) {
  try {
    let res = await axios.post(`${c.API_URL}/auth/client/signup`, data);
    return res.data;
  } catch (e) {
    throw handler(e);
  }
}

export function handler(err) {
  let error = err;

  if (err.response && err.response.data.hasOwnProperty("message"))
    error = err.response.data;
  else if (!err.hasOwnProperty("message")) error = err.toJSON();

  return new Error(error.message);
}
