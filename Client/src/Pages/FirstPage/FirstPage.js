import React from 'react';
import './FirstPage.css';
import AssetsCard from '../../Components/AssetsCard';
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
      }
    SetData(data){
    console.log('This is your data', data.assets);
    this.setState({
      data: data.assets,
    });

      };
    GetData(url){
    const apiUrl = url;
    fetch(apiUrl)
      .then(res => res.json())
      .then((data) =>
      this.SetData(data)
    );
    }

render() {
var Lista=<AssetsCard data={this.state.data}/>;

  return (
<div className="FirstPage">
<div className="Title">Assets:</div>
{Lista}
</div>
        );
}
}
export default FirstPage;
