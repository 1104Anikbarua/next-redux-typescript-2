// import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import FilterTodo from "./FilterTodo";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todo);
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
        <FilterTodo />
      </div>
      <div className="bg-primary-gradient w-full h-full mt-1 rounded-md p-[5px] space-y-5">
        {/* <div className="bg-white p-3 text-center font-semibold text-2xl font-mono">
          No Todo Remaining
        </div> */}

        <div className="bg-white w-full h-full space-y-3 p-1 rounded-md">
          {todos?.map((todo) => (
            <TodoCard {...todo} key={todo?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
