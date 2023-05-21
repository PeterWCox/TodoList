import './Checkbox.css'
import { useState } from 'react'

export interface ICheckboxProps {
    label: string
    onClick
}

export const ICheckboxProps = (props: ICheckboxProps) => {
    const [isChecked, setIsChecked] = useState([])

    return (
        <div className="DataFilterContainer">
            {/* Checkbox header */}
            <div className="DataFilterCheckboxHeader">
                {/* Label */}
                <label className="Label Label-top">
                    <div className="LabelValue LabelValue-right">
                        <div>{props.label}</div>
                    </div>
                </label>
            </div>

            {/* Checbox values wrapper */}
            <div className="CheckboxWrapper">
                <label className="Label Label-right">
                    {/* Label */}
                    <div className="LabelValue LabelValue-right">
                        <div className="body1">{option}</div>
                    </div>
                    {/* Checkbox */}
                    <span
                        className={`Checkbox ${
                            values.includes(option) ? 'Checkbox-checked' : null
                        }`}
                    >
                        <input
                            key={option}
                            type="checkbox"
                            className="Checkbox-input"
                            checked={values.includes(option)}
                            onChange={() => {
                                if (values.includes(option)) {
                                    setValues(
                                        values.filter(
                                            (value) => value !== option
                                        )
                                    )
                                } else {
                                    setValues([...values, option])
                                }
                            }}
                        />
                        <span className="Checkbox-inner"></span>
                    </span>
                </label>
            </div>
        </div>
    )
}
