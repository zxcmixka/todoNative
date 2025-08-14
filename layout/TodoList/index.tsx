import { Todo } from "@/types/todo";
import { FlatList, Text, View } from "react-native";
import TodoItem from "../TodoItem";

type TodoListProps = {
    todos: Todo[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return(
        <View>
            <FlatList data={todos}
            keyExtractor={(todo) => todo.id.toString()}
            renderItem={({ item }) => <TodoItem title={item.title} isComplited={item.isCompleted} />}
            />
        </View>
    );
}

export default TodoList