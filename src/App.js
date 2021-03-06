import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home/Home.components";
import Navigation from "./routes/Navigation/Navigation.components";
import SignIn from "./routes/sign-in/SignIn.component";

const Shop = () => {
  return <h1>Shop Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
