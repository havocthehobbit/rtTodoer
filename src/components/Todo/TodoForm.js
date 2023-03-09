import { Component } from "react"

export class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state={  itemText : "" }
    }


    style={}

    addItem=function(){           
        this.props.addItemFn(this.state.itemText)
        this.setState({ itemText : "" })        
    }       

    //tt.addItem()

    render(){
        let tt=this
        
        if (tt.props.style){
            tt.style=tt.props.style
        }   
        let def_style={padding  : 5,margin : 5, background : "white" , borderRadius : 10}
        let o_style=tt.style
        let style={ ...def_style,...o_style }

        return (
                <div
                    style={style}
                    
                >
                    
                        <h4 style={{color : 'grey',margin : 0,padding : 0}}>new item </h4>
                        
                        <label style={{color : 'grey'}}>title : </label>
                        <input 
                            style={{ width : 100, height : 20,borderRadius : 5}}
                            value={tt.state.itemText}
                            onChange={(e)=>{
                                tt.setState({ itemText : e.target.value})
                            }}

                            onKeyUp={
                                function(e){
                                    if(e.key==="Enter"){
                                        tt.addItem()
                                    }
                                }
                            }

                        />
                        {tt.props.children}
                        
                        <button
                            style={ {background : "green", color : "white" , borderRadius : 5, padding : 5, margin : 5,border : "thin green solid"} }
                            onClick={()=>{
                                tt.addItem()
                            }}
                        >
                                Add
                        </button>    
                        <button
                            style={ {background : "red", color : "white" , borderRadius : 5, padding : 5, margin : 5,border : "thin red solid"} }
                            onClick={()=>{
                                tt.setState({ itemText : ""})
                            }}
                        >
                                cancel
                        </button>  
                            
                </div>

        )
    }
}



