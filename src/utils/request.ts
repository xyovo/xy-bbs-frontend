import { extend } from "umi-request";

const request = extend({
  timeout: 1000 * 60 * 2, // 2 minutes
});

request.interceptors.request.use(
  (url, options) => {
    const newUrl = `${process.env.API_BASE_URL}${url}`;
    return {
      url: newUrl,
      options,
    };
  },
  { global: true }
);

export default request;
