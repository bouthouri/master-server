"use strict";

module.exports = function (Score) {
  // methode to register guests scores
  Score.addScoreGuest = function (name, score, cb) {
    if (process.env.GUEST_MODE == true) {
      if (name) {
        Score.create({ name: name, score: score }, function (err, res) {
          if (err) return cb(err);
          Score.find(
            {
              limit: 10,
              order: "score desc",
              fields: {
                id: false,
              },
            },
            function (err, res) {
              if (err) return cb(err);
              cb(null, res);
            }
          );
        });
      } else {
        cb("enter the guest name");
      }
    } else {
      cb("guest mode is disabled");
    }
  };
};
