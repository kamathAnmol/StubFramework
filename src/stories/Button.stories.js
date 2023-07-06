import "../index.css";
import CustomButton from "../components/commons/button";

export default {
  title: "Button",
  component: CustomButton,
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    variant: "success",
    primary: true,
  },
};
