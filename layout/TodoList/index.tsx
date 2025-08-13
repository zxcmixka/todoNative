import { Todo } from "@/types/todo";
import { FlatList, View, Text } from "react-native";

type TodoListProps = {
    todos: Todo[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return(
        <View>
            <FlatList data={todos}
            keyExtractor={(todo) => todo.id.toString()}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            />
        </View>
    );
}

// export default TodoList