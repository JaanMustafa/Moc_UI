interface BadgeProps {
    variant: 'success' | 'warning' | 'default';
    children: React.ReactNode;
}

export const Badge = ({ variant, children }: BadgeProps) => {
    const variantClasses = {
        success: 'bg-success-50 text-success-600 border-success-200',
        warning: 'bg-warning-50 text-warning-600 border-warning-200',
        default: 'bg-gray-100 text-gray-600 border-gray-200',
    };

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${variantClasses[variant]}`}>
            {children}
        </span>
    );
};
