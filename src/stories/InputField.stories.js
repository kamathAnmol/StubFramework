import "../index.css";
import InputField from "../components/commons/input-field";

export default {
  title: "InputField",
  component: InputField,
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    label: "Name of the input field",
    placeholder: "Enter text here",
  },
};

export const TextArea = {
  args: {
    label: "Name of the text area",
    as: "textarea",
    placeholder: "Enter text here",
  },
};

export const ColorPicker = {
  args: {
    label: "Pick a color",
    type: "color",
    inputLength: 1,
  },
};
