import { useState } from "react";
import Card from "./Card";
import service from "../services/config.services";

function PostList(props) {
  const { postsCard, getData } = props;

  const [postToDelete, setPostToDelete] = useState(null);

  const deletePost = async () => {
    try {
      await service.delete(`/posts/${postToDelete}`);
      // console.log(`borrando`, postToDelete );

      // función para actualizar el estado local del componente padre
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  //! cambiar a clausula de loading normal
  if (postsCard.length === 0) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="posts-list-container">
        {postsCard.map((eachPost, i) => {
          return (
            <Card
              key={eachPost._id}
              eachPost={eachPost}
              getData={getData}
              setPostToDelete={setPostToDelete}
            />
          );
        })}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  ¿Are you sure?
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  className="btn btn-danger"
                  onClick={deletePost}
                  data-bs-dismiss="modal"
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostList;
