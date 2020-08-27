import React from "react";

export default function EntitiesCard(props) {
  var Lista=props.data;

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
 return ListaDesglosada;
}
