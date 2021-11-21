const yargs = require("yargs");
const notes = require("./notes.js");
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
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
  // //console.log("Adding a new note!", argv);
  // console.log("Title: " + argv.title);
  // console.log("Body: " + argv.body);
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Remove Note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
  //console.log("Removing the note");
});
yargs.command({
  command: "list",
  describe: "List your note",

  handler() {
    notes.listNotes();
    // console.log("Listing out all note");
  },
});

yargs.command({
  command: "read",
  describe: "read data",
  builder: {
    title: {
      describe: "Read Notes",
      demandOption: true,
      type: "String",
    },
  },
  handler(argv) {
    // console.log("reading  note");
    notes.readNotes(argv.title);
  },
});
//console.log(yargs.argv);
yargs.parse();
