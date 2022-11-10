import axios from "axios";

const istance = axios.create({
  baseURL: "https://www.googleapis.com/",
  headers: {
    "API-KEY": "927b759c-26f4-4bf0-a411-cffbde530e8b",
  },
});