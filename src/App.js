import { useEffect, useState} from "react"
import logo from "./logo.svg";
import "./App.css";
import {TodoMananger} from "./components/Todo/todoMananger";
import {Todo} from "./components/Todo/Todo";

function App() {  
  var [gState,setGState]=useState( { fn1 : ()=>{} , state : {}})
  
  useEffect(()=>{

  },[gState])

  useEffect(()=>{
    
  })

  let styleTodolists={position : "relative",width : 300,listHeight : 300 ,
                        listBackground : "lightblue"
                      }

  return (
    <div className="App">
      <header className="App-header">   
        <div
            style={{ position : "relative",  padding  : 15 , margin : 15, left : 20,                    
                    height : 600,
                    overflowY: "auto"
            }}
        >
          <h2
            style={{ padding : 2, margin : 2}}
          >ToDo</h2>          
          <TodoMananger style={ { position : "relative" , width : undefined, background : "",}} 
                        hasAdd={false} setup={{ tabtype : "hor" }} 
          >
            <Todo style={styleTodolists} title={"shopping list"} items={[{name : "milk", status : false } , {name : "bread", status : false }  ,{name : "eggss", status : false } ]}  />  
            <Todo style={styleTodolists} title={"today"} />            
            <Todo style={styleTodolists} title={"weekly"}/> 
            <Todo style={styleTodolists} title={"monthly"}/> 
          </TodoMananger>               
        </div>
      </header>
    </div>
  );
}

export default App;
