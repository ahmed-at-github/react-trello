import React from "react";

function AddItem({ listAdditem, setEditMode }) {
  return (
    <div onClick={() => setEditMode(true)}>
      <button>+</button>
      <p>{listAdditem ? "Add a list" : "Add a task"}</p>
    </div>
  );
}

export default AddItem;
