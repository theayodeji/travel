const Price = ({ isDiscounted, price, oldPrice }) => {
    return ( 
        <div className="price">
            <p className="current-price">${price}</p>
            {isDiscounted && <span className="old-price"> ${oldPrice}</span>}
        </div>
     );
}
 
export default Price;