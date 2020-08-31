import React from 'react';
import {ReactComponent as IconDropdown}  from './dropdown.svg';
import {ReactComponent as IconPerson}  from './PersonCircle.svg';

class DataCard extends React.Component {
  constructor() {
    super();
    this.state = {
      Exit:"",
      Vacancy:"",
      Entry:"",
    };
  }

  ShowPropietyEntry(){
    var item=this.props.item;
    var List=this.props.List;
      console.log("Show Entry");
        if(this.state.Entry==""){
      this.setState({
        Entry: Data_Entry(List,item),
          });
    }else{
  this.setState({
      Entry: "",
        });
    }
  }
  ShowPropietyV(){
    var item=this.props.item;
    var List=this.props.List;
      console.log("Show Vacancy");
        if(this.state.Vacancy==""){
      this.setState({
        Vacancy: Data_Vacancy(List,item),
      });
    }else{
  this.setState({
      Vacancy: "",
        });
    }
  }
  ShowPropietyE(){
    var item=this.props.item;
    var List=this.props.List;
      console.log("Show Data_Exit");
        if(this.state.Exit==""){
      this.setState({
        Exit: Data_Exit(List,item),
      });
    }else{
  this.setState({
      Exit: "",

        });
    }
  }
  render() {

  var item=this.props.item;
  var List=this.props.List;
  var Exit=this.state.Exit;
  var Vacancy=this.state.Vacancy;
  var Entry=this.state.Entry;

      return (
  <>

  <div className="element_target_group_title">
  <IconPerson
  className="svg_ico_Person"/>
        <div>
        ID: {List[item].id}
        </div>
        <div>
        Asset: {List[item].id_asset}
        </div>
  </div>

<div className="element_target_Description">
              <div className="element_target_DescriptionC">
                  <div>Name:</div>
                  <div>{List[item].t_entry_tenant_name}</div>
              </div>

              <div className="element_target_DescriptionC">
                <div>Age: </div>
                <div>{List[item].n_entry_tenant_age}</div>
              </div>

              <div className="element_target_DescriptionC">
                <div>Renta Initial:</div>
                <div> ${List[item].n_entry_rent_initial}</div>
              </div>
</div>


<div className="element_target_group">

      <div className="element_target_group_title">
        Entry:
        <IconDropdown
        className="svg_ico_Dropdown"
        onClick={this.ShowPropietyEntry.bind(this)}/>
      </div>
      {Entry}

      <div className="element_target_group_title">
        Vacancy:
        <IconDropdown
        className="svg_ico_Dropdown"
        onClick={this.ShowPropietyV.bind(this)}/>
      </div>
      {Vacancy}

      <div className="element_target_group_title">
        Exit:
        <IconDropdown
        className="svg_ico_Dropdown"
        onClick={this.ShowPropietyE.bind(this)}/>
      </div>
      {Exit}

</div>

  </>
);
}

}
function Data_Entry(List,item) {
  const data = (
<div className="Content_Hidden">
    <div className="Column1_Hidden">
        <div className="element_target_childE">
        ID:  {List[item].id_entry}
        </div>

        <div className="element_target_childE">
        Use: {List[item].t_entry_use}
        </div>

        <div className="element_target_childE">
        Building:
         {List[item].t_entry_building}
        </div>

        <div className="element_target_childE">
        Floor:
         {List[item].t_entry_floor}
        </div>

        <div className="element_target_childE">
        <>Door: </>
        <> {List[item].t_entry_door}</>
        </div>


        <div className="element_target_childE">
        <>View: </>
        <> {List[item].t_entry_view}</>
        </div>

        <div className="element_target_childE">
        <div>Code: </div>
        <div> {List[item].t_entry_code}</div>
        </div>

        <div className="element_target_childE">
        <div>Name</div>
        <div>Oficial:</div>
        <div> {List[item].t_entry_name_official}</div>
        </div>
    </div>
    <div className="Column1_Hidden">
        <div className="element_target_childE">
        <div>A.Gross Interior: </div>
        <div> ${List[item].n_entry_area_gross_interior}</div>
        </div>

        <div className="element_target_childE">
        <div>A.Gross Exterior: </div>
        <div> ${List[item].n_entry_area_gross_exterior}</div>
        </div>

        <div className="element_target_childE">
        <div>Renta Original: </div>
        <div> {List[item].t_entry_status_rental_original}</div>
        </div>

        <div className="element_target_childE">
        <div>Comments: </div>
        <div> {List[item].t_entry_contract_comments}</div>
        </div>

        <div className="element_target_childE">
        <div>Contract End: </div>
        <div> {List[item].d_entry_contract_date_end}</div>
        </div>

    </div>

</div>
  );

  return <>{data}</>;
}
function Data_Vacancy(List,item) {
  const data = (
    <div className="Content_Hidden">
          <div className="Column1_Hidden">

          <div className="element_target_childE">
          <>ID: </>
          <> {List[item].id_bp}</>
          </div>

          <div className="element_target_childE">
          <div> Expected</div>
           <div>Original: </div>
          <div> {List[item].t_bp_vacancy_expected_original}</div>
          </div>

          <div className="element_target_childE">
          <div>Rental Status</div>
           <div>Current: </div>
          <div> {List[item].t_bp_rental_status_current}</div>
          </div>

          <div className="element_target_childE">

          <div>Expected </div>
          <div>Compensation: </div>
          <div> ${List[item].n_bp_vacancy_expected_compensation_original}</div>
          </div>

          <div className="element_target_childE">

          <div>Other: </div>
          <div>Cost Original: </div>
          <div> ${List[item].n_bp_vacancy_expected_other_costs_original}</div>
          </div>

          <div className="element_target_childE">
          <div>Additional </div>
          <div>Allocated </div>
          <div>Budget: </div>
          <div> ${List[item].n_bp_vacancy_additional_allocated_budget}</div>
          </div>

          <div className="element_target_childE">
            <div>Status </div>
            <div>negotiation: </div>
            <div> {List[item].t_bp_vacancy_status_negotiation}</div>
          </div>

          <div className="element_target_childE">
          <div>Expected</div>
          <div>Date:</div>
          <div> {List[item].d_bp_vacancy_expected_date}</div>
          </div>
    </div>
  <div className="Column1_Hidden">

  <div className="element_target_childE">
  <div>First</div>
  <div>payment:</div>
  <div> ${List[item].n_bp_vacancy_compensation_payment_first}</div>
  <div> {List[item].d_bp_vacancy_compensation_payment_first_date}</div>
  </div>

  <div className="element_target_childE">
  <div>Expected</div>
  <div>Date:</div>
  <div> {List[item].d_bp_vacancy_expected_date}</div>
  </div>

  <div className="element_target_childE">
  <div>Compensation</div>
  <div>Additional:</div>
  <div> ${List[item].n_bp_vacancy_compensation_additional}</div>
  </div>

  <div className="element_target_childE">
  <div>Debt</div>
  <div>comdonation:</div>
  <div> ${List[item].n_bp_vacancy_debt_comdonation}</div>
  </div>

  <div className="element_target_childE">
  <div>Cost total:</div>
  <div>compensation</div>
  <div> ${List[item].n_bp_vacancy_compensation_costs_total}</div>
  </div>

  <div className="element_target_childE">
  <div>Cost direct:</div>
  <div> ${List[item].n_bp_vacancy_costs_direct}</div>
  </div>

  <div className="element_target_childE">
  <div>Agent fees:</div>
  <div> ${List[item].n_bp_vacancy_agent_fees}</div>
  </div>

  <div className="element_target_childE">
  <div>Other costs:</div>
  <div> {List[item].n_bp_vacancy_costs_other}</div>
  </div>
  <div className="element_target_childE">

  <div>Vacancy</div>
  <div>pending:</div>
  <div> {List[item].t_bp_vacancy_pending}</div>
  </div>

  </div>
  </div>);

  return <>{data}</>;
}
function Data_Exit(List,item) {
  const data = (
<div className="Content_Hidden">
    <div className="Column1_Hidden">

    <div className="element_target_childE">
    <>ID:</>
    <> {List[item].id_exit}</>
    </div>

    <div className="element_target_childE">
    <div>Work</div>
    <div> transformation:</div>
    <div> {List[item].t_exit_transformation_work}</div>
    </div>

    <div className="element_target_childE">
    <div>Use:</div>
    <div> {List[item].t_exit_use}</div>
    </div>

    <div className="element_target_childE">
    <div>Building:</div>
    <div> {List[item].t_exit_building}</div>
    </div>

    <div className="element_target_childE">
    <div>Floor:</div>
    <div> {List[item].t_exit_floor}</div>
    </div>

    <div className="element_target_childE">
    <div>Door:</div>
    <div> {List[item].t_exit_door}</div>
    </div>

    <div className="element_target_childE">
    <div>View:</div>
    <div> {List[item].t_exit_view}</div>
    </div>

    <div className="element_target_childE">
    <div>Code:</div>
    <div> {List[item].t_exit_code}</div>
    </div>

    <div className="element_target_childE">
    <div>Name</div>
    <div>Oficial</div>
    <div> {List[item].t_exit_name_official}</div>
    </div>

    <div className="element_target_childE">
    <div>Interior Area:</div>
    <div> {List[item].n_exit_area_net_interior}</div>
    </div>

    <div className="element_target_childE">
    <div>Interior Gross:</div>
    <div> {List[item].n_exit_area_gross_interior}</div>
    </div>

    <div className="element_target_childE">
    <div>Exterior Gross:</div>
    <div> {List[item].n_exit_area_gross_exterior}</div>
    </div>

    <div className="element_target_childE">
    <div>Imputable</div>
    <div>Common:</div>
    <div> {List[item].n_exit_area_imputable_common}</div>
    </div>

    <div className="element_target_childE">
    <div>Imputable</div>
    <div>Comercial:</div>
    <div> {List[item].n_exit_area_imputable_commercial}</div>
    </div>

    <div className="element_target_childE">
    <div>License:</div>
    <div> {List[item].t_exit_license_id}</div>
    </div>
</div>
    <div className="Column1_Hidden">




    <div className="element_target_childE">
    <div>Start</div>
    <div>construction:</div>
    <div> {List[item].d_exit_construction_start}</div>
    </div>

    <div className="element_target_childE">
    <div>End</div>
    <div>construction:</div>
    <div> {List[item].d_exit_construction_end}</div>
    </div>

    <div className="element_target_childE">
    <div>Reception</div>
    <div>construction:</div>
    <div> {List[item].d_exit_construction_reception}</div>
    </div>

    <div className="element_target_childE">
    <div>Transfer</div>
    <div>Asset to am:</div>
    <div> {List[item].d_exit_transfer_asset_to_am}</div>
    </div>

    <div className="element_target_childE">
    <div>Rent</div>
    <div>expected:</div>
    <div> {List[item].n_exit_rent_expected}</div>
    </div>

    <div className="element_target_childE">
    <div>Rent</div>
    <div>expected m2:</div>
    <div> {List[item].n_exit_rent_expected_m2}m2</div>
    </div>

    <div className="element_target_childE">
    <div>Offering</div>
    <div>price current:</div>
    <div> ${List[item].n_exit_offering_price_current}</div>
    </div>

    <div className="element_target_childE">
    <div>Start</div>
    <div>market:</div>
    <div> {List[item].d_exit_market_start}</div>
    </div>

    <div className="element_target_childE">
    <div>Status:</div>
    <div className="wraptext"> {List[item].t_exit_status_commercialization}</div>
    </div>

    <div className="element_target_childE">
    <div>Rented</div>
    <div>price:</div>
    <div> ${List[item].n_exit_rented_price}</div>
    </div>

    <div className="element_target_childE">
    <div>Rented</div>
    <div>date:</div>
    <div> ${List[item].d_exit_rented_date}</div>
    </div>



  </div>
</div>);

  return <>{data}</>;


}

 export default DataCard;
