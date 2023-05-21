import '../../css/FormLabel.css'
import '../../css/TextInput.css'
import '../../css/Forms.css'
import './Checkbox.css'
import { useState } from 'react'

export interface IMultiCheckboxProps {
    label: string
    onClick
}

export const MultiCheckbox = (props: IMultiCheckboxProps) => {
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
        </div>
    )
}
