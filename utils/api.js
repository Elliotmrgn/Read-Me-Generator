const axios = require("../node_modules/axios")

const api = {

  getUser(username) {
    return axios.get(`https://api.github.com/users/${username}`).then((res) => {
      if (res.data.avatar_url === undefined) { return '' }
      return res.data.avatar_url
    })
      .catch((err) => { console.error(err) })
  }
};

module.exports = api;
