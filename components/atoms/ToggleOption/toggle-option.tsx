import React from "react";
import ToggleSwitch from "../ToggleSwitch/toggle-switch";
import { HiInformationCircle } from "react-icons/hi";
interface ToogleOptionProps {
  optionText: string;
  withIcon?: boolean;
  checked: boolean
  handleToggle: ()=> void;
}
const ToggleOption = ({ optionText, withIcon , checked, handleToggle}: ToogleOptionProps): JSX.Element => {
  return (
    <div
      className="inline-flex cursor-pointer items-center gap-2 rounded-md px-2 py-0.5 border border-light-slate-6 bg-light-slate-1"
    >
      <ToggleSwitch handleToggle={handleToggle} name={optionText} checked={checked} />
      <span className="text-light-slate-11">{optionText}</span>
      {withIcon && <HiInformationCircle className="text-light-slate-9" />}
    </div>
  );
};
export default ToggleOption;
