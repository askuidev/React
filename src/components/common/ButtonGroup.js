import React, {PropTypes as t} from 'react'

/**
 * A ButtonGroup whose buttons act like a radio button.
 * Options should be passed as a list of [value, display] tuples.
 * Buttons are set up so you can use e.target.name and e.target.value in your
 * onChange handler like you would with regular form inputs.
 */
class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Summary"
    };
  }
  onClick = (value, e) => {
    this.setState({ value });
  }
  getButtons(buttons = []) {
    const { value } = this.state;
    const { btnClass } = this.props;
    return buttons.map((text, id) => {
      let active = value === text ? "active" : "";
      return <button
        key={id}
        type="button"
        className={"btn btn-primary "+active+" "+btnClass}
        onClick={this.onClick.bind(this, text)}>{text}</button>
    })
  }
  render() {
    const { mainClass = "", buttons = ["Empty Button"] } = this.props;
    return <div className={"button-group "+mainClass}>
      {this.getButtons(buttons)}
    </div>
  }
}

export default ButtonGroup
