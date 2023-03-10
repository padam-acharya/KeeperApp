import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);
  function add(note) {
    if (note.title !== "" || note.content !== "") {
      setNotes((prevNote) => [...prevNote, note]);
    }
  }
  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((item, index) => {
        return id !== index;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea add={add} />
      {notes.map((notesItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={notesItem.title}
            content={notesItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
