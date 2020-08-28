import React from "react";
import ContextMenu from '../ContextMenu/ContextMenu';
class EntitiesCard extends React.Component {
//Displays the id of the selected entity through the console
  SelectEntitie(data){
    console.log(data);
  }

  render() {
    var Lista=this.props.data;
    var ListaDesglosada=Object.keys(Lista).map((item,i) =>

    <ContextMenu
    key={i}
    buttons={[
      { label: 'Test', onClick: (e) =>
      this.SelectEntitie(`ID: ${Lista[item].id}`) },
              ]}>
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
    </ContextMenu>
    );
  return (
  <>
  {ListaDesglosada}
  </>
);
}
}
export default EntitiesCard;
