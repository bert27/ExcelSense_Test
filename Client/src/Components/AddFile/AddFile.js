import React from "react";
import {ReactComponent as IconDropdown}  from './dropdown.svg';
class AddFile extends React.Component {

  Add_Asset(){
    console.log("Add new file");
    this.props.ShowInputAdd(this.props.ID);
  }
  render() {

  return (
   <>
   <IconDropdown
   className="svg_ico_Dropdown"
   onClick={this.Add_Asset.bind(this)}/>
   </>
);
}
}
export default AddFile;
