import StyledButton from "@/components/StyledButton";
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
      <StyleText
        style={[{ textDecorationLine: isComplited ? "line-through" : "none" }]}
      >
        {title}
      </StyleText>
    <StyledButton label="Delete" />
    <StyledButton icon="pencil" />
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
});

export default TodoItem;
