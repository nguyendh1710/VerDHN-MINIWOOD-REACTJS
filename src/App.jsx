import "./App.css";

import Home from "./modules/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CategoryPage from "./modules/CategoryPage/CategoryPage";
import CustomStudio from "./modules/CustomStudio/CustomStudio";
import NotFound from "./components/NotFound/NotFound";
import CategoryStudio from "./modules/CategoryStudio/CategoryStudio";
import ProductStudio from "./modules/ProductStudio/ProductStudio";
import ProductColor from "./modules/ProductColor/ProductColor";
import Blogs from "./modules/Blogs/Blogs";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ContactPage from "./modules/ContactPage/ContactPage";
import Cart from "./modules/Cart/Cart";
import CustomerLayout from "./layouts/CustomerLayout/CustomerLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { CartProvider } from './context/CartContext';
import { CartProvider } from "react-use-cart";
import ProtectedRoute from "./routers/ProtectedRoute/ProtectedRoute";
import AdminProtectedRoute from "./routers/AdminProtectedRoute/AdminProtectedRoute";
import { UserProvider } from './context/UserContext';
import Signin from "./modules/Auth/pages/Signin/Signin";
import Signup from "./modules/Auth/pages/Signup/Signup";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import UserManagement from "./modules/AdminMovie/User/UserManagement/UserManagement";
import DesignUpload from "./modules/DesignUpload/DesignUpload";


const queryClient = new QueryClient();

export default function App() {
  return (
    <div className="App">
      <Router>
        
        <QueryClientProvider client={queryClient}>
        <UserProvider>
          <CartProvider>
            <DndProvider backend={HTML5Backend}>
              <Routes>
                {/* Customer */}
                <Route exact path="/" element={<CustomerLayout />}>
                  <Route index element={<Home />} />
                  <Route path="/custom-studio" element={<CustomStudio />} />

                  <Route path="/category-studio" element={<CategoryStudio />} />

                  <Route
                    path="/product-studio/:id"
                    element={<ProductStudio />}
                  />

                  <Route
                    path="/product-studio/:id/:type"
                    element={<ProductColor />}
                  />

<Route
                    path="/design-upload"
                    element={   <DesignUpload/>}
                  />
      
                  <Route path="/category-page" element={<CategoryPage />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/contact" element={<ContactPage />} />

                  <Route element={<ProtectedRoute />}>
                    <Route path="/cart" element={<Cart />} />
                  </Route>
                  <Route path="/signin" element={<Signin />} />
                  <Route path="/signup" element={<Signup />} />
                </Route>

        
                 {/* Admin */}
                 <Route element={<AdminProtectedRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
               {/* <Route path="movies" index element={<AdminMovie />} /> */}
              <Route path="users" element={<UserManagement />} />
              {/* <Route
                path="schedule/:selectMovieId"
                element={<ShowSchedule />}
              />  */}
            </Route> 
          </Route>

          <Route path="*" element={<NotFound />} />
              </Routes>
            </DndProvider>
          </CartProvider>
          </UserProvider>
        </QueryClientProvider>
                 
      

      </Router>
    </div>
  );
}
