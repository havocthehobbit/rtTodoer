import { useEffect, useState, useRef} from "react"
import "./App.css";

import {TodoMananger} from "./components/Todo/todoMananger";
import {Todo} from "./components/Todo/Todo";

function App() {  
  var [gState,setGState]=useState( { fn1 : ()=>{} , state : { "a" : "1"}})
  const [loadData,setLoadData] = useState({ data : {}, isloading : false , setLoadData : ()=>{} });
  const data = useRef({});
  const dataPrev = useRef("");
  const isLoading = useRef(true);
  
  
  useEffect(()=>{

  },[gState])

  useEffect(()=>{
    isLoading.current=true

    let loaddataSTR=localStorage.getItem( "TodoMananger" )
    let loaddata={}
    let loaddataSuccess=false
    if (typeof loaddataSTR==="string"){
      loaddataSuccess=true
      loaddata=JSON.parse(loaddataSTR)
    }

    if (loaddataSuccess){
      dataPrev.current=loaddataSTR
      data.current=loaddataSTR


      isLoading.current=false
    }else{
      isLoading.current=false
    }

    //isLoading.current=false

    setTimeout(()=>{ 
      //console.log( "d1 : ", data.current) 
    } 
    , 3000)
    setInterval( ()=>{ 

      //console.log( "3 ses")
      //console.log( "d1 : ", data.current)
      //data.current={ "test" : "test"} 
      //console.log( "d2 : ", data)
      if (isLoading.current===false){ // save if it is not loading on mount
        let dtCP={...data.current}
        let strData=JSON.stringify(dtCP,null,2)     
        
        if (dataPrev.current!==strData){        
          localStorage.setItem( "TodoMananger" , strData ) // localStorage.removeItem( ; // localStorage.getItem(
          dataPrev.current=strData
        }
      }
    }, 5000)
  },[])

  let styleTodolists={position : "relative",width : 300,listHeight : 300 ,
                        listBackground : "lightblue",fontSize : 18,
                        labelWidth : 200,labelOverflow : "hidden",labelColor : "black",labelFontSize : 20
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
          <TodoMananger title={"Main01"} style={ { position : "relative" , width : undefined, background : "",}} 
                        hasAdd={false} setup={{ tabtype : "hor", showDataText : false }}
                        data={data}                         
          >
            <Todo style={styleTodolists} title={"shopping list"} 
                  items={[{name : "milk", status : false } , {name : "bread", status : false }  ,{name : "eggss", status : false } ]}  
                  data={data}
              />  
            <Todo style={styleTodolists} title={"today"} 
                  data={data}
            />            
            <Todo style={styleTodolists} title={"weekly"}
                  data={data}
            /> 
            <Todo style={styleTodolists} title={"monthly"}
                  data={data}
            /> 
          </TodoMananger>               
        </div>
      </header>
    </div>
  );
}

export default App;
