import { useNavigate } from 'react-router-dom';
import type { Todo } from '../../types/todoTypes';
import { Badge } from '../ui/Badge';

interface TodoCardProps {
    todo: Todo;
}

export const TodoCard = ({ todo }: TodoCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/domain/${todo.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="todo-card bg-white rounded-lg p-6 shadow-sm cursor-pointer hover:shadow-lg border border-gray-100 fade-in"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleClick();
                }
            }}
            aria-label={`View details for: ${todo.todo}`}
        >
            <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 flex-1 pr-2">
                    {todo.todo}
                </h3>
            </div>

            <div className="flex items-center justify-between">
                <Badge variant={todo.completed ? 'success' : 'warning'}>
                    {todo.completed ? '✓ Completed' : '⏳ Pending'}
                </Badge>

                <span className="text-xs text-gray-400">
                    ID: {todo.id}
                </span>
            </div>

            <div className="mt-4 text-xs text-gray-500">
                User: #{todo.userId}
            </div>
        </div>
    );
};
