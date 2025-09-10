import StyledButton from "@/components/StyledButton";
import StyledTextInput from "@/components/StyledTextInput";
import { Todo } from "@/types/todo";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

type TodoCreatorProps = {
  onAddTodo: (title: Todo["title"]) => void;
};

const TodoCreator: React.FC<TodoCreatorProps> = ({ onAddTodo, ...props }) => {
  const [text, setText] = useState("");
  const [inputError, setInputError] = React.useState(false);

  const onPressAdd = () => {
    if (!text) {
      setInputError(true);
      return
    }
    onAddTodo(text);
    setText("");
  }

  return (
    <View style={styles.container}>
      <StyledTextInput
        placeholder="Add a task..."
        value={text}
        onChangeText={setText}
      />
      <StyledButton label="+" onPress={onPressAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
  },
});

export default TodoCreator;
