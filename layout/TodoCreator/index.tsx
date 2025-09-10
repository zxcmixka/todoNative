import StyledButton from "@/components/StyledButton";
import StyledTextInput from "@/components/StyledTextInput";
import { Todo } from "@/types/todo";
import { View, StyleSheet } from "react-native";

type TodoCreatorProps = {
  onAddTodo: (title: Todo["title"]) => void;
};

const TodoCreator: React.FC<TodoCreatorProps> = ({ onAddTodo, ...props }) => {
  return (
    <View style={styles.container}>
      <StyledTextInput placeholder="Add a task..." />
      <StyledButton label="+" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 15,
    }
})

export default TodoCreator;