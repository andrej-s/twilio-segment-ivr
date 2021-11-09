const axios = require("axios");
exports.handler = function (context, event, callback) {
  if (!["reservation.accepted", "task.canceled"].includes(event.EventType)) {
    callback(null, {});
  }

  let callOutcome = {
    userId: JSON.parse(event.TaskAttributes).from,
    event: "call",
    properties: {
      connected: event.EventType == "reservation.accepted",
      wait_time: parseInt(event.TaskAge),
    },
  };
  console.log(callOutcome);

  const eventEndpoint = axios.create({
    baseURL: `https://api.segment.io/v1`,
    auth: {
      username: context.SEGMENT_TOKEN,
      password: "",
    },
  });

  eventEndpoint.post("/track", callOutcome).then((result) => {
    console.log(result);
    callback(null, {});
  });
};
