function SortField({selectedSort, setSelectedSort}) {
  const handleSelectedSort = (e) => {
    setSelectedSort(e.target.value);
  }
  return(
    <div className="mb-3 row">
      <label className="col-form-label col-sm-2">Sort by</label>
      <div className="col-sm-10">
        <select className="form-select" value={selectedSort} onChange={handleSelectedSort}>
          <option value="asc">price: asc</option>
          <option value="desc">price: desc</option>
        </select>
      </div>
    </div>
  );
}

export default SortField
