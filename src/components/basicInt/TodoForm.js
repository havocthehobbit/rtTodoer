import { useEffect, useState,Component } from "react"

class TodoFormC extends Component {
    constructor(props) {
        super(props);
        this.state={  itemText : "" }
    }


    style={}

    addItem=function(){           
        this.props.addItemFn.fn(this.state.itemText)
        this.setState({ itemText : "" })        
    }       

    render(){
        let tt=this
        
        if (tt.props.style){
            tt.style=tt.props.style
        }   
        let def_style={padding  : 5, background : "white" , borderRadius : 10}
        let o_style=tt.style
        let style={ ...def_style,...o_style }

        return (
                <div
                    style={style}
                    
                >
                    
                        <label style={{color : 'grey'}}>new item text : </label>
                        <input 
                            value={tt.state.itemText}
                            onChange={(e)=>{
                                tt.setState({ itemText : e.target.value})
                            }}

                        />
                        {tt.props.children}
                        <br/>
                        <button
                            style={ {background : "green", color : "white" , borderRadius : 5, padding : 5, margin : 5,border : "thin lightgreen solid"} }
                            onClick={()=>{
                                tt.addItem()
                            }}
                        >
                                Add Item Submit
                        </button>    
                            
                </div>

        )
    }
}



export const  TodoForm=TodoFormC