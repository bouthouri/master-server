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
  Profil.addScore = function(profil, score, cb) {
    const Score = Profil.app.models.Score;
    Score.findOrCreate(
      { where: { profilId: profil.accessToken.userId } },
      { score: score, profilId: profil.accessToken.userId },
      function(err, instance) {
        if (err) return cb(err);
        instance.updateAttribute("score", score, function(err, instance) {
          if (err) return cb(err);
          // return the result after successfully adding the score
          Score.find(
            {
              limit: 10,
              order: "score desc",
              fields: {
                id: false
              },
              include: {
                relation: "profil",
                scope: {
                  fields: { email: false, id: false, username: true }
                }
              }
            },
            function(err, res) {
              if (err) return cb(err);
              cb(null, res);
            }
          );
        });
      }
    );
  };
};
