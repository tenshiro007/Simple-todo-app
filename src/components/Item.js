import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Item = ({ id, text, removeItem, handleUPdate }) => {
  return (
    <div className="item">
      <p>{text}</p>
      <div className="button-manage">
        <button onClick={()=>handleUPdate(id,text)}>
          <AiFillEdit />
        </button>
        <button onClick={() => removeItem(id)}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default Item;
