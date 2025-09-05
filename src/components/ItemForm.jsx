import React from "react";

function ItemForm({
  listForm,
  handleOnSubmit,
  title,
  handleOnChange,
  setEditMode,
}) {
  return (
    <div>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <textarea
          placeholder={
            listForm ? "Enter the list title" : "Enter a title for a task"
          }
          value={title}
          onChange={handleOnChange}
          cols="30"
          rows="2"
        ></textarea>
      </form>
      <button onClick={(e) => handleOnSubmit(e)}>
        {listForm ? "Add list" : "Add/Update task"}
      </button>
      <button
         onClick={() => setEditMode(false)}>X
      </button>
    </div>
  );
}

export default ItemForm;
