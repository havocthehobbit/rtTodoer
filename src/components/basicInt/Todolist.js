import { useEffect, useState,Component } from "react"



class TodoListC extends Component {
    constructor(props) {
        super(props);

        var initState={ items : [] }
        if (props.initItems){
            initState.items=props.initItems
        }        

        this.state=initState        
    }

    componentDidMount(){
        var tt=this         
        tt.props.setAddItemFn({ fn : tt.addItem})
    }

    style={}

    delete=(id)=>{        
        var newRecs=this.state.items
        newRecs.splice(id,1)
        this.setState(newRecs)
    }

    clickCheckBox=(id)=>{        
        var newRecs={...this.state.items}
        newRecs[id].status=!newRecs[id].status
        this.setState(newRecs)
    }

    addItem=(text)=>{             
        if (text===undefined || text==="" ){ alert( "error : invalid text!!!") ; return }        
        var newRecs=this.state.items
        newRecs.push({ name : text, status : false })    
        this.setState({})    
    }

    render(){        
        let tt=this   

        if (tt.props.style){
            tt.style=tt.props.style
        }       
        let def_style={padding  : 5, background : "white" , borderRadius : 10 , margin : 4 }   
        let o_style=tt.style
        let style={ ...def_style,...o_style }

        var ItemsE=function(){
            var E=[]
            tt.state.items.forEach((r,i)=>{
                    var style={color : "black"}
                    if (r.status){
                        style.textDecorationLine="line-through"
                    }

                    E.push( <div
                                key={i}
                                id={i}                                
                            >
                    
                                <input id={i} type="checkbox"  checked={r.status}  
                                    style={{ height : 20 ,width : 20 , borderRadius : 5}}
                                    onChange={(e)=>{ 
                                        var id=e.target.getAttribute("id")
                                        tt.clickCheckBox(id)                                
                                    }}
                                />  
                                <label style={style}>{r.name}</label>
                                <button id={i} style={{background : "red" , color : "white", borderRadius : 5, padding : 5, margin : 5,border : "thin orange solid"}}                            
                                    onClick={(e)=>{ 
                                        var id=e.target.getAttribute("id")
                                        tt.delete(id)
                                    }}
                                    
                                >delete</button>

                        </div>)
                
                

                    
                
            })
            
            return E
        }()

        return (
                <div
                    style={style}    
                >
                    {ItemsE}                         
                </div>

        )
    }
}


export const  TodoList=TodoListC
