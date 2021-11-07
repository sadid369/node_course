const fs = require("fs");
const getNotes = function () {
  return "Your Notes....";
};

const addNotes = function (title, body) {
  const notes = loadNotes();
  const dulplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (dulplicateNotes.length === 0) {
    console.log(notes);
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New Notes Added");
  } else {
    console.log("Note title Taken");
  }
};
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
};
