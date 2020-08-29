import React from 'react';
import {ReactComponent as IconDropdown}  from './dropdown.svg';

class DataCard extends React.Component {
  constructor() {
    super();
    this.state = {
      Exit:"",
      Direction:"",
      Work:"",
    };
  }
    /*
  */
  ShowPropietyW(){
    var item=this.props.item;
    var List=this.props.List;
      console.log("Show Work");
        if(this.state.Work==""){
      this.setState({
        Work: Data_Work(List,item),
      });
    }else{
  this.setState({
      Work: "",
        });
    }
  }
  ShowPropietyD(){
    var item=this.props.item;
    var List=this.props.List;
      console.log("Show Direction");
        if(this.state.Direction==""){
      this.setState({
        Direction: Data_Direction(List,item),
      });
    }else{
  this.setState({
      Direction: "",
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
  var Direction=this.state.Direction;
  var Work=this.state.Work;
      return (
  <>

  <div className="element_target_childE">
    <div className="element_target_group_title">ID: {List[item].id}</div>
  </div>

  <div className="element_target_childE">
    Name: {List[item].t_entry_tenant_name}
  </div>
  <div className="element_target_childE">
    Age: {List[item].n_entry_tenant_age}
  </div>
  <div className="element_target_childE">
    Renta Initial: {List[item].n_entry_rent_initial}$
  </div>


  <div className="element_target_group">
  <div className="element_target_group_title">
  Work:
  <IconDropdown
  className="svg_ico_Dropdown"
  onClick={this.ShowPropietyW.bind(this)}/>
  </div>
  {Work}
  <div className="element_target_group_title">
  Direction:
  <IconDropdown
  className="svg_ico_Dropdown"
  onClick={this.ShowPropietyD.bind(this)}/>
  </div>
  {Direction}

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
function Data_Work(List,item) {
  const data = (<>
    <div className="element_target_childE">
    Compensation payment first date:  {List[item].d_bp_vacancy_compensation_payment_first_date}
    </div>
    <div className="element_target_childE">
    Vacancy expected date:
    {List[item].d_bp_vacancy_expected_date}
    </div>
    <div className="element_target_childE">
    Entry contract date end:
    {List[item].d_entry_contract_date_end}
    </div>

    </>);

  return <div>{data}</div>;
}
function Data_Direction(List,item) {
  const data = (<>
    <div className="element_target_childE">
    Direction:
    {List[item].t_entry_tenant_name}
    </div>

    </>);

  return <div>{data}</div>;
}
function Data_Exit(List,item) {
  const data = (<>
    <div className="element_target_childE">
    construction end:
    {List[item].d_exit_construction_end}
    </div>
    <div className="element_target_childE">
    construction reception:
    {List[item].d_exit_construction_reception}
    </div>
    <div className="element_target_childE">
    construction start:
    {List[item].d_exit_construction_start}
    </div>
    <div className="element_target_childE">
    market start:
    {List[item].d_exit_market_start}
    </div>
    <div className="element_target_childE">
    rented date:
    {List[item].d_exit_rented_date}
    </div>
    <div className="element_target_childE">
    transfer asset to am:
    {List[item].d_exit_transfer_asset_to_am}
    </div></>);

  return <div>{data}</div>;


}

 export default DataCard;
