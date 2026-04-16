import { useState } from 'react';
import TodoInput from './TodoInput';

export default {
  title: 'Components/TodoInput',
  component: TodoInput,
};

// 実際の入力状態を再現するラッパー
const InteractiveTodoInput = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <TodoInput
      inputValue={inputValue}
      setInputValue={setInputValue}
      onAdd={() => alert(`「${inputValue}」を追加！`)}
    />
  );
};

export const Default = () => <InteractiveTodoInput />;

export const WithText = () => (
  <TodoInput
    inputValue="Storybookを完成させる"
    setInputValue={() => {}}
    onAdd={() => {}}
  />
);

export const Empty = () => (
  <TodoInput
    inputValue=""
    setInputValue={() => {}}
    onAdd={() => {}}
  />
);