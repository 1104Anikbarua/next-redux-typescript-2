import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
// import { useAppDispatch } from "@/redux/hooks";
// import { addTodo } from "@/redux/features/todo/todoSlice";
import { useAddTodoMutation } from "@/api/api";

const AddTodoModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // use on local state
  // const dispatch = useAppDispatch();
  const [
    addTodo,
    { isError, isLoading, isSuccess, isUninitialized, error, data },
  ] = useAddTodoMutation();

  console.log({ isError, isLoading, isSuccess, isUninitialized, error, data });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTitle(title);
    setDescription(description);
    // use on local state
    // const id = Math.random().toString(36).substring(2, 7);
    const todo = {
      // because mongodb automatically generate a id for us in the server
      // id,
      title,
      description,
    };
    // use on local state
    // dispatch(addTodo(todo));

    // send todo data to the server
    addTodo(todo);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-medium font-serif">
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>Please Add Your Task</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTitle(e.target.value)}
                id="title"
                name="title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                name="description"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
