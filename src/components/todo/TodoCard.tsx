import {
  // ITodo,
  // deleteTodo,
  setTodo,
} from "@/redux/features/todo/todoSlice";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { useDeleteTodoMutation } from "@/api/api";

export type TTodo = {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: string;
};

const TodoCard = ({
  _id: id,
  title,
  description,
  isCompleted,
  priority,
}: Partial<TTodo>) => {
  // for local state
  const dispatch = useAppDispatch();
  const handleChangeStatus = () => {
    // for local state
    dispatch(setTodo(id));
  };

  const [deleteTodo, { isLoading }] = useDeleteTodoMutation();

  return (
    <div className="flex items-center justify-between rounded-md p-3 border border-gray-600">
      <input
        className="mr-2"
        onChange={handleChangeStatus}
        type="checkbox"
        name=""
        id=""
      />
      <p className="flex-1 text-xl font-medium text-gray-800 font-serif">
        {title}
      </p>

      <div className="flex items-center flex-1">
        <p
          className={`size-5 rounded-full mr-1
      ${priority === "High" ? "bg-red-600" : ""}
      ${priority === "Medium" ? "bg-yellow-600" : ""}
      ${priority === "Low" ? "bg-green-600" : ""}
      
      `}
        ></p>
        <p className="text-lg font-mono">{priority}</p>
      </div>
      <p
        className={`flex-1 ${isCompleted ? "text-green-700" : "text-red-700"}`}
      >
        {isCompleted ? "Done" : "Pending"}
      </p>

      <p className="flex-1 text-xl font-medium text-gray-800 font-serif">
        {description}
      </p>
      <div className="space-x-5">
        <Button
          // onClick={() => dispatch(deleteTodo(id))}
          onClick={() => deleteTodo(id)}
          className="bg-red-700 rounded font-medium h-8 px-5 font-mono"
        >
          {isLoading ? (
            <svg
              className="animate-spin text-white size-5"
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
                d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              ></path>
            </svg>
          ) : (
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
          )}
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
