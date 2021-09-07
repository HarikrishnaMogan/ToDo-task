import React from "react";
import "./index.css";
class Appfunc extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            check:false,
          }
    }
    render()
    {
      return (
    <>
    <li className="list">{this.props.data}----{this.props.date}
    <input type="checkbox" name="check" checked={this.state.check} onChange={(e)=>{this.setState({check:e.target.checked})}} />
    </li>
   
    </>
    );
    }
   
    
    
}
export default Appfunc;