function Pagination({totalProduct, setSelectedPage, selectedPage}) {
  const totalPage = Math.ceil(totalProduct/6)
  const handleSelectPage = (page) => {
    const newPage = page < 1 ? 1 : page > totalPage ? totalPage : page
    setSelectedPage(newPage)
  }

  const activePaginate = (index) => {
    return selectedPage === (index + 1) ? " paginate-active " : ""
  }
  return(
    <>
      <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" onClick={() => handleSelectPage(selectedPage - 1)} >
            Previous
          </a>
        </li>
        {[...Array(totalPage)].map((_,index)=>
          <li key={"paginate"+index} className="page-item">
            <a className={activePaginate(index) + "page-link"} onClick={() => handleSelectPage(index + 1)} href="#">{index + 1}</a>
          </li>
        )}
        <li className="page-item">
          <a className="page-link" href="#" onClick={() => handleSelectPage(selectedPage + 1)}>
            Next
          </a>
        </li>
      </ul>
      </nav>
    </>
  );
}

export default Pagination
