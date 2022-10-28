function CategoryFilter({categories, selectedCategory, setSelectedCategory, isActive}){
  const onChangeCategory = (id) => {
    const newSelectedCategory = selectedCategory === id ? [] : id
    setSelectedCategory(newSelectedCategory)
  }

  return(
    <>
      <li className="mb-1">
        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="/home-collapse" aria-expanded="true">
          Categories
        </button>
        <div className="collapse show" id="home-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          {categories.map((category) => (
              <li key={'category-' + category.id.toString()} onClick={() => onChangeCategory(category.id)} className={"link-dark rounded " + isActive(category.id, selectedCategory)} >{category.title}
              </li>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
}

export default CategoryFilter
