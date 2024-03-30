import TodoFilter from './todo-filter';
import TodoItem from './todo-item';
import TodoStats from './todo-stats';

export default function TodoList() {
  const todoList = [
    {
      id: '1',
      title: 'todo 1',
      status: 'completed',
    },
    {
      id: '2',
      title: 'todo 2',
      status: 'active',
    },
    {
      id: '3',
      title: 'todo 3',
      status: 'active',
    },
  ];

  return (
    <>
      <div className="border-card bg-card rounded-md border shadow-md">
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
        <TodoStats qty={5} />
      </div>
      <div className="bg-card text-text flex items-center justify-center gap-5 rounded-md py-4 text-sm font-bold shadow-md md:hidden">
        <TodoFilter />
      </div>
    </>
  );
}
