import { Component } from "react"


/*
    props
        items (obj)
            def : [ { "name" : "new item desc/title" , "status" : false }, { "name" : "item2" , "status" : false } ]
*/
export class TodoList extends Component {
    constructor(props) {
        super(props);

        var initState={ items : [] }
        if (props.items){
            initState.items=props.items
        }        

        this.state=initState        
    }

    componentDidMount(){
        var tt=this         
        tt.props.setAddItemFn(tt.addItem)
        if (tt.props.items){
            tt.setState( { items : tt.props.items })
        }        
    }

    componentDidUpdate = (prevProps)=>{
        var tt=this         
        if (tt.props.items){            
            if (tt.props.items!==prevProps.items){
                tt.setState( { items : tt.props.items })
            }
        }        
    }

    style={}
    labelStyle={}

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
        let def_style={position : "relative", padding  : 5, background : "white" , borderRadius : 10 , margin : 4,width :400,overflow : "hidden" }   
        let o_style=tt.style
        let style={ ...def_style,...o_style }

        let def_labelStyle={position : "relative",padding  : 5, background : "" , borderRadius : 10 , margin : 4,width :300,overflow : "hidden",fontSize : 18 ,float : "left"}   
        let o_labelStyle=tt.labelStyle
        let labelStyle={ ...def_labelStyle,...o_labelStyle }
        if (style.labelWidth){ labelStyle.width=style.labelWidth  }
        if (style.labelOverflow){ labelStyle.overflow=style.labelOverflow  }
        if (style.labelBackground){ labelStyle.background=style.labelBackground  }
        if (style.labelColor){ labelStyle.color=style.labelColor  }
        if (style.labelFontSize){ labelStyle.fontSize=style.labelFontSize  }
        if (style.labelFont){ labelStyle.font=style.labelFont  }
        
        let styleOuter={ overflow : "hidden"}        
        let styleInner={...style}
        let temp=""
        temp="border"
        if (style[temp]){ styleOuter[temp]=style[temp]  ; delete styleInner[temp] }
        temp="borderRadius"
        if (style[temp]){ styleOuter[temp]=style[temp]  ; delete styleInner[temp] }
        temp="background"
        if (style[temp]){ styleOuter[temp]=style[temp]  ; delete styleInner[temp] }
        temp="backgroundColor"
        if (style[temp]){ styleOuter[temp]=style[temp]  ; delete styleInner[temp] }
        temp="margin"
        if (style[temp]){ styleOuter[temp]=style[temp]  ; delete styleInner[temp] }
        temp="padding"
        if (style[temp]){ styleOuter[temp]=style[temp]  ; delete styleInner[temp] }
        temp="width"
        if (style[temp]){ styleOuter[temp]=style[temp]  ; delete styleInner[temp] ;  styleInner[temp]=style[temp] + 21 }
        temp="height"
        if (style[temp]){ styleOuter[temp]=style[temp]  ; delete styleInner[temp] ;  styleInner[temp]=style[temp] + 22 }
        


        var ItemsE=function(){
            var E=[]
            tt.state.items.forEach((r,i)=>{
                    var style={color : "black"}
                    var labelStleExtra={}
                    if (r.status){
                        style.textDecorationLine="line-through"
                        labelStleExtra.textDecorationLine="line-through"
                    }
                    if (labelStyle.fontSize){
                        labelStleExtra.fontSize=labelStleExtra.fontSize
                    }

                    E.push(                     
                        <div
                            key={i}
                            id={i}                                
                        >
                            <div
                                style={{ position : "relative", float : "left",width : 30,top : 8 }}
                            >
                                <input id={i} type="checkbox"  checked={r.status}  
                                    style={{ height : 20 ,width : 20 , borderRadius : 5}}
                                    onChange={(e)=>{ 
                                        var id=e.target.getAttribute("id")
                                        tt.clickCheckBox(id)                                
                                    }}
                                />  
                            </div>
                            <div
                                style={labelStyle}
                            >
                                <label style={labelStleExtra}>{r.name}</label>
                            </div>
                            <div
                                style={{ position : "relative", float : "left",width : 30}}
                            >
                                <button id={i} style={{background : "red" , color : "white", borderRadius : 5, padding : 5, margin : 5,border : "thin red solid"}}                            
                                    onClick={(e)=>{ 
                                        var id=e.target.getAttribute("id")
                                        tt.delete(id)
                                    }}
                                    
                                >delete</button>
                            </div>
                            <div style={{clear :"left"}} />
                        </div>
                    )
                
                

                    
                
            })
            
            return E
        }()

        return (
                <div
                    style={styleOuter}    
                >
                    <div
                        style={styleInner}    
                    >
                        {ItemsE}                         
                    </div>
                </div>

        )
    }
}



