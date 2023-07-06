import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

function SelectDropdown({sendF, dispatchF, ...props}) {
  const options = props.valueArray.map((item) => ({
    value: item,
    label: item,
  }));

  return (
    <Select
      placeholder={props.placeholder}
      isSearchable={false}
      options={options}
      required
      onChange={(selected) => {
        dispatchF(selected.value);
      }}
    />
  );
}
export default SelectDropdown;

SelectDropdown.propTypes = {
  /**
   * specify placeholder for the dropdown
   */
  placeholder: PropTypes.string,
  /**
   * specify the options the user can select from
   */
  valueArray: PropTypes.array,
  /**
   * dispatches selected value to reducer
   */
  dispatchF: PropTypes.func,
};

SelectDropdown.defaultProps = {
  placeholder: "Select an option..",
  valueArray: ["Honda", "Yamaha", "Kawasaki", "Suzuki"],
  dispatchF: () => {},
};
