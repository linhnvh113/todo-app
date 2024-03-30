import useTodoStore from '../../hooks/use-todo-store';
import TodoFilter from './todo-filter';
import TodoItem from './todo-item';
import TodoStats from './todo-stats';

export default function TodoList() {
  const { todoList, filter } = useTodoStore();

  const getQty = () => {
    return todoList.filter((todo) => todo.status === 'active').length;
  };

  const dataByStatus = () => {
    if (filter === 'all') return todoList;
    return todoList.filter((todo) => todo.status === filter);
  };

  return (
    <>
      <div className="border-card bg-card rounded-md border shadow-md">
        {dataByStatus().map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
        <TodoStats qty={getQty()} />
      </div>
      <div className="bg-card text-text flex items-center justify-center gap-5 rounded-md py-4 text-sm font-bold shadow-md md:hidden">
        <TodoFilter />
      </div>
    </>
  );
}
