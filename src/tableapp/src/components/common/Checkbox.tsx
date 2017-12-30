import * as React from 'react';

interface CheckboxProps {
    id?: string | number;
    label?: string;
    mainClass?: string;
    onChange?: (id: string | number, e: object) => void;
}

export default class Checkbox extends React.Component<CheckboxProps, {}> {
    onChange = (id: string | number, e: object) => {
        if (this.props.onChange) {
            this.props.onChange(id, e);
        }
    }
    render() {
        const { id, label, mainClass } = this.props;
        return (
            <div className={'pretty p-icon custom-checkbox ' + mainClass}>
                <input
                    onChange={this.onChange.bind(this, id)}
                    type="checkbox"
                />
                <div className="state">
                    <i className="icon fa fa-times" />
                    <label>{label}</label>
                </div>
            </div>
        );
    }
}
