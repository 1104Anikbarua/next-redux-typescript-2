import { createSlice } from "@reduxjs/toolkit";

interface ITodo {
  task: string;
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
      state.todos.push({ ...payload, isCompleted: false });
    },
    updateTodo: (state) => {
      console.log(state);
    },
    deleteTodo: (state) => {
      console.log(state);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
