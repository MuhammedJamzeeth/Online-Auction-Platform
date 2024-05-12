import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import useLogOut from "./hooks/user.logout";
import React, { useEffect } from "react";
import { currentUser } from "./selectors/user.selector";
import { setCurrentUser } from "./actions/user.action";
import SharedLayOut from "./pages/Shared/ShardLayOut";
import Category from "./pages/Category/Category";
import Dashboard from "./pages/Dashboard/Dashboard";
import Orders from "./pages/Orders/Orders";
import Products from "./pages/Products/Products";
import Profile from "./components/Profile/Profile";
import Customer from "./pages/Customer/Customer";
import Home from "./pages/Home/Home";
import Bids from "./pages/Bids/Bids";
import AddProducts from "./pages/AddProducts/AddProducts";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  const dispatch = useDispatch();
  const currentUserValue = useSelector(currentUser);
  const { pathname } = useLocation();
  const { LogOut } = useLogOut();
  useEffect(() => {
    const user = localStorage.getItem("user");
    dispatch(setCurrentUser(JSON.parse(user)));
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: pathname === "/" ? "dashboard" : pathname.split("/")[1],
    });
    // dispatch never updates so we can ignore it in useEffect dependency array
  }, [pathname, dispatch]);
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          // element={!currentUserValue ? <Login /> : <SharedLayOut />}
          element={<Home />}
        >
          <Route index path="/" element={<Dashboard />}></Route>
          
          <Route path="category" element={<Category />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="customers" element={<Customer />}></Route>
          <Route path="settings" element={<Profile />}></Route>
          <Route path="/addProducts" element={<AddProducts />}></Route>
        </Route>
        <Route path="/bid" element={<Bids />}></Route>
        <Route path="about" element={<AboutUs/>}/> <Route/>
        <Route
          element={!currentUserValue ? <Login /> : <Navigate to="/" />}
          path="login"
        />
        <Route
          element={!currentUserValue ? <Register /> : <Navigate to="/" />}
          path="register"
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
