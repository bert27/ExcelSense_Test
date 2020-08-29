import React from 'react';
import EntitiesCard from '../../Components/EntitiesCard/EntitiesCard';
import Spinner from '../../Components/Spinner/Spinner';
import './Entities.css';

class Entities extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      data:""
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
    this.setState({
      data: data.entities,
    });
}
  render() {
    var List=this.state.data;
    var MapOfList=null;
    if(List===""){
      MapOfList=<Spinner/>;
    }else{
    MapOfList=<EntitiesCard
     data={this.state.data}/>;
}
    return (
  <div className="FirstPage">
      <div className="Title">Entities:</div>
      {MapOfList}
  </div>
          );
      }
}
  export default Entities;
