import React from "react";
import { Link } from 'react-router-dom';
import {ReactComponent as IconMap}  from './map.svg';
export default function AssetsCard(props) {
  var Lista=props.data;

  var ListaDesglosada=Object.keys(Lista).map((item,i) =>
  <div key={i} className="Tarjet">

  <IconMap
className="svg_ico"/>
  <div className="element_tarjet">
  {Lista[item].id}
  </div>

  <div className="element_tarjet">
      <div className="element_tarjet_child">
      Street:
      </div>
      <div className="element_tarjet_child">
      {Lista[item].t_street_name}
      </div>
  </div>

  <div className="element_tarjet">
        <div className="element_tarjet_child">
        Number:
        </div>
        <div className="element_tarjet_child">
         {Lista[item].n_number}
        </div>
  </div>

  <div className="element_tarjet">
        <div className="element_tarjet_child">
        City:
        </div>
        <div className="element_tarjet_child">
         {Lista[item].t_city}
        </div>
  </div>
  <div className="element_tarjet">
  <div className="element_tarjet_child">
        Code:
        </div>
        <div className="element_tarjet_child">
        {Lista[item].t_code}
        </div>
  </div>

  <div className="ButtonSpace">
    <Link className="Button" to={"/Entities"}>
    Entities
    </Link>
  </div>
</div>
         );
 return ListaDesglosada;
}
