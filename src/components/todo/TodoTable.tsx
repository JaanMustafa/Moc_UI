import type { Todo } from '../../types/todoTypes';
import { Badge } from '../ui/Badge';

interface TodoTableProps {
    todos: Todo[];
    onViewDetails: (todo: Todo) => void;
}

export const TodoTable = ({ todos, onViewDetails }: TodoTableProps) => {
    if (todos.length === 0) {
        return (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
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
        <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Task Description
                        </th>
                        <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {todos.map((todo) => (
                        <tr key={todo.id} className="hover:bg-gray-50 transition-colors group">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Badge variant={todo.completed ? 'success' : 'warning'}>
                                    {todo.completed ? 'Completed' : 'Pending'}
                                </Badge>
                            </td>
                            <td className="px-6 py-4">
                                <div className={`text-sm font-medium ${todo.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                                    {todo.todo}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <button
                                    onClick={() => onViewDetails(todo)}
                                    className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-600 hover:bg-primary-600 hover:text-white transition-all rounded-lg text-sm font-semibold border border-primary-200"
                                >
                                    View Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
