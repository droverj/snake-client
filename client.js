// client.js
const net = require("net");
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    "Successfully connected to the game server."
  });

  conn.on("connect", () => {
    conn.write("Name: JLD");
  });

  conn.on("data", () => {
    console.log("you ded cuz you died");
  });

  return conn;
};

module.exports = { connect };