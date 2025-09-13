//import ProductCard from "./ProductCard.jsx"
//import Profile from "./Profile.jsx"
import Movie from "./Movie.jsx"
import "./App.css"
//import ProductCard from "./ProductCard.jsx"
import BlogPost from "./BlogPost.jsx"
export const App = () => {

  //const myName = "jk"
  //const pro = { 
  //Product: "Book",
  //price: 236,
  //isAvailable: true
  //}
  //const Product = [
    //{
      //ProductName: "Book",
      //price: 236,
      //isAvailable: true
    //},
    //{
      //ProductName: "pen",
      //price: 10,
      //isAvailable: true
    //},
    //{
      //ProductName: "product3",
      //price: 236,
      //isAvailable: false
    //}
  //]
  const posts=[
    {author:"sai",
      title:"ALL IS WELL",
      description:"SAI RAM"
    },
    {author:"srinivas",
      title:"GOOD",
      description:"SAI RAM"
    },
    {author:"atarya",
      title:"ALL IS WELL",
      description:"SAI RAM"
    }
  ]
  return (
    //<>
      //{Product.map((ele) => (
       // <ProductCard ProductName={ele.ProductName} price={ele.price} isAvailable={ele.isAvailable} />
    //))
    //}
    //</> 
    <>
    <div className="col">
    //<Movie name="HIT-3" price={200} available={true} img="./hit-3.jpg"/>
    //<Movie name="MIRAI" price={200} available={true} img="./mirai.jpg"/>
    //<Movie name="SALAAR" price={300} available={false} img="./salaar.jpg"/>
    </div>
    {posts.map((ele,index) => (
        <BlogPost key={index} author={ele.author} title={ele.title} description={ele.description} />
    ))
  }   
  
        </>

      );
};
