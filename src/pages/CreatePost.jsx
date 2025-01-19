function CreatePost() {
  return (
    <div className="create-post-container">
      <h1 className="basic-title-layout">Create your Post</h1>
      <form className="general-form-app">
        <div class="mb-3">
          <label for="formFile" class="form-label">
            ¡Sube aqui la imagen que deseas compartir!
          </label>
          <input class="form-control" type="file" id="formFile" />
        </div>
        <div className="location-input-container">
          <label for="exampleDataList" class="form-label">
            Localización:
          </label>
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            <option value="Mallorca, España" />
            <option value="Madrid, España" />
            <option value="Barcelona, España" />
            <option value="Bournemouth, Inglaterra" />
            <option value="Rio de Janeiro, Brasil" />
          </datalist>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Comparte tus ideas con una descripción:
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="form-control-btns">
          <button type="button" class="btn btn-outline-success">
            ¡Create!
          </button>
          <button type="button" class="btn btn-outline-danger">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
