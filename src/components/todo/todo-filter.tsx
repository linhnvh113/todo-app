import { TODO_STATUS } from '../../constants';
import useTodoStore from '../../hooks/use-todo-store';

export default function TodoFilter() {
  const { filter, setFilter } = useTodoStore();

  return (
    <>
      {TODO_STATUS.map((status) => (
        <button
          key={status.value}
          type="button"
          onClick={() => setFilter(status.value)}
        >
          <span
            className={`cursor-pointer text-sm font-bold ${
              status.value === filter
                ? 'text-blue-600'
                : 'text-text/70 hover:opacity-100'
            }`}
          >
            {status.label}
          </span>
        </button>
      ))}
    </>
  );
}
