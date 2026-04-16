import { DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import TodoItem from './TodoItem';

const sampleTodo = {
  id: '1',
  text: 'Storybookを導入する',
  completed: false,
};

const completedTodo = {
  id: '2',
  text: '完了したタスク',
  completed: true,
};

// DnDコンテキストでラップするデコレーター
const withDnd = (Story) => (
  <DndContext>
    <SortableContext items={['1']}>
      <ul style={{ listStyle: 'none', padding: '16px', width: '400px' }}>
        <Story />
      </ul>
    </SortableContext>
  </DndContext>
);

export default {
  title: 'Components/TodoItem',
  component: TodoItem,
  decorators: [withDnd],
};

export const Default = () => (
  <TodoItem
    todo={sampleTodo}
    onToggle={() => {}}
    onDelete={() => {}}
  />
);

export const Completed = () => (
  <TodoItem
    todo={completedTodo}
    onToggle={() => {}}
    onDelete={() => {}}
  />
);

export const DragOverlay = () => (
  <TodoItem
    todo={sampleTodo}
    onToggle={() => {}}
    onDelete={() => {}}
    isDragOverlay={true}
  />
);