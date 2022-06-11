function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Resturant App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Book
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Price: High - Low
                </a>
                <a className="dropdown-item" href="#">
                  Price: Low - High
                </a>
                <a className="dropdown-item" href="#">
                  Veg
                </a>
                <a className="dropdown-item" href="#">
                  Non-veg
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control input-sm"
              id="inputsm"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-3 my-sm-2"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
