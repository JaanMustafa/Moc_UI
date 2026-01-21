import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { todoService } from '../services/todoService';
import type { TodoStatus, CreateTodoRequest, UpdateTodoRequest } from '../types/todoTypes';

/**
 * Hook to fetch todos with optional filtering and pagination
 */
export const useTodos = (
    status?: TodoStatus,
    limit = 0,
    skip = 0
) => {
    return useQuery({
        queryKey: ['todos', status, limit, skip],
        queryFn: async () => {
            const response = await todoService.getAllTodos(limit, skip);

            // Filter by status if needed (client-side filtering)
            if (status === 'completed') {
                return {
                    ...response,
                    todos: response.todos.filter((todo) => todo.completed),
                };
            } else if (status === 'pending') {
                return {
                    ...response,
                    todos: response.todos.filter((todo) => !todo.completed),
                };
            }

            return response;
        },
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: 2,
    });
};

/**
 * Hook to fetch a single todo by ID
 */
export const useTodoDetail = (id: number) => {
    return useQuery({
        queryKey: ['todo', id],
        queryFn: () => todoService.getTodoById(id),
        enabled: !!id && id > 0,
        retry: 1,
    });
};

/**
 * Hook to fetch todos by user ID
 */
export const useTodosByUser = (userId: number) => {
    return useQuery({
        queryKey: ['todos', 'user', userId],
        queryFn: () => todoService.getTodosByUserId(userId),
        enabled: !!userId && userId > 0,
    });
};

/**
 * Hook to create a new todo
 */
export const useCreateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (todo: CreateTodoRequest) => todoService.createTodo(todo),
        onSuccess: () => {
            // Invalidate todos list to refetch
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });
};

/**
 * Hook to update a todo
 */
export const useUpdateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            id,
            updates,
            method = 'PATCH'
        }: {
            id: number;
            updates: UpdateTodoRequest;
            method?: 'PUT' | 'PATCH';
        }) => todoService.updateTodo(id, updates, method),
        onSuccess: (_data, variables) => {
            // Invalidate todos list and specific todo
            queryClient.invalidateQueries({ queryKey: ['todos'] });
            queryClient.invalidateQueries({ queryKey: ['todo', variables.id] });
        },
    });
};

/**
 * Hook to delete a todo
 */
export const useDeleteTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => todoService.deleteTodo(id),
        onSuccess: () => {
            // Invalidate todos list to refetch
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });
};
