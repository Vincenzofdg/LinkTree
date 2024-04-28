require("dotenv").config();
const api = require("./api");

const PORT = process.env.API_PORT || 3001;

api.get("/", (_request, response) =>
  response.send("LinkTree featured by Vincenzo F. Di Giacomo")
);

api.listen(PORT, () => console.log("API running on " + PORT));
