import React from "react";
import { Link } from 'react-router-dom';
import {ReactComponent as IconMap}  from './map.svg';
import AddFile from '../AddFile/AddFile';
import InputFile from '../AddFile/InputFile';
class Card extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    InputState:"",
    NewRows:"",
  };
}
AddRow(value){
  if(this.state.NewRows==""){
    var newrow=[];
    newrow.push(value);
    console.log(typeof newrow);
    this.setState({
      NewRows: newrow,
      InputState:"",
    });
  }else{
    var newrow=this.state.NewRows;
    console.log(newrow);
    console.log(typeof newrow);
    newrow.push(value);
    this.setState({
      NewRows: newrow,
      InputState:"",
    });
  }

}
  ShowInputAdd(ID){
    if(this.state.InputState===""){
      this.setState({
        InputState:<InputFile
        ID={ID}
        AddRow={this.AddRow.bind(this)}
        />,
      });
    }
    else{
      this.setState({
        InputState:"",
      });
    }

  }

  render() {
    var i=this.props.i;
    var item=this.props.item;
    var Lista=this.props.Lista;

    var MapofNewRows=Object.keys(this.state.NewRows).map((item,i) =>
    <div key={i}>
      {this.state.NewRows[item]}
    </div>);

         return (
         <>

         <div className="element_targetC">
                 <IconMap className="svg_ico"/>
                 <div >
                 {Lista[item].id}
                 </div>
         </div>

         <div className="element_target">
                 <div className="element_target_child">
                 Street:
                 </div>
                 <div className="element_target_child">
                 {Lista[item].t_street_name}
                 </div>
         </div>

         <div className="element_target">
                   <div className="element_target_child">
                   Number:
                   </div>
                   <div className="element_target_child">
                    {Lista[item].n_number}
                   </div>
         </div>

         <div className="element_target">
                   <div className="element_target_child">
                   City:
                   </div>
                   <div className="element_target_child">
                    {Lista[item].t_city}
                   </div>
         </div>

         <div className="element_targetC">
             <AddFile
             ShowInputAdd={this.ShowInputAdd.bind(this)}
             ID={Lista[item].id}/>
             <div className="element_target_child">
                 Code:
                 <div className="element_target_child">
                 {Lista[item].t_code}
                 </div>
             </div>
         </div>
         <div>
              {MapofNewRows}
              {this.state.InputState}

         </div>

         <div className="ButtonSpace">
               <Link className="Button" to={"/Entities"}>
               Entities
               </Link>
         </div>

         </>
);
}
}
export default Card;
