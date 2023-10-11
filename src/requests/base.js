import axios from "axios";

const instance = axios.create({
  baseURL : `https://api.themoviedb.org/3`
})

export default instance
// const API_KEY="47de2b9e8b2462b53975d18185ac40bf";

//   baseURL: "https://api.themoviedb.org/3",

//   let baseurl = "https://image.tmdb.org/t/p/original/"