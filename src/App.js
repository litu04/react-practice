//import logo from './logo.svg';
import './App.css';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <Product pic={"https://images-na.ssl-images-amazon.com/images/I/71K413NPv9L._AC_SL1500_.jpg"}
       title={"New Apple iPhone 12 (64GB) - Black"}
       price = {'₹ 70,900.00'} reviews={'(179 ratings)'}>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
      </Product>
    </div>
  );
}

export default App;
