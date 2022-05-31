import { FC } from "react"

interface ItodoItem {
    id: number;
    title: string;
    completed: boolean;
    onComplete: (id: number) => void;
    onRemove: (id: number) => void;
    onEdit: (id: number, title: string) => void;

}

const TodoItem: FC<ItodoItem> = ({id, title, completed}) => {
    return (
        <p>{title}</p>
    )
}

export default TodoItem