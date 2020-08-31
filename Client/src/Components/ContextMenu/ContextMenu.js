import React from 'react';
import './ContextMenu.sass';
import ReactDOM from 'react-dom';
import DataCard from './DataCard';
class ContextMenu extends React.Component {

  constructor() {
    super();
    this.state = {
      open: false
    };
  }
/*
componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
    document.removeEventListener('contextmenu', this.handleRightClickOutside);
}
componentDidMount() {
  //Events to hear the mouse clicks
    document.addEventListener('click', this.handleClickOutside);
    document.addEventListener('contextmenu', this.handleRightClickOutside);
  }

  handleClickOutside = (e) => {
    if (!this.state.open) {
      return;
    }

const root = ReactDOM.findDOMNode(this.div);
const context = ReactDOM.findDOMNode(this.context);
const isInRow = (!root.contains(e.target) || root.contains(e.target));
const isInContext = !context.contains(e.target);

    if (isInRow && isInContext) {
      this.setState({
        open: false
      });
    }
  }

  handleRightClickOutside = (e) => {
    if (!this.state.open) {
      return;
    }

    const root = ReactDOM.findDOMNode(this.div);
    const isInRow = !root.contains(e.target);

    if (isInRow) {
      this.setState({
        open: false
      });
    }
  }

  handleRightClick = (e) => {
    e.preventDefault();
    this.setState({
      open: true,
      top: window.scrollY + e.nativeEvent.clientY,
      left: e.nativeEvent.clientX,
    });
  }
*/
  render() {
    return (
      <div className="Card_Entitie"
        onContextMenu={this.handleRightClick}
        ref={(node) => this.div = node}>
        {this.props.children}
          <DataCard
          item={this.props.item}
          List={this.props.List}/>
        {//If state open different null: show MenuDropdown
          !this.state.open? null
          : <div
              className="menu"
              ref={(div) => this.context = div}
              style={{ top: this.state.top, left: this.state.left }}>
              <div>
      {//Dropdown Menu in Page Entities:
        this.props.MenuDropdown.length > 0 &&
      this.props.MenuDropdown.map((button) => {
        return Menu_dropdown(button);
                  })}
              </div>
          </div>
        }
      </div>
    );
  }

}

function Menu_dropdown(button) {
  return (
  <div className="menu_element" key={button.label}>
    <div
    className="menu_elementC"
    onClick={button.onClick}>
    {button.label}
    </div>
    <div className="line"></div>
  </div>);
}

  export default ContextMenu;
