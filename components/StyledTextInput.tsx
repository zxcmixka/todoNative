import { COLORS } from "@/constants/ui";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type StyledTextInput = TextInputProps;

const StyledTextInput: React.FC<TextInputProps> = ({ ...props }) => {
  return <TextInput style={[style.input, props.style]} {...props} placeholderTextColor={COLORS.PRIMARY_BORDER} />;
};

const style = StyleSheet.create({
    input:{
        paddingHorizontal: 20,
        paddingVertical: 15,
        color: COLORS.PRIMARY_TEXT,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.PRIMARY_BORDER,
        flex: 1,
        marginVertical: 15,
        marginLeft: 15,
    }
})

export default StyledTextInput;
