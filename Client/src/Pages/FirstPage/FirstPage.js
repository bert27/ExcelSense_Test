import React from 'react';
import '../../index.sass';
import AssetsCard from '../../Components/AssetsCard/AssetsCard';
import Spinner from '../../Components/Spinner/Spinner';

//While fetching data a loading animation is shown
class FirstPage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    data:<Spinner/>,
    change: 0,
  };
}
    componentDidMount(){this.GetData('/endpoints/Assets');}

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
            data: data.assets,
            change: 1,
          });
      };

render() {
  return (
<div className="FirstPage">
    <div className="Title">Assets:</div>
    <AssetsCard data={this.state.data}
     change={this.state.change}/>
</div>
        );
}
}
export default FirstPage;
