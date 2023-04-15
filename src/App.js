import HomePage from './Pages/Home/HomePages';
import LoginPag from './Pages/Auth/LoginPag'
import Register from './Pages/Auth/Register'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import NavBarLogin  from  './Components/Uitily/NavBarLogin'
import Footers  from  './Components/Uitily/Footers'
import AllCategoryPage from './Pages/Category/AllCategoryPage'
import AllBrand from './Pages/Brand/AllBrand'
import ShopProductPage from './Pages/Products/ShopProductPage'
function App() {
  return (
    <div>
    <NavBarLogin />
    <BrowserRouter>
    <Routes>
      <Route index element={ <HomePage/>}  />
      <Route path="/Login" element={<LoginPag />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/AllCategory" element={<AllCategoryPage />} />
      <Route path="/AllBrand" element={<AllBrand />} />
      <Route path="/Products" element={<ShopProductPage />} />

      
    </Routes>
   </BrowserRouter>
   <Footers />
    </div>
  );
}

export default App;
