import React from 'react';
import {Icon} from 'react-fa';

/**
 * A ButtonGroup whose buttons act like a radio button.
 * Options should be passed as a list of [value, display] tuples.
 * Buttons are set up so you can use e.target.name and e.target.value in your
 * onChange handler like you would with regular form inputs.
 */
class ButtonGroup extends React.Component {
  componentWillMount() {
    const { activeIndex = 0 } = this.props;
    this.setState({ activeIndex });
  }
  onClick = (activeIndex, e) => {
    this.setState({ activeIndex });
  }
  getButtonGroup(buttons = []) {
    const { activeIndex } = this.state;
    const { withIcons, isGroup } = this.props;
    return buttons.map(({text, iconClass, className=""}, index) => {
      let active = (isGroup && activeIndex === index) ? "active" : "";
      let btnClassname = className?className:"btn-default"
      return <button
        key={index}
        type="button"
        className={"btn "+active+" "+btnClassname}
        onClick={this.onClick.bind(this, index)}>
        {withIcons?<span><Icon name={iconClass} /> {text}</span>:text}
      </button>
    })
  }
  getButtons() {
    const { mainClass = "", buttons = ["Empty Button"], grouped } = this.props;
    return <div className={"button-group "+mainClass}>
      {grouped?
        <div className="btn-group grouped">
          {this.getButtonGroup(buttons)}
        </div>:this.getButtonGroup(buttons)}
    </div>
  }
  onRadioChange = (e) => {
    const { onRadioChange } = this.props;
    if(onRadioChange) onRadioChange(e);
  }
  onRadioClick = (text, e) => {
    this.setState({checkedRadio: text})
  }
  getRadioButton(data, index, checkedRadio) {
    const {
      name,
      type,
      defaultChecked = false,
      text
    } = data;
    return <div className="checkbox" key={index}>
      <label>
        <input
          type={type}
          name={name}
          checked={checkedRadio === text}
          onClick={this.onRadioClick.bind(this, text)}
          onChange={this.onRadioChange} /> {text}
      </label>
    </div>
  }
  getRadioButtons() {
    const { checkedRadio } = this.state;
    const { buttons = [] } = this.props;
    return buttons.map((obj, index) => {
      return this.getRadioButton(obj, index, checkedRadio);
    });
  }
  render() {
    const { buttonType } = this.props;
    return <div>
      {buttonType === "button" ?
        this.getButtons(): null}
      {buttonType === "radio" ?
        this.getRadioButtons():null}
    </div>
  }
}

export default ButtonGroup
