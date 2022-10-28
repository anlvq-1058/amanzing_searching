import { useEffect, useState } from "react"

function BrandFilter({brands, setBrands, selectedBrand, setSelectedBrand, isActive}) {
  const [term, setTerm] = useState('')
  const handleSelectBrand = (id) => {
    const newSelectedBrand = selectedBrand === id ? [] : id
    setSelectedBrand(newSelectedBrand)
  }
  
  const handleSearch = (e) => {
    setTerm(e.target.value)
  }

  useEffect(()=>{
    fetch(`http://localhost:3000/brands?name_like=${term}`)
    .then(res => res.json())
    .then(brands => {setBrands(brands)})
  },[term])

  return(
    <li className="mb-1">
      <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="/orders-collapse" aria-expanded="false">
        Brands
      </button>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={term} onChange={handleSearch}/>
      </form>
      <div className="collapse show" id="orders-collapse">
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          {brands.map((brand) => (
            <li key={'brand-' + brand.id.toString()} onClick={() => handleSelectBrand(brand.id)} className={"link-dark rounded " + isActive(brand.id, selectedBrand)}>
              {brand.name}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default BrandFilter
