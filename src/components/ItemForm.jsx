import React from "react";

function ItemForm({
  listForm,
  submitHandler,
  title,
  onChangeHandler,
  setEditMode,
}) {
  return (
    <div>
      <form>
        <textarea
          placeholder={
            listForm ? "Enter the list title" : "Enter a title for a task"
          }
          value={title}
          onChange={onChangeHandler}
          cols="30"
          rows="2"
        ></textarea>
      </form>
      <button>
        {listForm ? "Add list" : "Add task"}
        <p onClick={() => setEditMode(false)}>X</p>
      </button>
    </div>
  );
}

export default ItemForm;
