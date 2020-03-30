"use strict";

module.exports = function(Profil) {
  Profil.on("resetPasswordRequest", function(info, cb) {
    console.log(info);
    Profil.app.models.Mail.send(
      {
        to: info.user.email,
        from: process.env.EMAIL_USER,
        subject: "Password reset",
        html: `<div>reset token: ${info.accessToken.id}</div>`
      },
      function(err, mail) {
        console.log("email sent!");
        cb(err);
      }
    );
  });
};
