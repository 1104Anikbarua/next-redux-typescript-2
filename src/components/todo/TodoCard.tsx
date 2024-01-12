import { ITodo, deleteTodo, setTodo } from "@/redux/features/todo/todoSlice";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";

const TodoCard = ({ id, title, description, isCompleted }: Partial<ITodo>) => {
  const dispatch = useAppDispatch();
  const handleChangeStatus = () => {
    dispatch(setTodo(id));
  };
  return (
    <div className="flex items-center justify-between rounded-md p-3 border border-gray-600">
      <input onChange={handleChangeStatus} type="checkbox" name="" id="" />
      <p className="text-xl font-medium text-gray-800 font-serif">{title}</p>
      {/* <p className="text-xl font-medium text-gray-800 font-serif">Time</p> */}

      <div>
        <p className={`${isCompleted ? "text-green-700" : "text-red-700"}`}>
          {isCompleted ? "Done" : "Pending"}
        </p>
      </div>
      <p className="text-xl font-medium text-gray-800 font-serif">
        {description}
      </p>
      <div className="space-x-5">
        <Button
          onClick={() => dispatch(deleteTodo(id))}
          className="bg-red-700 rounded text-gray-800 font-medium h-8 px-5 font-mono"
        >
          <svg
            className="size-5"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            ></path>
          </svg>
        </Button>
        <Button className="bg-black rounded text-white font-medium h-8 px-5 font-mono">
          <svg
            className="size-5"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
