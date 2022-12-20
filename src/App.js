import Header from './containers/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import CategoryList from './containers/CategoryList';
import CategoryWise from './containers/CategoryWise';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<ProductListing />} />
          <Route exact path='/product/:productId' element={<ProductDetails />} />
          <Route exact path='/category' element={<CategoryList />} />
          <Route exact path='/category/:categoryName' element={<CategoryWise />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
