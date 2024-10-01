function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-6">
          <input type="text" name="text" />
        </div>
        <div class="col-4">
          <input type="date" name="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kg-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;