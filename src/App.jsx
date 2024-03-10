import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./component/Layout";
import Cart from "./page/Cart";
import Home from "./page/Home";
import User from "./component/User";
import WishList from "./page/WishList";
import Error from "./component/Error";
import ProductPge from "./page/ProductPge";

const root = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<ProductPge />} />
      </Route>
      <Route path="profile" element={<User />} />
      <Route path="wishlist" element={<WishList />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<Error />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={root} />
    </>
  );
}

export default App;
