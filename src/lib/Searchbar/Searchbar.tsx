import '../../css/FormLabel.css'
import '../../css/TextInput.css'
import '../../css/forms.css'
import { useState } from 'react'

export interface ISearchbarProps {
    value: string
    placeholder: string
    onChange: (value: string) => void
    showSearchIcon?: boolean
}

export const Searchbar = (props: ISearchbarProps) => {
    const [value, setValue] = useState(props.value)

    return (
        <div className="form_field TextInput ">
            <label className="Label Label-top">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder={props.placeholder}
                    step="any"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        props.onChange(e.target.value)
                    }}
                />
                {props.showSearchIcon ? (
                    <div className="TextInputIcon">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.4733 12.5276L10.9999 10.0742C11.96 8.87719 12.4249 7.35778 12.2991 5.82845C12.1733 4.29911 11.4664 2.8761 10.3236 1.85201C9.18085 0.827917 7.68914 0.280586 6.15522 0.32256C4.62129 0.364533 3.16175 0.992621 2.0767 2.07767C0.991644 3.16273 0.363557 4.62227 0.321583 6.15619C0.27961 7.69012 0.82694 9.18182 1.85103 10.3246C2.87512 11.4674 4.29814 12.1743 5.82747 12.3001C7.3568 12.4259 8.87621 11.961 10.0733 11.0009L12.5266 13.4542C12.5886 13.5167 12.6623 13.5663 12.7436 13.6002C12.8248 13.634 12.9119 13.6514 12.9999 13.6514C13.0879 13.6514 13.1751 13.634 13.2563 13.6002C13.3376 13.5663 13.4113 13.5167 13.4733 13.4542C13.5934 13.3299 13.6606 13.1638 13.6606 12.9909C13.6606 12.818 13.5934 12.6519 13.4733 12.5276ZM6.33327 11.0009C5.41029 11.0009 4.50804 10.7272 3.74061 10.2144C2.97318 9.70166 2.37504 8.97282 2.02183 8.1201C1.66862 7.26738 1.57621 6.32907 1.75627 5.42382C1.93634 4.51858 2.38079 3.68706 3.03344 3.03441C3.68608 2.38177 4.5176 1.93731 5.42285 1.75725C6.32809 1.57718 7.2664 1.6696 8.11913 2.02281C8.97185 2.37602 9.70068 2.97416 10.2135 3.74158C10.7262 4.50901 10.9999 5.41127 10.9999 6.33425C10.9999 7.57192 10.5083 8.75891 9.6331 9.63408C8.75793 10.5092 7.57095 11.0009 6.33327 11.0009Z"
                                fill="#2C303B"
                            ></path>
                        </svg>
                    </div>
                ) : null}
            </label>
        </div>
    )
}
