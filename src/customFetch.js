import axios from "axios";
const url = `https://api.unsplash.com/search/photos`; //?client_id=${
// import.meta.env.VITE_API_KEY
//}&`;
//?client_id=${import.meta.env.VITE_API_KEY}&

//https://axios-http.com/docs/req_config
const customFetch = axios.create({
  baseURL: url,
  /*params: {
    client_id: import.meta.env.VITE_API_KEY,
  },*/
  /* headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`, // from doc
  },*/
});

//customFetch.defaults.headers["client_id"] =
//  import.meta.env.VITE_API_KEY;

customFetch.interceptors.request.use(
  (request) => {
    // old version
    // request.headers.common['Accept'] = 'application/json';
    request.headers["Accept"] = "application/json";

    console.log("request sent");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customFetch;
