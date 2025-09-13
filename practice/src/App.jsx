import ProductCard from "./ProductCard.jsx"
import Profile from "./Profile.jsx"

function App() {
  const myName = "jk"
  const pro = {
    Product:"Book",
    price :236,
    isAvailable:true
  }

  return (
    <>

      <Profile />
      
      <ProductCard Product={pro.Product} price={pro.price} available={pro.isAvailable} />

    </>
  )
}

export default App
