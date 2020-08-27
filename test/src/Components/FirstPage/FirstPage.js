import React from 'react';
import './FirstPage.css';
import { Link } from 'react-router-dom';
class FirstPage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    data:[],
  };
}
componentDidMount(){
console.log("Iniciando:");
this.GetData('/endpoints/Assets');
//this.GetData('/endpoints/Entities');
      }
SetData(data){
          console.log('This is your data', data.assets);
  this.setState({
data: data.assets,
});

      };
GetData(url){
console.log("Imprimiendo:");

const apiUrl = url;
fetch(apiUrl)
  .then(res => res.json())
  .then((data) =>
  this.SetData(data)


);
}

render() {
var Lista=this.state.data;
var ListaDesglosada=Object.keys(Lista).map((item,i) =>
<div key={i} className="Tarjet">
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
                     <Link className="Button"
to={"/Entities"}
                     >
                         Entities
                     </Link>
                   </div>
</div>
       );
  return (
<div className="FirstPage">
<div className="Title">Assets:</div>
{ListaDesglosada}
</div>
        );
}
}
export default FirstPage;
