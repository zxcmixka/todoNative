import { COLORS } from "@/constants/ui";
import Header from "@/layout/Header";
import TodoList from "@/layout/TodoList";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

const defultTodos: Todo[] = [
  {
    id: 1,
    title: "buy milk",
    isCompleted: false,
  },
  {
    id: 2,
    title: "buy pc",
    isCompleted: false,
  },
  {
    id: 3,
    title: "buy pig",
    isCompleted: false,
  },
];

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>(defultTodos);

  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Header
        totalTodos={todos.length}
        completedTodos={completedTodos.length}
      />
      <TodoList todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});
