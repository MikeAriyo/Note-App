import { React, useState, useEffect } from "react";
import CreateNote from "./CreateNote";
import "../css/Note.css";
import Note from "./Note";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [inoutText, setInputText] = useState("");
  return (
    <div className="notes">
      <Note />
      <Note />
      <CreateNote />
    </div>
  );
}

export default Notes;
