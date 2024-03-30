import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import useTodoStore from '../../hooks/use-todo-store';
import TodoFilter from './todo-filter';
import TodoItem from './todo-item';
import TodoStats from './todo-stats';

export default function TodoList() {
  const { todoList, filter, setTodoList } = useTodoStore();

  const getQty = () => {
    return todoList.filter((todo) => todo.status === 'active').length;
  };

  const dataByStatus = () => {
    if (filter === 'all') return todoList;
    return todoList.filter((todo) => todo.status === filter);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const [reorderItem] = todoList.splice(result.source.index, 1);
    todoList.splice(result.destination.index, 0, reorderItem);

    setTodoList(todoList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todoList">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="border-card bg-card rounded-md border shadow-md"
          >
            {dataByStatus().map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TodoItem todo={todo} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            <TodoStats qty={getQty()} />
          </div>
        )}
      </Droppable>

      <div className="bg-card text-text flex items-center justify-center gap-5 rounded-md py-4 text-sm font-bold shadow-md md:hidden">
        <TodoFilter />
      </div>
    </DragDropContext>
  );
}
