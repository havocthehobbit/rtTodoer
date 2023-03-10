import { useEffect, useState,Component } from "react"

import {Todo} from "./Todo";

/*
    props
        style ( obj )
        setup ( obj )
            tabtype ( string ) : 
                "hor" : make tabsLists horrizontal
                "vert" : make tabsLists vertical
            showDataText ( bool )
        hasAdd ()
            shows add new list button, so that more todo lists can be added
        ...
    
    <children>
        <Todo>
*/
export class TodoMananger extends Component {
    constructor(props) {
        super(props);

        var tt=this
        var initState={ addItemFn : (txt)=>{} , newToDoListTitle : "" ,data : {} }
        if (props.items){
            
        }  
        
        tt.setupInitHasAdd()
        tt.setupInitProps()

        this.state=initState        
    }

    
    componentDidMount(){
        var tt=this    
        if (tt.props.setAddItemFn){
            tt.props.setAddItemFn({ fn : tt.addItem})
        }
        
        if (tt.props.children){
            tt.count=tt.props.children.length
        }

        tt.setupInitProps()

        if (tt.props.data){ 
            if (tt.props.data.current===undefined){ 
                
                tt.props.data=tt.data
                
            }else{
                tt.props.data.current=tt.data                
                //console.log("data log" , tt.data)
            }   
            
        }

        if (tt.props.title!==undefined){ 
            tt.data.title=tt.props.title
        }
    }
        

    componentDidUpdate = (prevProps)=>{
        var tt=this
        //console.log("updates props : " , this.props )
        //console.log("updates prev props : " , prevProps )
        
        tt.setupInitHasAdd()

        tt.setupInitProps()

        
    }
    componentWillUpdate=()=>{
        var tt=this
        tt.setupInitProps()
    }

    style={}
    count=0
    hasAdd=false
    todos_added=[]

    data={
        title : "new",
        count : 0,
        todos : [ ],
        type : "TodoMananger",
        saveType : "localStorage",
    }

    saveDataFn=()=>{
        let tt=this

        if (tt.saveType==="localStorage"){
            
        }

    }

    loadDataFn=()=>{
        let tt=this

        if (tt.saveType==="localStorage"){

        }
        
    }



    setup={
        tabtype : "vert"
    }

    setStateAddItemFn=(fn)=>{
        this.setState({addItemFn : fn })
    }

    setupInitProps=()=>{
        var tt=this
        if (tt.props.setup!==undefined){            
                tt.setup=tt.props.setup
            
        }
    }

    setupInitHasAdd=()=>{
        var tt=this
        if (tt.props.hasAdd!==undefined){
            if (tt.props.hasAdd===true){
                tt.hasAdd=true
            }else{
                tt.hasAdd=false
            }   
        }
    }


    saveFn=(...params)=>{
        if (params.length===1){



        }
    }

    
    render(){
        let tt=this

        if (tt.props.style){
            tt.style=tt.props.style
        }   
        let def_style={padding  : 5, background : "white" , borderRadius : 10}
        let o_style=tt.style
        let style={ ...def_style,...o_style }


         
        let all_children=(()=>{
            var arr=[]
            tt.data.todos=[]

            var contadd=(cmpt,key)=>{
                var nc
                
                if (cmpt.type!==undefined){
                    if (cmpt.type.name==="Todo"){
                        //console.log( "cmpt" , cmpt)

                        
                        
                        let nd={ type : "Todo", data : {} }
                        if (cmpt.props!==undefined){
                            nd.props={ ...cmpt.props}
                            if (nd.props.data!==undefined){
                                delete nd.props.data
                            }
                            

                            if (cmpt.props.title!==undefined){
                                nd.title=cmpt.props.title
                            }
                        }
                        
                        tt.data.todos.push(nd)

                    }
                }
                

                let style
                style={ position : "relative",display : "inline" , width : 400,overflow : "hidden",height : undefined,}

                if (tt.setup.tabtype==="hor"){
                    style.float="left"
                }


                nc=<div
                        key={key}
                        style={style}
                    >   
                  
                        {
                            cmpt
                        }
                        
                </div>


                return nc
            }

            var keyI=0
            tt.props.children.forEach((r,i)=>{
                
                arr.push(
                    contadd(r, keyI)
                )

                

                keyI++
            })

            tt.todos_added.forEach((r,i)=>{
                arr.push(contadd(r,keyI) )
                keyI++
            })

            tt.count=keyI 
            return <>{arr}</>
        })()

        let AddToDoList
        if (tt.hasAdd){
            AddToDoList=(()=>{

                return (
                    <div
                        style={{ position : "relative" ,display : "inline", height : undefined, width : undefined}}
                    >
                        <button
                            style={{ background : "lightgreen",color : "green",fontWeight : "bold",  fontSize : 20, border : "none" ,borderRadius : 5}}
                            onClick={(e)=>{
                                tt.todos_added.push(
                                    <Todo key={ tt.todos_added.length + 1} title={tt.state.newToDoListTitle} />
                                )
                                tt.setState({ newToDoListTitle : "" })
                            }}
                        >
                            +
                        </button>
                        <input value={tt.state.newToDoListTitle} 
                            onChange={(e)=>{
                                tt.setState({ newToDoListTitle : e.target.value })
                            }}
                        />
                        <p style={{ display : "inline"}} >tab count {tt.count}</p>
                        <br/><br/>
                    </div>
                )
            })()
        }

        let dataText
        if (tt.setup.showDataText!==undefined){
            if (tt.setup.showDataText===true){
                dataText=(()=>{

                    return (
                        <div>
                            <textarea 
                                style={{ width : 600 , height : 400}}
                                value={JSON.stringify(tt.data,null,2)}
                                onChange={(e)=>{}}
                            />
                        </div>
                    )
                })()
            }
        }

        return (
                    <div
                        style={style}
                    >     
                        {AddToDoList}                                           
                        {all_children}    
                        {dataText}                    
                    </div>
            )
    }
}

