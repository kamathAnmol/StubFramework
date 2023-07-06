import React from "react";
import "./SeedValuesForm.css";
import SeedFactor from "../seed-factor";
import SelectDropdown from "../select-dropdown";

import {useDispatch} from "react-redux";

import {onChangeSelectedProfile} from "../../../redux/actions";
function SeedValuesForm({
  data,
  metadata,
  configuration,
  customisation,
  contextManager,
}) {
  const dispatch = useDispatch();

  const valueArray = Object.values(metadata.profiles.profiles).map(
    (item) => item.name
  );

  return (
    <div>
      <div className="seed-values-dropdown-container">
        <SelectDropdown
          valueArray={valueArray}
          dispatchF={(value) => {
            dispatch(onChangeSelectedProfile(value, contextManager.context));
          }}
        />
      </div>
      <div className="seed-values-factor-container">
        {Object.values(metadata.factors.factor_names).map(
          (factor_name, key) => {
            return (
              <SeedFactor
                key={key}
                data={{appStates: data.appStates}}
                metadata={{
                  factorName: factor_name,
                  profiles: metadata.profiles,
                  factors: metadata.factors,
                }}
                contextManager={contextManager}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
export default SeedValuesForm;
