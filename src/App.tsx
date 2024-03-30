import Header from './components/header';
import TodoForm from './components/todo/todo-form';
import TodoList from './components/todo/todo-list';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container space-y-4 md:space-y-6">
          <TodoForm />
          <TodoList />
        </div>

        <p className="text-text mt-10 text-center text-sm md:mt-12">
          Drag and drop to reorder list
        </p>
      </main>
    </div>
  );
}
