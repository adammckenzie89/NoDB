const express = require("express");
const controller = require("./controller");
const app = express();

app.use(express.json());
const PORT = 5050;

app.get("/api/activities", controller.getActivities);
app.get("/api/newActivity", controller.getNewActivities);
app.post("/api/userInputs", controller.Addnew);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

console.log("hello");
