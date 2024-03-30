import iconCross from '../../assets/icon-cross.svg';

interface Props {
  todo: any;
}

export default function TodoItem({ todo }: Props) {
  const { id, title, status } = todo;

  return (
    <div className="border-border bg-card flex select-none items-center gap-3 border-b px-5 py-4 first:rounded-t-md md:gap-6 md:px-6 md:py-5">
      <input type="checkbox" defaultChecked={status === 'completed'} />
      <label
        htmlFor={id}
        className={`text-text flex-1 text-xs md:text-lg ${
          status === 'completed' ? 'line-through opacity-25' : ''
        }`}
        onChange={() => {}}
      >
        {title}
      </label>
      <img
        src={iconCross}
        alt="delete"
        className="size-3 cursor-pointer md:size-4"
        onClick={() => {}}
      />
    </div>
  );
}
