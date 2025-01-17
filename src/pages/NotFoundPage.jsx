import error404 from "../assets/404_page-not-found.png"

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <img id="error-not-found-img" src={error404} />
    </div>
  );
}

export default NotFoundPage;