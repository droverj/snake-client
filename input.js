// input.js
const { commandKeys } = require('./constants');

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (commandKeys[key]) {
    connection.write(commandKeys[key]);
  }
};

module.exports = {
  setupInput,
};