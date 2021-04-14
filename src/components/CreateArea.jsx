import React from "react";

// 6. Implement the add note functionality
// 6a. Create a constant that keeps track of the title and content
function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
    const {name, value} = e.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  // 6b. Pass the new note back to the App
  function submitNote() {
    props.onAdd(note);
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea 
          name="content" 
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..." 
          rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
