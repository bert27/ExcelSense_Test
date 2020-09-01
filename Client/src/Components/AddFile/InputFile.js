import React from "react";
import './InputFile.sass';
//Component Input
class InputFile extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    NewRow: "",
  };
}
  GetInputValue(){
    var id="NewFile"+this.props.ID;
    var value=document.getElementById(id).value;
    this.props.AddRow(value);
  }

  render() {
var id="NewFile"+this.props.ID;
var Default_Value=(
<div className="Inputadd">
    <div className="InputaddC2">
       <input className="InputaddC"
        type="text"
        id={id}
        name="NewFil"
        className="InputaddC">
        </input>
    </div>
    <div className="InputButton">
         <button className="buttonAdd"
         onClick={()=>{this.GetInputValue()}}>
         Add</button>
    </div>
</div>)
;
  return (<>{Default_Value}</>);
}
}
export default InputFile;
