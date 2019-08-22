
export const allTodos = (state) => {
    const todos = state.getState().todos;
    return Object.values(todos);
}

