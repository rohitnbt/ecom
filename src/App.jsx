import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { SingleProduct } from './pages/SingleProduct/SingleProduct';
import { Cart } from './pages/Cart/Cart';
import { Category } from './pages/Category/Category';
import { Profile } from './pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/singleProduct/:id' element={<SingleProduct />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/category/:category' element={<Category />} />
      <Route path="/profile" element={<Profile />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
