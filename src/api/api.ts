import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({ url: "/todos", method: "GET" }),
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/addTodo",
        method: "POST",
        body: todo,
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = todoApi;
