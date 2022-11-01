import { useEffect, useState } from "react";
import ProductTable from "./productTable";
import SearchBar from "./searchBar";
import SideBar from "./sideBar";
import SortField from "./sort_field";

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [types, setTypes] = useState([])
  const [selectedTypes, setSelectedType] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])
  const [term, setTerm] = useState('')
  const [prices, setPrices] = useState([])
  const [selectedSort, setSelectedSort] = useState('asc')
  const [selectedPage, setSelectedPage] = useState(1)
  const [totalProduct, setTotalProduct] = useState('')
  const [brands, setBrands] = useState([])
  const [selectedBrand, setSelectedBrand] = useState([])
  const debouncedSearchTerm = useDebounce(term, 500);

  useEffect(() => {
    const name = debouncedSearchTerm === '' ? '' : `name_like=${debouncedSearchTerm}&`;
    const type = selectedTypes.length === 0 ? '' : typesPrameter(selectedTypes);
    const category = selectedCategory.length === 0 ? '' : `category=${selectedCategory}&`;
    const price = prices.length === 0 ? '' : `price_gte=${prices[0]}&price_lte=${prices[1]}&`;
    const sort = `_sort=price&_order=${selectedSort}&`
    const paginate = `_page=${selectedPage}&_limit=6&`
    const brand = selectedBrand.length === 0 ? '' : `brand=${selectedBrand}&`
    const url = 'http://localhost:3000/products?' + [name, type, category,  price,  sort,  brand, paginate].join('');

    fetch(url)
    .then((res) => {
      setTotalProduct(res.headers.get('x-total-count'))
      return res.json()
    }).then((product) => {
      setProducts(product)
    })
  }, [
    debouncedSearchTerm,
    selectedTypes,
    selectedCategory,
    prices,
    selectedSort,
    selectedPage,
    selectedBrand,
  ])

  useEffect(() => {
    const url = 'http://localhost:3000/categories'

    fetch(url)
    .then(res => res.json())
    .then((categories) => {
      setCategories(categories)})
  }, [])

  useEffect(() => {
    const url = 'http://localhost:3000/types'

    fetch(url)
    .then(res => res.json())
    .then((types) => {
      setTypes(types)})
  }, [])

  useEffect(() => {
    const url = 'http://localhost:3000/brands'

    fetch(url)
    .then(res => res.json())
    .then((brands) => {
      setBrands(brands)})
  }, [])

  

  const typesPrameter = (selectedTypes) => {
    return selectedTypes.map((item) => ('type=' + item.toString())).join("&").concat("&");
  }

  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);

        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay]
    );
  
    return debouncedValue;
  }

  return (
    <div>
      <SearchBar term={term} onChangeTerm={setTerm}/>
      <main>
        <SideBar 
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          types={types}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedType}
          prices={prices}
          setPrices={setPrices}
          brands={brands}
          setBrands={setBrands}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
        />
        <div className="products-sort">
          <SortField selectedSort={selectedSort} setSelectedSort={setSelectedSort}/>
          <ProductTable
            products={products}
            totalProduct={totalProduct}
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
