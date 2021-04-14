//1. Create a new React app
import React from 'react';
import ReactDOM from 'react-dom';

//2. Create a App.jsx component
import App from "./components/App";

//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>

//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

ReactDOM.render(<App />, document.getElementById("root"));

//  EXTRA FUNCTIONALITY


//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//7. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.
