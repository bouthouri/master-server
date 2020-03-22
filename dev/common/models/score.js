'use strict';

module.exports = function (Score) {

    Score.register = function (name, score, cb) {
        Score.create({ name: name, score: score }, function (err, res) {
            if (err) return cb(err)
            Score.find({
                "limit": 10,
                "order": "score desc",
                "fields": {
                    "id": false
                }
            }, function (err, res) {
                if (err) return cb(err)
                cb(null, res);
            })
        });
    }
};
