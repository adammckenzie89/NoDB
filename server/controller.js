const activities = [
  {
    id: 1,
    activity: "movie",
    inOrOut: "inside",
    group: "no",
    energy: "low"
  },
  {
    id: 2,
    activity: "bowling",
    inOrOut: "inside",
    group: "yes",
    energy: "high"
  },
  {
    id: 3,
    activity: "scrabble",
    inOrOut: "inside",
    group: "yes",
    energy: "low"
  },
  {
    id: 4,
    activity: "biking",
    inOrOut: "outside",
    group: "no",
    energy: "high"
  },
  {
    id: 5,
    activity: "rock climbing",
    inOrOut: "outside",
    group: "yes",
    energy: "high"
  },
  {
    id: 6,
    activity: "throw a frisbee",
    inOrOut: "outside",
    group: "yes",
    energy: "low"
  },
  {
    id: 7,
    activity: "ping-pong",
    inOrOut: "inside",
    group: "yes",
    energy: "low"
  },
  {
    id: 8,
    activity: "Play Twister",
    inOrOut: "inside",
    group: "yes",
    energy: "high"
  },
  {
    id: 9,
    activity: "Read in the park",
    inOrOut: "outside",
    group: "no",
    energy: "low"
  },
  {
    id: 10,
    activity: "Basketball",
    inOrOut: "outside",
    group: "yes",
    energy: "high"
  },
  {
    id: 11,
    activity: "jumping-jacks",
    inOrOut: "inside",
    group: "no",
    energy: "high"
  }
];
const userInputs = [];

module.exports = {
  getActivities: (req, res) => {
    res.status(200).json(activities);
  },
  getNewActivities: (req, res) => {
    res.status(200).json(userInputs);
  },
  Addnew: (req, res) => {
    req.body.id = activities.length + userInputs.length + 1;
    userInputs.push(req.body);
    res.status(200).json(userInputs);
  },
  updateActivity: (req, res) => {
    const index = userInputs.findIndex(ele => {
      return ele.activities === req.body.updated;
    });
    userInputs[index].activities = req.body.newValue;
    res.status(200).json(userInputs);
  },
  deleteActivity: (req, res) => {
    const index = userInputs.findIndex(ele => {
      ele.id === +req.params.id;
    });
    userInputs.splice(index, 1);
    res.status(200).json(userInputs);
  }
};
