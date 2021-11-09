const axios = require("axios");
exports.handler = function (context, event, callback) {
  const profile = axios.create({
    baseURL: `https://profiles.segment.com/v1/spaces/${context.SEGMENT_SPACE}/collections/users/profiles`,
    auth: {
      username: context.SEGMENT_PROFILE_TOKEN,
      password: "",
    },
  });

  profile
    .get(`/user_id:${event.phoneNumber}/traits`)
    .then((response) => {
      return callback(null, response.data.traits);
    })
    .catch((error) => {
      console.log(error);
      return callback(error);
    });
};
