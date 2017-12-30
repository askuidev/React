import * as React from 'react';
const { Icon } = require('react-fa');

interface ButtonGroupProps {
    buttonType?: string;
    withIcons?: boolean;
    isGroup?: boolean;
    activeBtn?: string;
    mainClass?: string;
    grouped?: boolean;
    buttons?: ButtonProps[] | RadioBtnProps[];
    checkedRadio?: string;
    onButtonGroupClick?: (field: string) => void;
    onRadioChange?: (text: string, e: MyFormEvent) => void;
    onCheckChange?: (actionType: string, e: MyFormEvent) => void;
    onValueChange?: (e: MyFormEvent) => void;
    onClearClick?: () => void;
}

interface ButtonProps {
    text?: string;
    field?: string;
    iconClass?: string;
    className?: string;
}

interface RadioBtnProps {
    name?: string;
    type?: string;
    text?: string;
}

interface MyEventTarget extends EventTarget {
  value: string;
}

interface MyFormEvent extends React.FormEvent<HTMLInputElement> {
  target: MyEventTarget;
}

class ButtonGroup extends React.Component<ButtonGroupProps, {}> {
    onButtonGroupClick = (field: string) => {
        const { onButtonGroupClick } = this.props;
        if (onButtonGroupClick) { onButtonGroupClick(field); }
    }
    getButtonGroup(buttons: ButtonProps[]) {
        const { withIcons, isGroup, activeBtn } = this.props;
        return buttons.map(({ text, field, iconClass, className = '' }: ButtonProps, index: number) => {
            let active = (isGroup && activeBtn === field) ? 'active' : '';
            let btnClassname = className ? className : 'btn-default';
            return (
                <button
                    key={index}
                    type="button"
                    className={'btn ' + active + ' ' + btnClassname}
                    onClick={this.onButtonGroupClick.bind(this, field)}
                >
                    {withIcons ?
                      <span>
                          <Icon name={iconClass} /> {text}
                      </span> : text}
                </button>
            );
        });
    }
    getButtons() {
        const { mainClass = '', buttons = [{ text: 'Empty Button', field: 'emptyButton' }], grouped } = this.props;
        return (
          <div className={'button-group ' + mainClass}>
            {grouped ?
                <div className="btn-group grouped">
                    {this.getButtonGroup(buttons)}
                </div> : this.getButtonGroup(buttons)}
          </div>
        );
    }
    onRadioClick = (text: string, e: MyFormEvent) => {
        const { onRadioChange } = this.props;
        this.setState({ checkedRadio: text });
        if (onRadioChange) { onRadioChange(text, e); }
    }
    getRadioButton(data: RadioBtnProps, index: number) {
        const { checkedRadio } = this.props;
        const {
            name,
            type,
            text
        } = data;
        return (
          <div className="checkbox" key={index}>
              <label>
                  <input
                      type={type}
                      name={name}
                      checked={checkedRadio === text}
                      onClick={this.onRadioClick.bind(this, text)}
                  /> {text}
              </label>
          </div>
        );
    }
    getRadioButtons( buttons: RadioBtnProps[] ) {
        return buttons.map((obj: RadioBtnProps, index: number) => {
            return this.getRadioButton(obj, index);
        });
    }
    render() {
        const { buttonType, buttons } = this.props;
        return buttons ? (
          <div>
              {buttonType === 'button' ?
                  this.getButtons() : null}
              {buttonType === 'radio' ?
                  this.getRadioButtons(buttons) : null}
          </div>
        ) : (
          <div />
        );
    }
}

export default ButtonGroup;
