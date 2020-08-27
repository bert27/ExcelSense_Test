import React from 'react';
import logo from './logo.svg';
import './Entities.css';
  class Entities extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      data:[],
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
    var ListaDesglosada=Object.keys(Lista).map((item,i) =>
    <div key={i} className="Tarjet">
      <div className="element_tarjet_child">
      {Lista[item].id}
      </div>
      <div className="element_tarjet_child">
      {Lista[item].d_bp_vacancy_compensation_payment_first_date}
      </div>
      <div className="element_tarjet_child">
      {Lista[item].d_bp_vacancy_expected_date}
      </div>
      <div className="element_tarjet_child">
      {Lista[item].d_entry_contract_date_end}
      </div>
      <div className="element_tarjet_child">
      {Lista[item].d_exit_construction_end}
      </div>
      <div className="element_tarjet_child">
      {Lista[item].d_exit_construction_reception}
      </div>
      <div className="element_tarjet_child">
      {Lista[item].d_exit_construction_start}
      </div>
      <div className="element_tarjet_child">
      {Lista[item].d_exit_market_start}
      </div>
      <div className="element_tarjet_child">
      {Lista[item].d_exit_rented_date}
      </div>
      <div className="element_tarjet_child">
      {Lista[item].d_exit_transfer_asset_to_am}
      </div>
    </div>
  );
    return (
  <div className="FirstPage">
  <div className="Title">Entities:</div>
  {ListaDesglosada}



  </div>
          );
}
}
  export default Entities;
