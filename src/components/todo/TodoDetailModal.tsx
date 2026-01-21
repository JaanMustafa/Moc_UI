import type { Todo } from '../../types/todoTypes';
import { Badge } from '../ui/Badge';

interface TodoDetailModalProps {
    todo: Todo | null;
    onClose: () => void;
}

export const TodoDetailModal = ({ todo, onClose }: TodoDetailModalProps) => {
    if (!todo) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose}></div>

            <div className="relative w-full max-w-lg mx-auto bg-white rounded-xl shadow-2xl transition-all transform fade-in">
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900">
                        Task Details
                    </h3>
                    <button
                        className="p-1 ml-auto bg-transparent border-0 text-gray-400 hover:text-gray-600 transition-colors float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={onClose}
                    >
                        <span className="bg-transparent text-gray-400 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                        </span>
                    </button>
                </div>

                {/* Body */}
                <div className="relative p-6 flex-auto">
                    <div className="mb-6">
                        <Badge variant={todo.completed ? 'success' : 'warning'}>
                            {todo.completed ? '✓ Completed' : '⏳ Pending'}
                        </Badge>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">
                                Description
                            </label>
                            <p className="text-lg text-gray-900 font-medium">
                                {todo.todo}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-500 mb-1">
                                    Todo ID
                                </label>
                                <p className="text-gray-900 font-mono">
                                    #{todo.id}
                                </p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-500 mb-1">
                                    User ID
                                </label>
                                <p className="text-gray-900 font-mono">
                                    #{todo.userId}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                    <button
                        className="px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none"
                        type="button"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
