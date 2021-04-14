import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
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
      [...prevValue, newNote]
    })
  }

  return (
    <div>
      <Header />
      <CreateArea  onAdd={addNote}/>
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;