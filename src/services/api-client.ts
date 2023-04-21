import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "53d2e539dc744d7494ce234e5295d98d",
  },
});
