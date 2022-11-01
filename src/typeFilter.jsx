function TypeFilter({types, selectedTypes, setSelectedTypes}) {

  const onChangeTypes = (id) => {
    if (selectedTypes.includes(id)) {
      const newSelectedType = selectedTypes.filter(item => item !== id)
      setSelectedTypes(newSelectedType)
    } else{
      const newSelectedType = [...selectedTypes, id]
      setSelectedTypes(newSelectedType)
    }
  }
  
  return (
    <>
      <li className="mb-1">
        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="/dashboard-collapse" aria-expanded="true">
          Types
        </button>
        <div className="collapse show" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          {types.map((type) => (
              <li key={'type-' + type.id.toString()} className="link-dark rounded" >
                <input type="checkbox" checked={selectedTypes.includes(type.id)} onChange={() => onChangeTypes(type.id)}/> {type.name} 
              </li>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
}

export default TypeFilter
