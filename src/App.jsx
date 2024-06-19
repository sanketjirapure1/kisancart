import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Contacts from "./pages/Contacts";
import NoPage from "./pages/NoPage";
import { ConterPage } from "./pages/ConterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="counter" element={<ConterPage/>}/>
            <Route path="category" element={<Category />} />
            <Route path="contact" element={<Contacts />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
