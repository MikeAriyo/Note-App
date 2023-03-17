import { React, useState, useEffect } from "react";
import CreateNote from "./CreateNote";
import "../css/Note.css";
import Note from "./Note";
import { v4 as uuid } from "uuid";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));

    // using JSON stringify to convert to a string so that it can be sorted
  }, [notes]);

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
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          deleteNote={deleteNote}
        />
      ))}
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
}

export default Notes;
