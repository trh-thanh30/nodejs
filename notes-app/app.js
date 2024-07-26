const chalk = require("chalk");
const yargs = require("yargs");
const { addBlog, removeBlog, ListBlog, readBlog } = require("./blog.js");
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
    addBlog(argv.title, argv.decreption);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    removeBlog(argv.title);
  },
});
// Created read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    readBlog(argv.title);
  },
});
// Created list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => {
    ListBlog();
  },
});
// add, remove, read, list
yargs.parse();
