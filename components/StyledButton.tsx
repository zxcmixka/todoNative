import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import StyledText from "./StyledText";

type StyleButtonProps = TouchableOpacityProps & {
  label?: string;
};

const StyledButton: React.FC<StyleButtonProps> = ({ label, ...props }) => {
  <TouchableOpacity>
    {" "}
    {label && <StyledText>Hello</StyledText>}
  </TouchableOpacity>;
};
