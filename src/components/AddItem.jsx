import React from "react";

function AddItem({ listAdditem, setEditMode }) {
  return (
    <div onClick={() => setEditMode(true)}>
      <p>+</p>
      <p>{listAdditem ? "Add a list" : "Add a task"}</p>
    </div>
  );
}

export default AddItem;
