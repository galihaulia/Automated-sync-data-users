require('dotenv').config();
const apiSSO = process.env.API_SSO;
const accessToken = process.env.ACCESS_TOKEN;
const apiTimeOut = process.env.API_TIMEOUT;
const axios = require('axios');

exports.getInstanceGetSSO = () => {
  const instance = axios.create({
    baseURL : apiSSO,
    proxy : false,
    timeout : parseInt(apiTimeOut),
    headers: {
      'accept': 'application/json',
      'authorization': `Bearer ${accessToken}`
    }
  });
  return instance;
}