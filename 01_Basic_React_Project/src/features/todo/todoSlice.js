import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "Hello, world" }
  ],
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter(todo => todo.id !== id);
    }
  }
});

export const { addTodo, removeTodo } = todoSlice.actions;

console.log(todoSlice.actions);

export default todoSlice.reducer;