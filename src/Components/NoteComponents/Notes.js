import { React, useState, useEffect } from "react";
import CreateNote from "./CreateNote";
import "../css/Note.css";
import Note from "./Note";
import { v4 as uuid } from "uuid";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  // add new note to the state array
  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ]);

    // clear the text area
    setInputText("");
  };

  // delete note function
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);

    // how this function works
    // The javascript filter iterates over the existing values in an array and returns the values that pass
  };
  return (
    <div className="notes">
      <Note />
      <Note />
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
}

export default Notes;
