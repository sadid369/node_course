const validator = require("validator");

const yargs = require("yargs");
const getNotes = require("./notes.js");
// const chalk = require("chalk");
// const msg = getNotes();

// console.log(msg);
// const greenMsg = chalk.green("error");
// console.log(chalk.red.inverse.bold(greenMsg));
// console.log(process.argv[2]);
// console.log(process.argv);
yargs.version("1.1.0");
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note!");
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});
yargs.command({
  command: "list",
  describe: "List your note",
  handler: function () {
    console.log("Listing out all note");
  },
});

yargs.command({
  command: "read",
  describe: "read data",
  handler: function () {
    console.log("reading  note");
  },
});
console.log(yargs.argv);
