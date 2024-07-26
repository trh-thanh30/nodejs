const fs = require("fs");
const sum = (a, b) => {
  if (a == b) {
    const warning = "Warning";
    return warning;
  }
  return a + b;
};
const addNote = (title, decreption) => {
  const notes = loadNotes();
  notes.push({
    title: title,
    decreption: decreption,
  });
  saveNote(notes);
};
const saveNote = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    console.log(err);
    return [];
  }
};
module.exports = { sum: sum, addNote: addNote };
