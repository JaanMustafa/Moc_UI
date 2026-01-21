export const TodoCardSkeleton = () => (
    <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="animate-shimmer h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
        <div className="animate-shimmer h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="animate-shimmer h-6 bg-gray-200 rounded w-24"></div>
    </div>
);

export const TodoGridSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
            <TodoCardSkeleton key={i} />
        ))}
    </div>
);

export const TodoTableSkeleton = () => (
    <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {['Status', 'Task Description', 'Action'].map((head) => (
                        <th key={head} className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                            {head}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {Array.from({ length: 8 }).map((_, i) => (
                    <tr key={i}>
                        <td className="px-6 py-4">
                            <div className="animate-shimmer h-6 bg-gray-200 rounded w-20"></div>
                        </td>
                        <td className="px-6 py-4">
                            <div className="animate-shimmer h-5 bg-gray-200 rounded w-3/4"></div>
                        </td>
                        <td className="px-6 py-4 text-right">
                            <div className="animate-shimmer h-9 bg-gray-200 rounded w-28 ml-auto"></div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
