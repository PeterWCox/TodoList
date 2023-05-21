import "./global.css";
import "./PublicTemplate.css";
import "../css/grid.css";
import "./DataFilter.css";
import "./ProjectsHeader.css";
import "./Divider.css";

import { Searchbar } from "../lib/Searchbar/Searchbar";
import { MultiCheckbox } from "../lib/Checkbox/MultiCheckbox";
import { Dropdown } from "../lib/Dropdown/Dropdown";
import { Button } from "../lib/Button/Button";

export const TodoApp = () => {
  return (
    <div className="PublicTemplate">
      <div className="PublicTemplateContent">
        {/* Header */}
        <div className="Row Row_spacing_2xl">
          <div className="Column Column_span_12 ProjectsHeader">
            <h1>Projects</h1>
            <div className="body1">
              Browse the list of UK nature-based carbon projects and learn more
              about the positive impact they are making
            </div>
          </div>
        </div>
        {/* Spacer */}
        <div className="Row Row_spacing_ll">
          <div className="Column Column_span_12">
            <div className=" Divider_horizontal"></div>
          </div>
        </div>
        {/* Filters + Contnt */}
        <div className="DataFilter">
          {/* Filters Panel */}
          <div className="DataFilterFilters">
            {/* Header */}
            <div className="Row Row_spacing_ml Justify_between Align_center DataFilterFiltersHeader">
              {/* Filter Label */}
              <div className="Column Column_span_6">
                <h3>Filter</h3>
              </div>

              {/* Clear filters */}
              <div className="Column Column_span_6 DataFilterFiltersHeaderClear">
                <button
                  className="Button Button_secondary Button_medium Button_content_medium"
                  type="button"
                >
                  <span>Clear all</span>
                </button>
              </div>
            </div>

            {/* Searchbar */}
            <div className="Row Row_spacing_l">
              <div className="Column Column_span_12">
                <div className="DataFilterContainer">
                  <Searchbar />
                </div>
              </div>
            </div>

            {/* Multi checkbox */}
            <div className="Row Row_spacing_l">
              <div className="Column Column_span_12">
                <div className="DataFilterContainer">
                  <MultiCheckbox
                    label="Codes and Standards"
                    options={["Peatland Code", "Woodland Carbon Code"]}
                  />
                </div>
              </div>
            </div>

            {/* Dropdown */}
            <div className="Row Row_spacing_l">
              <div className="Column Column_span_12">
                <div className="DataFilterContainer">
                  <Dropdown
                    label="Codes and Standards"
                    options={["Peatland Code", "Woodland Carbon Code"]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="DataFilterContent">
            <div>
              <Button
                text={"Developer Login"}
                type={"primary"}
                size={"medium"}
                content={"medium"}
              />
              <Button
                text={"Developer Login"}
                type={"secondary"}
                size={"medium"}
                content={"medium"}
              />
              <Button
                text={"Developer Login"}
                type={"tertiary"}
                size={"medium"}
                content={"medium"}
              />
              <Button
                text={"Developer Login"}
                type={"reversedPrimary"}
                size={"medium"}
                content={"medium"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
