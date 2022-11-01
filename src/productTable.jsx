import './product_table.css';
import ProductItem from './productItem'
import Pagination from './pagination';

function ProductTable({products, totalProduct, setSelectedPage, selectedPage}) {
  return (
    <>
    { products && products.length ? (
      <>
        <div className="table-product">
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {products.map((product) =>
                  <ProductItem key={product.id} value={product} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Pagination 
            totalProduct={totalProduct}
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
        </div>
      </>
      ) : (
        <>
          <div className="table-product">
          <div className="album py-5 bg-light">
            <h2> Không có đâu </h2>
          </div>
          </div><div className="album py-5 bg-light">
          </div>
        </>
      )}
  </>
  )
}

export default ProductTable;
