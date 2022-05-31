import logo from './logo.svg';
import './App.css';
import {useState,useEffect,useContext}from 'react'
import Item from './components/Item';
import { MyTodoContext } from './servers/context';
import { BiAddToQueue } from "react-icons/bi";

function App() {
  const { data, removeItem, addItem, updateItem } = MyTodoContext();
  const [message, setMessage] =useState('')
  const [isUpdate, setIsUpdate] = useState(false)
  const [temp, setTemp] = useState({
    id:0,
    text:''
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isUpdate) {
      updateItem(temp.id, message);
      setIsUpdate(false);
      setMessage('')
    } else {
      addItem(message)
      setMessage('')
    }
  }

  const handleUPdate = (id,text) => {
    setIsUpdate(true)
    setMessage(text)
    setTemp({
      id: id,
      text:text
    })
  }

  
  return (
    <div className="app">
      <h1>Todo App</h1>
      <form action="" className="form-group" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          id=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {/* <button type="submit"><BiAddToQueue/></button> */}
      </form>
      {data.map((i, idx) => {
        return (
          <Item
            key={idx}
            {...i}
            removeItem={removeItem}
            handleUPdate={handleUPdate}
          />
        );
      })}
    </div>
  );
}

export default App;
