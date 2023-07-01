// component
import Cart from "./component/cart/Cart";
import DetailView from "./component/details/DetailView";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import DataProvider from "./context/DataProvider";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/product/:id" element={<DetailView/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
          </Routes>
        </Box>
      </Router>
    </DataProvider>
  );
}

export default App;
