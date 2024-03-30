import { TODO_STATUS } from '../../constants';

export default function TodoFilter() {
  return (
    <>
      {TODO_STATUS.map((status) => (
        <span
          key={status.value}
          className={`cursor-pointer text-sm font-bold`}
          onClick={() => {}}
        >
          {status.label}
        </span>
      ))}
    </>
  );
}
