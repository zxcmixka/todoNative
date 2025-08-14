import StyleText from "@/components/StyledText"

type TodoItemProps = {
    title: string;
    isComplited: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, isComplited }) => {
    return <StyleText>{title}</StyleText>
}

export default TodoItem