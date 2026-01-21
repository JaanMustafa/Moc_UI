import type { Todo } from '../../types/todoTypes';
import { TodoCard } from './TodoCard';

interface TodoGridProps {
    todos: Todo[];
}

export const TodoGrid = ({ todos }: TodoGridProps) => {
    if (todos.length === 0) {
        return (
            <div className="text-center py-16">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    No todos found
                </h3>
                <p className="text-gray-500">
                    Try adjusting your filters or search query
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {todos.map((todo) => (
                <TodoCard key={todo.id} todo={todo} />
            ))}
        </div>
    );
};
