//  the note component will be inserted into the App comp.

import React from "react";

function Note(props) {
return (
  <div class="note">
  <h1>{props.title}</h1>
  <p>{props.content}</p>
  <button>x</button>
  </div>
)
}

export default Note;