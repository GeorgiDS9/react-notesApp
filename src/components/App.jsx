import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


// function App(){
//   return (
//   <div>
//     <Header />
//     {notes.map(noteItem => (
//       <Note
//         key = {noteItem.key}
//         title = {noteItem.title}
//         content = {noteItem.content}
//       />
//     ))}
//     <Footer />
//   </div>
//   );
// }

function App() {
  //  6c. Add new note to an array. The original value will be an empty array. It gets populated only when a user adds a note.
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    //  get ghold of the previous bvalue of the notes array
    setNotes(prevValue => {
      return [...prevValue, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;