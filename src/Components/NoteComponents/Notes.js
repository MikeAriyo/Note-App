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
  return (
    <div className="notes">
      <Note />
      <Note />
      <CreateNote />
    </div>
  );
}

export default Notes;
