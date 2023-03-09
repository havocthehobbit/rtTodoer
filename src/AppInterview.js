import { useEffect, useState} from "react"
import logo from "./logo.svg";
import "./App.css";
import {TodoList} from "./components/basicInt/Todolist.js";
import {TodoForm} from "./components/basicInt/TodoForm.js";

// 1. Create a new React component called "TodoList" that renders a list of to-do items.
//    Each to-do item should consist of a checkbox, a label displaying the text of the to-do, and a delete button.

// 2. Create a new React component called "TodoForm" that renders a form for adding new to-do items.
//    The form should consist of a text input for entering the text of the new to-do item and a button
//    for adding the item to the list.

// 3. In The "App" component render the TodoList and TodoForm components.

// 4. Add functionality to the TodoList component that allows the user to toggle the completion status of a to-do item
//    by clicking on its checkbox. Completed to-do items should be displayed with a strikethrough.

// 5. Add functionality to the TodoList component that allows the user to delete a to-do item by clicking on its delete button.

// 6. Add functionality to the TodoForm component that allows the user to add a new to-do item to the list when the form is submitted.

// 7. Add some basic styling to the app to make it visually appealing.

// You may also want to consider additional features such as filtering the to-do list by
// completion status or due date, editing existing to-do items, or persisting the to-do list
// data using local storage. However, these are not required for the basic test.

// Good luck with the test!

function App() {  
  var [addItemFn,setAddItemFn]=useState( { fn : ()=>{}})
  
  useEffect(()=>{
    console.log("add fn update", addItemFn) // I want to use this to inilise a function that I want encapsulated in the todolist,so data and add data functionality are with eachother and form is just a design lasyer to add, so that items can be added by other components in future to the todolist without the add form, maybe through fetching in the background or a quick add side bar or something like that , having this scoped variable means i can also extend it and add shared state functions in the object later , isntead of me having to setup Redux or contextSharing which is a bloated and and can be difficult to track and debug
  },[addItemFn])

  return (
    <div className="App">
      <header className="App-header">      
        <h2>ToDo</h2>
        <TodoForm style={{ position: "relative",width : 500}} addItemFn={addItemFn} />     
        <TodoList style={{ position: "relative",width : 500}} setAddItemFn={setAddItemFn} initItems={ [{ name : "item1", status : false},{ name : "item2", status : true},{ name : "item3", status : false}] } />
      </header>
    </div>
  );
}

export default App;
