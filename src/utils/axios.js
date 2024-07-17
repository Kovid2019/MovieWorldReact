import axios from "axios";
const apiKEY = import.meta.env.VIT_APIKEY;
const apiEP = `https://omdbapi.com/?apikey=64dc7088&`;
// const apiEP = `https://omdbapi.com/?apikey=${apiKEY}&`;
export const fetchFromAPI = async (str) => {
  try {
    const url = apiEP + "t=" + str;
    const response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
