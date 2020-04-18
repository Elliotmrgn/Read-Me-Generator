const axios = require("../node_modules/axios")

const api = {

  getUser(username) {
    axios.get(`https://api.github.com/users/${username}`)
      .then((res) => {
        // console.log("***************", res)
        return res.data.avatar_url
      })
      return 
  }
};

module.exports = api;
