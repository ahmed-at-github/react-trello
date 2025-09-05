import React from "react";

function AddItem({ listAdditem, setEditMode }) {
  return (
    <div onClick={() => setEditMode(true)}>
      <button>{listAdditem ? "Add a list" : "Add a task"}</button>
    </div>
  );
}

export default AddItem;
