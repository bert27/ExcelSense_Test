import React from 'react';
import EntitiesCard from '../../Components/EntitiesCard';
import './Entities.css';
  class Entities extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      data:[],
      spinner:<div className="Spinner"></div>,
    };
  }
    componentDidMount(){
    this.GetData('/endpoints/Entities');
  }
  GetData(url){
  const apiUrl = url;
  fetch(apiUrl)
    .then(res => res.json())
    .then((data) =>
    this.SetData(data)
  );
  }
  SetData(data){
  console.log('This is your data', data.entities);
    this.setState({
  data: data.entities,
  });
}
  render() {
    var Lista=this.state.data;
    var ListaDesglosada=null;
    if(Lista==[]){
      ListaDesglosada=this.state.spinner;
    }else{
    ListaDesglosada=<EntitiesCard data={this.state.data}/>;
}
    return (
  <div className="FirstPage">
    <div className="Title">Entities:</div>
 {ListaDesglosada}
{/*{this.state.spinner}*/}


  </div>
          );
}
}
  export default Entities;
