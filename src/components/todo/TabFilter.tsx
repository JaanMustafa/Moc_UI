import type { TodoStatus } from '../../types/todoTypes';

interface TabFilterProps {
    activeTab: TodoStatus;
    onTabChange: (tab: TodoStatus) => void;
    counts: {
        all: number;
        completed: number;
        pending: number;
    };
}

export const TabFilter = ({ activeTab, onTabChange, counts }: TabFilterProps) => {
    const tabs: { key: TodoStatus; label: string; count: number }[] = [
        { key: 'all', label: 'All Todos', count: counts.all },
        { key: 'completed', label: 'Completed', count: counts.completed },
        { key: 'pending', label: 'Pending', count: counts.pending },
    ];

    return (
        <div className="flex gap-2 border-b border-gray-200">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    onClick={() => onTabChange(tab.key)}
                    className={`px-6 py-3 font-medium text-sm transition-all relative ${activeTab === tab.key
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                    aria-current={activeTab === tab.key ? 'page' : undefined}
                >
                    {tab.label}
                    <span
                        className={`ml-2 px-2 py-0.5 rounded-full text-xs ${activeTab === tab.key
                            ? 'bg-primary-100 text-primary-700'
                            : 'bg-gray-100 text-gray-600'
                            }`}
                    >
                        {tab.count}
                    </span>
                </button>
            ))}
        </div>
    );
};
