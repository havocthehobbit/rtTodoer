import { useEffect, useState,Component } from "react"

export const TodoItem=(props)=>{

    useEffect=(()=>{


    })

    let checkBoxClicked=()=>{}
    let deleteClicked=()=>{}

    return (
        <div
            key={props.id}
            style={props.style}
        >
            <input id={props.id} type="checkbox"  checked={props.status}  
                style={{ height : 20 ,width : 20 , borderRadius : 5}}
                onChange={(e)=>{ 
                    var id=e.target.getAttribute("id")
                    tt.checkBoxClicked(id)                                
                }}
            />  
            <label style={style}>{props.name}</label>
            <button id={props.id} style={{background : "red" ,  borderRadius : 5, padding : 5, margin : 5,border : "thin orange solid"}}                            
                onClick={(e)=>{ 
                    var id=e.target.getAttribute("id")
                    deleteClicked(id)
                }}
                                    
            >delete</button>

        </div>
    )



}