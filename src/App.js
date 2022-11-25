import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Home from "./routes/Home/Home.components";
import Navigation from "./routes/Navigation/Navigation.components";
import Authentication from "./routes/authentication/Authentication.component";
import Shop from "./routes/shop/Shop.component";
import Checkout from "./routes/checkout/Checkout.component";

import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
