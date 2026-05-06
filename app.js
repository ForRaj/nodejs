// secret.js
const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE";
const DB_PASSWORD = "SuperSecret123!";
// eval.js
const userInput = "console.log('hacked')";
eval(userInput);
// command.js
const { exec } = require("child_process");

const userInput = "ls; rm -rf /";
exec(userInput);
// crypto.js
const crypto = require("crypto");

crypto.createHash("md5").update("password").digest("hex");
