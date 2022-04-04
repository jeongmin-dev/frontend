import axios from "axios";
import { instance } from "./instance";
import { getToken } from "../../shared/utils";

export default class mainApi {
  constructor() {
    this.base = process.env.REACT_APP_SERVER;
  }

  async getMain() {
    const getMainConfig = {
      method: "GET",
      url: `${this.base}/api/mainpage`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    return axios(getMainConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async getMainWith() {
    await instance
      .get(`${this.base}/api/mainpage`, {
        headers: { "content-type": "application/json" },
      })
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async getMainByHashtag(chosenHashtag) {
    const getMainWithConfig = {
      method: "GET",
      url: `${this.base}/api/mainpage/hashtags?hashtag=${chosenHashtag}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    return axios(getMainWithConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
