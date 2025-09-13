import App from "./App.jsx"
function ProductCard({Product,price,available})
{
    return(
        <div>
            <p>ProductName: {ProductName}</p>
            <p>price: {price}</p>
            <p>{available ?"It is in Stock":"It is not in Stock"}</p>
            
        </div>
    )
}
export  default ProductCard;