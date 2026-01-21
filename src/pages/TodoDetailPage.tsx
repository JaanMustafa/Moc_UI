import { useParams, useNavigate } from 'react-router-dom';
import { useTodoDetail } from '../hooks/useTodos';
import { Badge } from '../components/ui/Badge';

export default function TodoDetailPage() {
    const { todoId } = useParams<{ todoId: string }>();
    const navigate = useNavigate();
    const id = todoId ? parseInt(todoId, 10) : 0;

    const { data: todo, isLoading, error } = useTodoDetail(id);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading todo details...</p>
                </div>
            </div>
        );
    }

    if (error || !todo) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center max-w-md px-6">
                    <div className="text-6xl mb-4">🔍</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Todo Not Found
                    </h2>
                    <p className="text-gray-600 mb-6">
                        The todo you're looking for doesn't exist or has been removed.
                    </p>
                    <button
                        onClick={() => navigate('/domain')}
                        className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                    >
                        ← Back to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <button
                        onClick={() => navigate('/domain')}
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-4 font-medium"
                    >
                        <span className="mr-2">←</span>
                        Back to Dashboard
                    </button>

                    <nav className="text-sm text-gray-500 mb-2">
                        <span>Todo</span>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900">#{todo.id}</span>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden fade-in">
                    {/* Hero Section */}
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 px-8 py-12">
                        <div className="mb-4">
                            <Badge variant={todo.completed ? 'success' : 'warning'}>
                                {todo.completed ? '✓ Completed' : '⏳ Pending'}
                            </Badge>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {todo.todo}
                        </h1>
                        <p className="text-gray-600">
                            Todo ID: #{todo.id}
                        </p>
                    </div>

                    {/* Details Section */}
                    <div className="px-8 py-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">
                            Details
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-500 mb-1">
                                    Task Description
                                </label>
                                <p className="text-lg text-gray-900">
                                    {todo.todo}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">
                                        Status
                                    </label>
                                    <p className="text-lg font-semibold">
                                        {todo.completed ? (
                                            <span className="text-success-600">✓ Completed</span>
                                        ) : (
                                            <span className="text-warning-600">⏳ Pending</span>
                                        )}
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">
                                        Todo ID
                                    </label>
                                    <p className="text-lg font-mono text-gray-900">
                                        #{todo.id}
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">
                                        User ID
                                    </label>
                                    <p className="text-lg font-mono text-gray-900">
                                        #{todo.userId}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                        <button
                            onClick={() => navigate('/domain')}
                            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                        >
                            ← Back to All Todos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
