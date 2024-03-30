import { useState } from 'react';

export default function TodoForm() {
  const [title, setTitle] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setTitle('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="bg-card flex items-center gap-3 rounded-md px-5 py-3.5 md:gap-6 md:px-6 md:py-5">
        <button
          type="submit"
          className="border-border size-5 rounded-full border md:size-6"
        />
        <input
          className="text-text flex-1 bg-transparent text-xs outline-none md:text-lg"
          value={title}
          placeholder="Create a new todo"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </form>
  );
}
