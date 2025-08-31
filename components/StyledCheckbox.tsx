import { TouchableOpacity } from "react-native";

type StyledCheckboxProps = {
    checked: boolean;
    onCheck: () => void;
}

const StyledCheckbox: React.FC<StyledCheckboxProps> = ({checked, onCheck}) => {
    return(
        <TouchableOpacity onPress={onCheck}>
            
        </TouchableOpacity>
    )
}