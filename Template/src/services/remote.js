import axios from 'axios';
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
instance.defaults.headers.common['x-rapidapi-key'] =
  'f71e549a9dmshfbb0ac22addfd31p14893fjsn6c4b9c9da8b7';
instance.defaults.headers.common['x-rapidapi-host'] =
  'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com';

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log('config:', config);
    return config;
  },
  function (error) {
    // Do something with request error
    console.log('error:', error);
    return {
      data: null,
      isError: true,
      msg: 'Something went wrong!',
    };
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    console.log('response:', response);
    return response;
  },
  function (error) {
    // Do something with response error
    console.log('error:', error);
    return {
      data: null,
      isError: true,
      code: error?.response.status,
      msg: 'Something went wrong!',
    };
  },
);

export default instance;
