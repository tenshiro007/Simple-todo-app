import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";

// context
const TodoContext = createContext();


// reducer
const initialData = [
  {
    id: 1,
    text: "wake up",
  },
  {
    id: 2,
    text: "find something to eat",
  },
];

const TodoProvider=({children})=> {
    const [state, dispatch] = useReducer(reducer, initialData);
    
  const removeItem = (id) => {
    // console.log(id);
    dispatch({ type: "REMOVE", payload: id });
  }

  const addItem = (text) => {
    // console.log(text);
    dispatch({ type: "ADD", payload: text });
  };

  const updateItem = (id,text) => {
    console.log(id, text);
    dispatch({ type: "UPDATE", payload: {id,text} });
  }

    return (
      <TodoContext.Provider
        value={{ data: state, removeItem, addItem, updateItem }}
      >
        {children}
      </TodoContext.Provider>
    );
}

const MyTodoContext = () => {
    return useContext(TodoContext)
}

export { TodoProvider, MyTodoContext };
