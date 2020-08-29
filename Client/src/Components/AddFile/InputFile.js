import React from "react";
import './InputFile.sass';
class InputFile extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    NewRow: "",
  };
}
  GetInputValue(){
    var id="NewFile"+this.props.ID
    var value=document.getElementById(id).value;
    console.log("Add new value: " + value);
    this.props.AddRow(value);
  }

  render() {
var id="NewFile"+this.props.ID
var Defecto=<div className="Inputadd">
<div className="InputaddC2">

      <input className="InputaddC"
      type="text"
      id={id}
      name="NewFil"
      className="InputaddC"></input>

      </div>
       <div className="InputButton">
     <button className="buttonAdd"
     onClick={()=>{this.GetInputValue()}}>
     Add</button>
</div>
  </div>;
  return (
   <>
{Defecto}

   </>
);
}
}
export default InputFile;
