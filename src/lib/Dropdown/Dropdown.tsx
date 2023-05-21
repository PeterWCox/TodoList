import { useState } from "react";

export interface IDropdownProps {
  label: string;
  options: string[];
}

export const Dropdown = (props: IDropdownProps) => {
  const [value, setValue] = useState("");

  return (
    <div className="DataFilterContainer select">
      <label className="Label Label-top">
        {/* Label */}
        <div className="LabelValue LabelValue-right">
          <div>{props.label}</div>
        </div>
        <div className=" form_field">
          <div className="Select Select-single Select-show-arrow">
            <div className="Select-selector">
              <span className="Select-selection-search">
                <input
                  type="search"
                  className="Select-selection-search-input"
                  unselectable="on"
                  value=""
                  id="rc_select_12"
                />
              </span>
              <span className="Select-selection-item" title="Please select">
                Please select
              </span>
            </div>
            <span
              className="Select-arrow"
              unselectable="on"
              aria-hidden="true"
              //   style="user-select: none;"
            >
              <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L5 5L9 1" stroke="#2C303B" stroke-width="2"></path>
              </svg>
            </span>
          </div>
        </div>
      </label>
      <button
        className="Button Button_secondary Button_medium Button_content_medium 
        "
        type="button"
      >
        <span>Clear</span>
      </button>
    </div>
  );
};
