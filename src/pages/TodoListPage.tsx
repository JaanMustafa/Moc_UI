import { useState, useMemo } from 'react';
import { useTodos } from '../hooks/useTodos';
import type { TodoStatus, Todo } from '../types/todoTypes';
import { TabFilter } from '../components/todo/TabFilter';
import { TodoTable } from '../components/todo/TodoTable';
import { TodoDetailModal } from '../components/todo/TodoDetailModal';
import { TodoTableSkeleton } from '../components/todo/TodoSkeleton';

export default function TodoListPage() {
    const [activeTab, setActiveTab] = useState<TodoStatus>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    // Fetch all todos
    const { data, isLoading, error } = useTodos(activeTab);

    // Filter by search query
    const filteredTodos = useMemo(() => {
        if (!data?.todos) return [];

        if (!searchQuery.trim()) return data.todos;

        return data.todos.filter((todo) =>
            todo.todo.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [data?.todos, searchQuery]);

    // Calculate counts for tabs
    const counts = useMemo(() => {
        if (!data?.todos) return { all: 0, completed: 0, pending: 0 };

        const all = data.total || data.todos.length;
        const completed = data.todos.filter((t) => t.completed).length;
        const pending = data.todos.filter((t) => !t.completed).length;

        return { all, completed, pending };
    }, [data]);

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center max-w-md px-6">
                    <div className="text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Failed to Load Todos
                    </h2>
                    <p className="text-gray-600 mb-6">
                        {error instanceof Error ? error.message : 'An error occurred'}
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        📋 Todo Dashboard
                    </h1>
                    <p className="text-gray-600">
                        View and manage your tasks in a clear tabular format
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Actions Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    {/* Search Bar */}
                    <div className="w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search tasks..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-sm"
                            aria-label="Search todos"
                        />
                    </div>

                    {/* Tab Filter */}
                    <TabFilter
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                        counts={counts}
                    />
                </div>

                {/* Todo Table */}
                {isLoading ? (
                    <TodoTableSkeleton />
                ) : (
                    <TodoTable todos={filteredTodos} onViewDetails={setSelectedTodo} />
                )}
            </div>

            {/* Detail Modal */}
            <TodoDetailModal
                todo={selectedTodo}
                onClose={() => setSelectedTodo(null)}
            />
        </div>
    );
}
