import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Todo {
  id: string;
  title: string;
  status: string;
}

export interface TodoState {
  todoList: Todo[];
  filter: string;
  setTodoList: (todoList: Todo[]) => void;
  setFilter: (status: string) => void;
  add: (title: string) => void;
  update: (id: string) => void;
  remove: (id: string) => void;
  clearCompleted: () => void;
}

const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todoList: [],
      filter: 'all',

      setTodoList: (todoList: Todo[]) => set({ todoList }),

      setFilter: (status: string) => set({ filter: status }),

      add: (title: string) =>
        set((state) => ({
          todoList: [
            ...state.todoList,
            {
              id: Date.now().toString(),
              title,
              status: 'active',
            },
          ],
        })),

      update: (id: string) =>
        set((state) => ({
          todoList: state.todoList.map((todo) =>
            todo.id === id
              ? {
                  ...todo,
                  status: todo.status === 'active' ? 'completed' : 'active',
                }
              : todo,
          ),
        })),

      remove: (id: string) =>
        set((state) => ({
          todoList: state.todoList.filter((todo) => todo.id !== id),
        })),

      clearCompleted: () =>
        set((state) => ({
          todoList: state.todoList.filter(
            (todo) => todo.status !== 'completed',
          ),
        })),
    }),
    {
      name: 'todoStore',
    },
  ),
);

export default useTodoStore;
