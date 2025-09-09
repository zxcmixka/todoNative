import { COLORS } from "@/constants/ui";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type StyledTextInput = TextInputProps;

const StyledTextInput: React.FC<TextInputProps> = ({ ...props }) => {
  return <TextInput style={[style.input, props.style]} {...props} />;
};

const style = StyleSheet.create({
    input:{
        paddingHorizontal: 20,
        paddingVertical:20,
        color: COLORS.PRIMARY_TEXT,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.PRIMARY_BORDER
    }
})

export default StyledTextInput;
