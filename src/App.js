import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home/Home.components";
import Navigation from "./routes/Navigation/Navigation.components";
import Authentication from "./routes/authentication/Authentication.component";
import {useProvider} from "./context/User.context"; 

const Shop = () => {
  return <h1>Shop Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
