import { useEffect, useState } from "react";
import magnifyingGlass from "../assets/magnifying-glass.png";
import service from "../services/config.services";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function SearchPage() {
  const [searchValue, setSearchValue] = useState(""); // valor del input del searchBar
  const [usersResults, setUsersResults] = useState([]); // resultado de busqueda de Username

  useEffect(() => {
    let timer;

    if (searchValue !== "") {
      timer = setTimeout(() => {
        service
          .get(`/users?query=${searchValue}`)
          .then((response) => {
            return setUsersResults(response.data);
          })
          .catch((error) => {
            console.log(error)
          })
      }, 1000);
    } else {
      setUsersResults([])
    }

    return () => clearTimeout(timer);
  }, [searchValue]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <>
      <div className="search-container">
        <div className="search-bar-container">
          <button id="magnifying-glass-btn">
            <img
              src={magnifyingGlass}
              alt="Magnifying Glass"
              id="magnifying-glass-icon"
            />
          </button>
          <input id="search-input" type="text" value={searchValue} onChange={handleSearch} />
        </div>
        <div id="search-results">
          {usersResults.map((eachUser) => {
            return(
              <Link to={`/profile/${eachUser._id}/${eachUser.name}`} key={eachUser._id}>
                <p id="search-results-p">{eachUser.username}</p>
              </Link>
            );
          })}
        </div>
        <Navbar/>
      </div>
    </>
  );
}

export default SearchPage;
