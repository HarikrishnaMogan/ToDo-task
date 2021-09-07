import React from "react";
import Appfunc from "./Appfun";
import "./index.css";

const specials = /[^A-Za-z 0-9]/g;
class App extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            todo:"",
            error:{
                todo:"",
            },
            list:[],
            
        };

    }
    
    handleChange=({target:{value}})=>{
         
           const error = this.state.error;
           if(value.length<15 || value.length>50 ||specials.test(value))
           {
                 error.todo=`Must be min of 15 and less than 50 characters Required,
                 should not contain special characters`;
           }
           else{
               error.todo="";
           }
           this.setState({todo:value});
    }

     handleSubmit=(event)=>{

        event.preventDefault();
         if(this.state.error.todo==="")
         {
             let date= new Date().toDateString();
             let description= this.state.todo;
             this.state.list.push({description,date});
             this.setState({list:this.state.list,todo:""});
             console.log(this.state.list);
         }
     }
     
    render()
    {
        return(
            <>
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="text">
                    <label>ToDO:</label>
                    <textarea name="todo" value={this.state.todo} onChange={this.handleChange}></textarea>
                    <p>{this.state.error.todo}</p>
                </div>
                <div className="btn">
                    <button type="submit">Submit</button>
                </div><br />
            </form>
            <div className="todo">
              <h1>To Do List</h1>
              {this.state.list.map((element,i)=>{
                return <Appfunc key={i}
                 data={element.description}
                 date={element.date}
                 />
              })
              
              }
            </div>
            </>
        );
    }
}

export default App;