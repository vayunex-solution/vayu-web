module.exports = {
  apps: [{
    name: "vayunex-api",
    script: "./src/server.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 5000,
    }
  }]
}
