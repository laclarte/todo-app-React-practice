import Button from "./Button";

function TodoInput({ inputValue, setInputValue, onAdd }) {
  return (
    <div className="flex w-full max-w-140">
      <div className="flex w-full items-center p-2 pl-0 my-6">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-white text-slate-800 text-lg w-full py-3 px-4 mr-3 rounded-md"
        />
        <Button onClick={onAdd} variant="add">追加</Button>
      </div>
    </div>
  );
}

export default TodoInput;