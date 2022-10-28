import './App.css';
import BrandFilter from './brandFilter';
import CategoryFilter from './categoryFilter';
import PriceFilter from './priceFilter';
import TypeFilter from './typeFilter';

function SideBar({categories,
                  selectedCategory,
                  setSelectedCategory,
                  types,
                  selectedTypes,
                  setSelectedTypes,
                  prices,
                  setPrices,
                  brands,
                  setBrands,
                  selectedBrand,
                  setSelectedBrand}) {

  const isActive = (selectedElement, element) => {
    return element === selectedElement ? 'active' : ''
  }

  return (
      <div className="flex-shrink-0 p-3 bg-white">
        <ul className="list-unstyled ps-0">

          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            isActive={isActive}
          />

          <TypeFilter
            types={types}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />

          <PriceFilter 
            prices={prices}
            setPrices={setPrices}
            isActive={isActive}
          />
          <BrandFilter
            brands={brands}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            setBrands={setBrands}
            isActive={isActive}
          />
        </ul>
      </div>
  );
}

export default SideBar;
