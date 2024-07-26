const chalk = require("chalk");
const yargs = require("yargs");
// Customize yargs version
yargs.version("1.1.0");
// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    decreption: {
      describe: "Note description",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log("Title: " + argv.title);
    console.log("Decreption: " + argv.decreption);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Removing the note");
  },
});
// Created read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: () => {
    console.log("Reading the note");
  },
});
// Created list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => {
    console.log("Listing all notes");
  },
});
// add, remove, read, list
yargs.parse();
