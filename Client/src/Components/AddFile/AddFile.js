import React from "react";
import {ReactComponent as IconDropdown}  from './dropdown.svg';
//Component dropdown:
class AddFile extends React.Component {
  Add_Asset(){
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
