/**
 * Single Todo item as returned by the API
 */
export interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

/**
 * Response from GET /todos endpoint (with pagination)
 */
export interface TodosResponse {
    todos: Todo[];
    total: number;
    skip: number;
    limit: number;
}

/**
 * Extended Todo with deletion info (returned from DELETE)
 */
export interface DeletedTodo extends Todo {
    isDeleted: true;
    deletedOn: string;
}

/**
 * Request payload for creating a new todo
 */
export interface CreateTodoRequest {
    todo: string;
    completed: boolean;
    userId: number;
}

/**
 * Request payload for updating a todo (all fields optional)
 */
export interface UpdateTodoRequest {
    todo?: string;
    completed?: boolean;
    userId?: number;
}

/**
 * Filter state for UI
 */
export type TodoStatus = 'completed' | 'pending' | 'all';

export interface TodoFilters {
    status: TodoStatus;
    searchQuery?: string;
    userId?: number;
}

/**
 * Pagination params
 */
export interface PaginationParams {
    limit: number;
    skip: number;
}
