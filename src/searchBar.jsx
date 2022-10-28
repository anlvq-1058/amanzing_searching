function SearchBar({term, onChangeTerm}) {
  const handleSearch = (e) => {
    onChangeTerm(e.target.value)
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">Amazing</a>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={term} onChange={handleSearch}/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default SearchBar;
