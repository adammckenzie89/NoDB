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
    energy: "low"
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
    activity: "Do push-ups",
    inOrOut: "inside",
    group: "no",
    energy: "high"
  }
];
const userInputs = [];

module.exports = {
  getActivities: (req, res) => {
    console.log("hey!");
    res.status(200).json(activities);
  },
  getNewActivities: (req, res) => {
    res.status(200).json(userInputs);
  },
  Addnew: (req, res) => {
    userInputs.push(req.body);
    res.status(200).json(userInputs);
  }
};
