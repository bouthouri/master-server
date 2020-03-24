module.exports = {
  apps: [
    {
      name: "API",
      script: ".",

      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      instances: 1,
      autorestart: true,
      watch: true,
      ignore_watch: ["node_modules"]
    }
  ]
};
