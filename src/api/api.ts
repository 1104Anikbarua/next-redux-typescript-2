import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({ url: "/todos", method: "GET" }),
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (todo) => {
        return {
          url: "/addTodo",
          method: "POST",
          body: todo,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = todoApi;
