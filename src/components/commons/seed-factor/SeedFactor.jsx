import React from "react";
import {useState, useEffect} from "react";
import "./SeedFactor.css";
import Form from "react-bootstrap/Form";
import {useDispatch} from "react-redux";
import RangeSlider from "../range-slider";
import JustificationBox from "../justification-box";
import {
  onChangeSeedFactorValue,
  onChangeSeedFactorJustification,
} from "../../../redux/actions";

function SeedFactor({data, metadata, contextManager}) {
  const dispatch = useDispatch();

  const selectedProfile = data.appStates.flags.selected_profile;

  const [currentValue, setCurrentValue] = useState(1);
  const [currentJustification, setCurrentJustification] = useState("");
  const [valueSelected, setValueSelected] = useState(false);

  return (
    <Form.Group className="form-group-spacing range-slider-container">
      <Form.Label className="form-label-text">{metadata.factorName}</Form.Label>
      <div className="slider-box-container">
        {valueSelected ? (
          <JustificationBox
            sendF={() => {
              setValueSelected(false);
            }}
            justificationQuestion={metadata.factors.justification_question}
            currentJustification={currentJustification}
            dispatchF={(justification) => {
              setCurrentJustification(justification);
              dispatch(
                onChangeSeedFactorJustification(
                  {
                    profileName: selectedProfile,
                    factorName: metadata.factorName,
                    value: justification,
                  },
                  contextManager.context
                )
              );
            }}
          />
        ) : (
          <RangeSlider
            minimumValue={metadata.factors.minimum_value}
            maximumValue={metadata.factors.maximum_value}
            minimumValueLabel={metadata.factors.minimum_value_label}
            maximumValueLabel={metadata.factors.maximum_value_label}
            currentValue={currentValue}
            sendF={() => {
              setValueSelected(true);
            }}
            dispatchF={(value) => {
              setCurrentValue(value);
              dispatch(
                onChangeSeedFactorValue(
                  {
                    profileName: selectedProfile,
                    factorName: metadata.factorName,
                    value: value,
                  },
                  contextManager.context
                )
              );
            }}
          />
        )}
      </div>
      <Form.Label className="form-label-text">{currentValue}</Form.Label>
    </Form.Group>
  );
}
export default SeedFactor;

// SeedFactor.propTypes = {
//   /**
//    * minimum value the slider can hold
//    */
//   factorName: PropTypes.string,
// };

// SeedFactor.defaultProps = {
//   factorName: "Factor 1",
// };
