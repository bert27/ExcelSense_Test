import React from "react";
import Card from '../ContextMenu/ContextMenu';
import './EntitiesCard.sass';

class EntitiesCard extends React.Component {
//Displays the id of the selected entity through the console
  SelectEntitie(data){
    console.log(data);
  }

  render() {
    var List=this.props.data;
    console.table(List[0]);
    var MapOfList=Object.keys(List).map((item,i) =>
    <Card
    key={i}
    MenuDropdown={[
      { label: 'Test', onClick: (e) =>
      this.SelectEntitie(`ID: ${List[item].id}`) },]}
    item={item}
    i={i}
    List={List}>


    </Card>
    );
  return (
  <>
  {MapOfList}
  </>
);
}
}
export default EntitiesCard;
