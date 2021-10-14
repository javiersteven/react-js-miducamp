import React, { useState, useEffect } from "react";
import axios from "axios";

const Note = ({ note }) => {
  return (
    <li>
      <h2>{note.title}</h2>
      <b>{note.id}</b>
      <p>{note.body}</p>
      {/* 
      <p>
        <b>important: {note.important ? "Importante" : "No es importante"}</b>
      </p>
      <i>{note.date}</i> 
      */}
    </li>
  );
};

const Form = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("Añade una nueva nota");
  const [showAll, setShowAll] = useState(true);
  /*
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setNotes(json));
  });
  
  const hook = () => {
    console.log("[+] inicializando...")
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
    setNotes(response.data)
    })
  }
  */

  const hook = () => {
    const eventHandler = (response) => {
      setNotes(response.data);
    };
    const promise = axios.get("https://jsonplaceholder.typicode.com/posts");
    promise.then(eventHandler);
  };

  useEffect(hook, []); // efectos se ejecutan despues del renderizado
  console.log("[+] finish...");

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que el evento refresque la pag
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5
    };
    // setNotes(notes.concat(noteToAddToState))
    setNotes([...notes, noteToAddToState]);
    setNewNote("");
  };

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "important" : "all"}
      </button>
      <ol>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Form;
