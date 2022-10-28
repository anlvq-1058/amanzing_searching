const priceRageArray = [[0,1], [1, 500], [500, 1000], [1000, 100000], [100000, 250000]]

function PriceFilter({prices, setPrices, isActive}) {
  const onChangePrice = (priceRange) => {
    const newPrices = JSON.stringify(prices) === JSON.stringify(priceRange) ? [] : priceRange;
    setPrices(newPrices)
  }

  return(
    <>
      <li className="mb-1">
        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="/orders-collapse" aria-expanded="false">
          Prices
        </button>
        <div className="collapse show" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            {priceRageArray.map((priceRage, index) => (
              <li key={`price-${index}`} className={"link-dark rounded " + isActive(JSON.stringify(prices), JSON.stringify(priceRage))} onClick={() => onChangePrice(priceRage)} >
                {`${priceRage[0]} - ${priceRage[1]}`}
              </li>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
}

export default PriceFilter
