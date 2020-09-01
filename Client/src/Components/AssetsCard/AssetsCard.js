import React from "react";
import { Link } from 'react-router-dom';
import Card from './Card';
class AssetsCard extends React.Component {

  render() {
  var Lista=this.props.data;
  var ListaDesglosada="";

  if(this.props.change===1){
   ListaDesglosada=Object.keys(Lista).map((item,i) =>
   <div key={i} className="Card_Asset">
    <Card
    item={item}
    i={i}
    Lista={Lista}/>
    </div>
         );
       }
  else{
    ListaDesglosada=Lista;
       }

         return (
         <>{ListaDesglosada}</>
);
}
}
export default AssetsCard;
