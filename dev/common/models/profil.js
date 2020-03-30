"use strict";

module.exports = function(Profil) {
  // a methode for email reset
  Profil.on("resetPasswordRequest", function(info, cb) {
    console.log(info);
    Profil.app.models.Mail.send(
      {
        to: info.user.email,
        from: "bouthouri.com@gmail.com",
        subject: "Password reset",
        html: `<div>reset token: ${info.accessToken.id}</div>`
      },
      function(err, mail) {
        console.log("email sent!");
        cb(err);
      }
    );
  });

  // methode to register users's scores
  Profil.addScore = function(name, score, cb) {
    Profil.create({ name: name, score: score }, function(err, res) {
      if (err) return cb(err);
      Profil.find(
        {
          limit: 10,
          order: "score desc",
          fields: {
            id: false
          }
        },
        function(err, res) {
          if (err) return cb(err);
          cb(null, res);
        }
      );
    });
  };
  // methode to register guests scores
  Profil.addScoreGuest = function(name, score, cb) {
    Profil.create({ name: name, score: score }, function(err, res) {
      if (err) return cb(err);
      Profil.find(
        {
          limit: 10,
          order: "score desc",
          fields: {
            id: false
          }
        },
        function(err, res) {
          if (err) return cb(err);
          cb(null, res);
        }
      );
    });
  };
};
