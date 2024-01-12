const TodoCard = () => {
  return (
    <div className="flex items-center justify-between rounded-md p-3 border border-gray-600">
      <input type="checkbox" name="" id="" />
      <p className="text-xl font-medium text-white font-serif">Todo Title</p>
      <p className="text-xl font-medium text-white font-serif">Time</p>
      <p className="text-xl font-medium text-white font-serif">Description</p>
      <div className="space-x-5">
        <button className="bg-red-700 rounded text-white font-medium h-8 px-5 font-mono">
          Delete
        </button>
        <button className="bg-black rounded text-white font-medium h-8 px-5 font-mono">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
