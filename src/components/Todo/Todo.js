import { Component } from "react"

import {TodoList} from "./Todolist";
import {TodoForm} from "./TodoForm";

/*
    style
        listHeight : height of list box        
        listBackground : change background color
        // todo : listColor : 
*/
export class Todo extends Component {
    constructor(props) {
        super(props);

        var initState={ addItemFn : (txt)=>{} }
        if (props.items){
            this.items=props.items
        }        

        this.state=initState        
    }

    setStateAddItemFn=(fn)=>{
        this.setState({addItemFn : fn })

        //console.log("Todos : " , this.props.children)
    }

    componentDidMount(){
        var tt=this    
        if (tt.props.setAddItemFn){
            tt.props.setAddItemFn({ fn : tt.addItem})
        }

        if (tt.props.items){
            tt.items=tt.props.items
        }   

    }

    style={}

    items=[]
    
    render(){
        let tt=this

        if (tt.props.style){
            tt.style=tt.props.style
        }   
        let def_style={padding  : 5,  borderRadius : 10,position : "relative", listBackground : "white"}
        let o_style=tt.style
        let style={ ...def_style,...o_style }

        var title
        if (tt.props.title){
            title=(()=>{
                    return <h5 style={{ padding : 0, margin : 0}} >{tt.props.title}</h5>
            })()
        }

        return (
                    <div
                        style={style}
                    >
                        {title}
                         <TodoForm 
                            style={{ position: "relative",width : style.width}} 
                            addItemFn={tt.state.addItemFn} 
                        />     
                        <TodoList 
                            style={{ position: "relative",width : style.width, 
                                        height : style.listHeight,
                                        background : style.listBackground,
                                        color : style.listColor,overflow : "auto"
                        
                            }} 
                            setAddItemFn={ tt.setStateAddItemFn } 
                            items={ tt.items } 
                         />
                    </div>
            )
    }
}



