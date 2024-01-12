import { createSlice } from "@reduxjs/toolkit";

export interface ITodo {
  // id: number;
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

type TTodo = {
  todos: ITodo[];
};

const initialState: TTodo = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      // if (state.todos.length === 0) {
      //   state.todos.push({ ...payload, id: 1, isCompleted: false });
      // } else {
      //   const element = state.todos.at(-1);
      //   state.todos.push({
      //     ...payload,
      //     id: 1 + element?.id,
      //     isCompleted: false,
      //   });
      // }
      state.todos.push({ ...payload, isCompleted: false });
    },

    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    setTodo: (state, { payload }) => {
      const task = state.todos.find((todo) => todo.id === payload);
      task!.isCompleted = !task?.isCompleted;
    },
  },
});

export const { addTodo, setTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
