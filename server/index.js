const express = require("express");
const {
  getActivities,
  getNewActivities,
  Addnew,
  updateActivity,
  deleteActivity
} = require("./controller");
const app = express();

app.use(express.json());
const PORT = 5050;

app.get("/api/defaultActivities", getActivities);
app.get("/api/userActivity", getNewActivities);
app.post("/api/userActivity", Addnew);
app.put("/api/userActivity", updateActivity);
app.delete("/api/userActivity/:id", deleteActivity);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
