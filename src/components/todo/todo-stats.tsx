import useTodoStore from '../../hooks/use-todo-store';
import TodoFilter from './todo-filter';

interface Props {
  qty: number;
}

export default function TodoStats({ qty }: Props) {
  const { clearCompleted } = useTodoStore();

  return (
    <div className="text-text flex items-center justify-between px-5 py-4 text-xs md:px-6 md:text-sm">
      <p>{`${qty} items left`}</p>
      <div className="hidden items-center justify-center gap-5 md:flex">
        <TodoFilter />
      </div>
      <button
        className="text-text cursor-pointer opacity-70 hover:opacity-100"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </div>
  );
}
