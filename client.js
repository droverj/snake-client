// client.js
const net = require("net");
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected.");
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