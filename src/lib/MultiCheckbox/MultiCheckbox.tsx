import { useState } from 'react'

export interface IMultiCheckboxProps {
    label: string
    options: string[]
    values: string[]
}

export const MultiCheckbox = (props: IMultiCheckboxProps) => {
    const [values, setValues] = useState([])

    console.log(values)

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

                {/* Clear Button */}
                {values?.length > 0 ? (
                    <button
                        className="Button Button_secondary Button_medium Button_content_medium"
                        type="button"
                        onClick={() => {
                            setValues([])
                        }}
                    >
                        <span>Clear</span>
                    </button>
                ) : null}
            </div>

            {/* Checbox values wrapper */}
            {props.options.map((option) => {
                return (
                    <div className="CheckboxWrapper">
                        <label className="Label Label-right">
                            {/* Label */}
                            <div className="LabelValue LabelValue-right">
                                <div className="body1">{option}</div>
                            </div>
                            {/* Checkbox */}
                            <span
                                className={`Checkbox ${
                                    values.includes(option)
                                        ? 'Checkbox-checked'
                                        : null
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
                )
            })}
        </div>
    )
}
