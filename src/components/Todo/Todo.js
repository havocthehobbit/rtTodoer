import { Component } from "react"

import {TodoList} from "./Todolist";
import {TodoForm} from "./TodoForm";

/*
    style
        listHeight : height of list box        
        listBackground : change background color
        // todo : listColor : 
         labelWidth : 200,labelOverflow : "hidden",labelColor : "black",labelFontSize : 20
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
    labelStyle={}

    items=[]
    
    render(){
        let tt=this

        if (tt.props.style){
            tt.style=tt.props.style
        }   
        let def_style={padding  : 5,  borderRadius : 10,position : "relative", listBackground : "white"}
        let o_style=tt.style
        let style={ ...def_style,...o_style }

        let def_labelStyle={ position: "relative",width : style.width, 
                                height : style.listHeight,
                                background : style.listBackground,
                                color : style.listColor,overflow : "auto"
        }
        let o_labelStyle=tt.labelStyle
        let labelStyle={ ...def_labelStyle,...o_labelStyle }
        if (style.labelWidth){ labelStyle.labelWidth=style.labelWidth  }
        if (style.labelOverflow){ labelStyle.labelOverflow=style.labelOverflow  }
        if (style.labelBackground){ labelStyle.labelBackground=style.labelBackground  }
        if (style.labelColor){ labelStyle.labelColor=style.labelColor  }
        if (style.labelFontSize){ labelStyle.labelFontSize=style.labelFontSize  }
        if (style.labelFont){ labelStyle.labelFont=style.labelFont  }
        

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
                            style={labelStyle} 
                            setAddItemFn={ tt.setStateAddItemFn } 
                            items={ tt.items } 
                         />
                    </div>
            )
    }
}



