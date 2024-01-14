// import { Button } from "../ui/button";
// import { useAppSelector } from "@/redux/hooks";
import { useGetTodosQuery } from "@/api/api";
import AddTodoModal from "./AddTodoModal";
import FilterTodo from "./FilterTodo";
import TodoCard, { TTodo } from "./TodoCard";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";

const TodoContainer = () => {
  const [priority, setPriority] = useState("Low");
  // const { todos } = useAppSelector((state) => state.todo);
  const { isLoading, data } = useGetTodosQuery(undefined);
  return (
    <div className="mt-1">
      <div className="flex justify-between mb-5">
        {/* <Button className="bg-primary-gradient text-xl font-medium font-serif">
          Add Todo
        </Button> */}
        <AddTodoModal />
        {/* <Button className="bg-primary-gradient text-xl font-medium font-serif">
          Filter Todo
        </Button> */}
        <FilterTodo priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full mt-1 rounded-md p-[5px] space-y-5">
        {/* <div className="bg-white p-3 text-center font-semibold text-2xl font-mono">
          No Todo Remaining
        </div> */}

        {isLoading ? (
          <div className="flex items-center justify-center">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ) : (
          <div className="bg-white w-full h-full space-y-3 p-1 rounded-md">
            {data["data"]?.map((todo: TTodo) => (
              <TodoCard {...todo} key={todo?._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
