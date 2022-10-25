import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function ProductItem(props) {
  return(
    <div className="col">
      <div className="card shadow-sm p-2">
        <img src={props.value.image} alt="Italian Trulli" className="bd-placeholder-img card-img-top"/>

        <div className="card-body">
          <p className="card-text">{props.value.title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="ratings">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
