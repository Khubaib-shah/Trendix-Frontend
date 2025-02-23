import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* User Layout */}
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
