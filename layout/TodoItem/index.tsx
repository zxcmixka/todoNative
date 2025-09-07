import StyledButton from "@/components/StyledButton";
import StyledCheckbox from "@/components/StyledCheckbox";
import StyleText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { StyleSheet, View } from "react-native";

type TodoItemProps = {
  title: string;
  isComplited: boolean;
};

const TodoItem: React.FC<TodoItemProps> = ({ title, isComplited }) => {
  return (
    <View style={styles.container}>
      <View style={styles.checkTitleContainer}>
      <StyledCheckbox checked={isComplited} onCheck={() => {}}/>
      <StyleText
        style={[{ textDecorationLine: isComplited ? "line-through" : "none" }]}
      >
        {title}
      </StyleText>
      </View>
      <View style={styles.controlsContainer}>
        <StyledButton icon="pencil" size="small" />
        <StyledButton icon="trash" size="small" variant="delete"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 8,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
  controlsContainer: {
    flexDirection: "row",
    gap: 5,
  },
  checkTitleContainer: {
    
  },
});

export default TodoItem;
