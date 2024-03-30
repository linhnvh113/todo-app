import iconCross from '../../assets/icon-cross.svg';
import useTodoStore, { Todo } from '../../hooks/use-todo-store';
import { Checkbox } from '../checkbox';

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const { id, title, status } = todo;
  const { update, remove } = useTodoStore();

  return (
    <div className="border-border bg-card flex select-none items-center gap-3 border-b px-5 py-4 first:rounded-t-md md:gap-6 md:px-6 md:py-5">
      <Checkbox
        id={id}
        checked={status === 'completed'}
        onCheckedChange={() => update(id)}
      />
      <label
        htmlFor={id}
        className={`text-text flex-1 text-xs md:text-lg ${
          status === 'completed' ? 'line-through opacity-25' : ''
        }`}
      >
        {title}
      </label>
      <button type="button" onClick={() => remove(id)}>
        <img
          src={iconCross}
          alt="delete"
          className="size-3 cursor-pointer md:size-4"
        />
      </button>
    </div>
  );
}
