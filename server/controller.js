const activities = [
  {
    id: 1,
    activity:
      "https://newswatchtv.com/wp-content/uploads/2017/08/iStock-483658714-1068x712.jpg",
    inOrOut: "inside",
    group: "no",
    energy: "low"
  },
  {
    id: 2,
    activity:
      "https://www.cases.org/wp-content/uploads/2018/07/bowling-700x525.jpg",
    inOrOut: "inside",
    group: "yes",
    energy: "high"
  },
  {
    id: 3,
    activity: "https://localscrabble.files.wordpress.com/2011/11/scrabble.jpg",
    inOrOut: "inside",
    group: "yes",
    energy: "low"
  },
  {
    id: 4,
    activity:
      "http://gobikingmad.com/wp-content/uploads/2016/07/Mountain-biking-550-by-404.jpg",
    inOrOut: "outside",
    group: "no",
    energy: "high"
  },
  {
    id: 5,
    activity:
      "https://outdoorgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/15/81/279616_31645_L2.jpg",
    inOrOut: "outside",
    group: "yes",
    energy: "high"
  },
  {
    id: 6,
    activity:
      "https://lunarsauce.weebly.com/uploads/1/5/2/0/15208344/686051490.jpg?377",
    inOrOut: "outside",
    group: "yes",
    energy: "low"
  },
  {
    id: 7,
    activity:
      "https://amp.businessinsider.com/images/57a0ec284321f1f5018bc9a2-1136-757.jpg",
    inOrOut: "inside",
    group: "yes",
    energy: "low"
  },
  {
    id: 8,
    activity: "http://shafston.edu/wp-content/uploads/2017/03/Twister.jpg",
    inOrOut: "inside",
    group: "yes",
    energy: "high"
  },
  {
    id: 9,
    activity:
      "http://media.beam.usnews.com/cb/64/27c7bc8c4ff28686bc798235a04c/150213-teenreader-stock.jpg",
    inOrOut: "outside",
    group: "no",
    energy: "low"
  },
  {
    id: 10,
    activity:
      "https://cdn-s3.si.com/s3fs-public/images/1988-Michael-Jordan-005806075.jpg",
    inOrOut: "outside",
    group: "yes",
    energy: "high"
  },
  {
    id: 11,
    activity:
      "https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F8a87a72ecfa2c828b3a3d201407c7005%2F206590084%2Fcode-ed.jpg&client=amp-blogside-v2&signature=9d9ba2e4fc57943bfd3dc725965eb0f90affea3b",
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
    let { updated, newValue } = req.body;
    const index = userInputs.findIndex(ele => {
      return ele.activities === updated;
    });
    userInputs[index].activities = newValue;
    res.status(200).json(userInputs);
  },
  deleteActivity: (req, res) => {
    let { id } = req.params;
    const index = userInputs.findIndex(ele => {
      ele.id === +id;
    });
    userInputs.splice(index, 1);
    res.status(200).json(userInputs);
  }
};
