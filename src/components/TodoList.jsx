import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete, onReorder }) {
  const [activeId, setActiveId] = useState(null);
  const activeTodo = todos.find((t) => t.id === activeId);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveId(null);
    if (!over || active.id === over.id) return;

    const oldIndex = todos.findIndex((t) => t.id === active.id);
    const newIndex = todos.findIndex((t) => t.id === over.id);
    onReorder(arrayMove(todos, oldIndex, newIndex));
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={todos.map((t) => t.id)} strategy={verticalListSortingStrategy}>
        <ul className="flex flex-col justify-stretch items-stretch w-full max-w-140 py-10 gap-4 mb-auto">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              isDragOverlay={false}
            />
          ))}
        </ul>
      </SortableContext>

      {/* ドラッグ中のアイテムを別レイヤーで描画 */}
      <DragOverlay dropAnimation={null}>
        {activeTodo ? (
          <TodoItem
            todo={activeTodo}
            onToggle={() => {}}
            onDelete={() => {}}
            isDragOverlay={true}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

export default TodoList;