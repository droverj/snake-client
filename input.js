// input.js

// stores the active TCP connection object
let connection;


// setup interface to handle user input from stdin
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
  };
  // connection("w" === "Move: up");
  
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "f") {
    connection.write("Say: GOAT");
  }
  if (key === "r") {
    connection.write("Say: #1");
  }
  if (key === "e") {
    connection.write("Say: wrecked myself");
  }
};

module.exports = {
  setupInput,
};