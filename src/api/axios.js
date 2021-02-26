import axios from "axios";
import de from "../lang/de";

//creates a connection
const instance = axios.create({
  baseURL: "https://us-central1-clone-3cbb2.cloudfunctions.net/api",
  //"http://localhost:5001/clone-3cbb2/us-central1/api",
});

export default instance;
