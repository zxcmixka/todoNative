import { COLORS } from "@/constants/ui";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import StyledText from "./StyledText";

type StyleButtonProps = TouchableOpacityProps & {
  label?: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  size?: "default" | "large" | "small";
};

const StyledButton: React.FC<StyleButtonProps> = ({
  label,
  icon,
  size,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.base, size === "small" && styles.small]}
      {...props}
    >
      {label && <StyledText>{label}</StyledText>}
      {icon && <Ionicons name={icon} size={14} color={COLORS.PRIMARY_TEXT} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  small: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});

export default StyledButton;
