const fileSystem = require("fs");

// fileSystem.writeFileSync("notes.txt", "My name is Huu Thanh");
fileSystem.appendFileSync("notes.txt ", "My name is Tran Huu Thanh", (err) => {
  if (err) throw err;
});
