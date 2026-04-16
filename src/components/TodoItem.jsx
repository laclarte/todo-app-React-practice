import { Check } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Button from "./Button";

function TodoItem({ todo, onToggle, onDelete, isDragOverlay }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: todo.id });

  const style = isDragOverlay
    ? {
        rotate: "2deg",
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      }
    : {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0 : 1, // 元の位置は透明にして穴を維持
      };

  return (
    <li
      ref={isDragOverlay ? undefined : setNodeRef}
      style={style}
      className={`flex items-center w-full border border-neutral-100 rounded-lg p-2.5 pl-3 shadow-sm
        ${todo.completed ? "bg-white/35" : "bg-white/85"}
      `}
    >
      {/* ドラッグハンドル */}
      <button
        {...(isDragOverlay ? {} : { ...attributes, ...listeners })}
        className="flex-shrink-0 flex flex-col gap-0.5 mr-2 px-0.5 py-1 cursor-grab active:cursor-grabbing opacity-30 hover:opacity-60 transition-opacity"
      >
        {[...Array(3)].map((_, i) => (
          <span key={i} className="block w-3 h-0.5 bg-neutral-500 rounded-full" />
        ))}
      </button>

      {/* チェックボックス風ボタン */}
      <button
        onClick={() => onToggle(todo.id)}
        className={`
          flex-shrink-0 w-5 h-5 rounded mr-3 flex items-center justify-center
          ${todo.completed
            ? "bg-p-green-500/30"
            : "bg-slate-50 border-2 border-slate-100"
          }
        `}
      >
        <Check
          size={13}
          strokeWidth={3}
          className={`text-white transition-all duration-200 ease-in-out ${
            todo.completed ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
      </button>

      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          textDecorationColor: todo.completed ? "rgba(0,0,0,0.3)" : "transparent",
          textDecorationThickness: todo.completed ? "2px" : "auto",
          opacity: todo.completed ? 0.4 : 1,
          cursor: "pointer",
        }}
        className="text-left mr-auto text-neutral-800 pr-2"
      >
        {todo.text}
      </span>

      <Button onClick={() => onDelete(todo.id)} variant="delete">削除</Button>
    </li>
  );
}

export default TodoItem;