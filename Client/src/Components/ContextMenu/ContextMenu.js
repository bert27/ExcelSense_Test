import React from 'react';
import './ContextMenu.sass';
import ReactDOM from 'react-dom';

class ContextMenu extends React.Component {
  static defaultProps = {
    buttons: []
  };

  constructor() {
    super();
    this.state = {
      open: false
    };
  }
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

  render() {
    return (
      <div className="Tarjet"
        onContextMenu={this.handleRightClick}
        ref={(node) => this.div = node}
      >
        {this.props.children}

        {
          !this.state.open
          ? null
          : <div
              className="menu"
              ref={(div) => this.context = div}
              style={{ top: this.state.top, left: this.state.left }}
          >
              <div>
    {
                  // button - name, onClick, label
      this.props.buttons.length > 0 &&
      this.props.buttons.map((button) => {
      return <div className="menu_element" key={button.label}>
      <div
      className="menu_elementC"
      onClick={button.onClick}>

      {button.label}
        </div>
        <div className="line">
        </div>
      </div>
                  })
                }
              </div>
          </div>
        }
      </div>
    );
  }
}
  export default ContextMenu;
