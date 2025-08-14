import { COLORS } from "@/constants/ui";
import Header from "@/layout/Header"
import TodoList from "@/layout/TodoList";
import { Todo } from "@/types/todo";
import { useState } from "react";
import {Text, View, StatusBar, StyleSheet } from "react-native"

const defultTodos: Todo[] = [
  {
    id: 1,
    title: "buy milk",
    isCompleted: false,
  },
  {
    id: 2,
    title: "buy pig",
    isCompleted: false,
  },
]

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>(defultTodos);

  return(
    <View
      style={styles.container}
    >
      <StatusBar barStyle={"light-content"}/>  
      <Header/>
      <TodoList todos={todos}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  }
})