import { FC } from "react"

interface ItodoItem {
    name: string;
}

const TodoItem: FC<ItodoItem> = ({name}) => {
    return (
        <p>{name}</p>
    )
}

export default TodoItem