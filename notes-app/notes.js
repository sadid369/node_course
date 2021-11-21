const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your Notes....";
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  //const dulplicateNotes = notes.filter((note) => note.title === title);
  const dulplicateNotes = notes.find((note) => note.title === title);

  // if (dulplicateNotes.length === 0) {
  //   console.log(notes);
  //   notes.push({
  //     title: title,
  //     body: body,
  //   });
  //   saveNotes(notes);
  //   console.log(chalk.green('"New Notes Added"'));
  debugger;
  if (!dulplicateNotes) {
    console.log(notes);
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green('"New Notes Added"'));
  } else {
    console.log(chalk.red("Note title Taken"));
  }
};
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesTokeep = notes.filter((note) => note.title !== title);
  if (notes.length > notesTokeep.length) {
    saveNotes(notesTokeep);
    console.log(chalk.green.inverse("note remove"));
  } else {
    console.log(chalk.red.inverse('"note not remove"'));
  }
  // console.log("removeNote" + title);
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.inverse("Your Notes"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
  // note.forEach((note) => {
  //   console.log(note.title);
  //   console.log(note.body);
  // });
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
