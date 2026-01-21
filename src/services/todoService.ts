import api from './api';
import type { Todo, TodosResponse, CreateTodoRequest, UpdateTodoRequest } from '../types/todoTypes';

export const todoService = {
    /**
     * Get all todos with pagination
     * @param limit - Number of items to fetch (default: 0 for all)
     * @param skip - Number of items to skip (default: 0)
     */
    getAllTodos: async (limit = 0, skip = 0): Promise<TodosResponse> => {
        const { data } = await api.get<TodosResponse>('/todos', {
            params: { limit, skip },
        });
        return data;
    },

    /**
     * Get a single todo by ID
     */
    getTodoById: async (id: number): Promise<Todo> => {
        const { data } = await api.get<Todo>(`/todos/${id}`);
        return data;
    },

    /**
     * Get random todo(s)
     * @param count - Number of random todos (max 10, default: 1)
     */
    getRandomTodos: async (count = 1): Promise<Todo | Todo[]> => {
        const endpoint = count > 1 ? `/todos/random/${count}` : '/todos/random';
        const { data } = await api.get(endpoint);
        return data;
    },

    /**
     * Get all todos by user ID
     */
    getTodosByUserId: async (userId: number): Promise<TodosResponse> => {
        const { data } = await api.get<TodosResponse>(`/todos/user/${userId}`);
        return data;
    },

    /**
     * Add a new todo (simulated - doesn't persist on server)
     */
    createTodo: async (todo: CreateTodoRequest): Promise<Todo> => {
        const { data } = await api.post<Todo>('/todos/add', todo);
        return data;
    },

    /**
     * Update a todo (simulated - doesn't persist on server)
     * @param method - 'PUT' or 'PATCH'
     */
    updateTodo: async (
        id: number,
        updates: UpdateTodoRequest,
        method: 'PUT' | 'PATCH' = 'PATCH'
    ): Promise<Todo> => {
        const { data } = await api.request<Todo>({
            method,
            url: `/todos/${id}`,
            data: updates,
        });
        return data;
    },

    /**
     * Delete a todo (simulated - doesn't persist on server)
     */
    deleteTodo: async (id: number): Promise<Todo & { isDeleted: true; deletedOn: string }> => {
        const { data } = await api.delete(`/todos/${id}`);
        return data;
    },
};
