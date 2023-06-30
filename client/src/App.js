import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import DetailView from "./components/details/DetailView";

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Box style={{ marginTop: "54px" }}>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/product/:id" element={<DetailView/>}/>
          </Routes>
        </Box>
      </Router>
    </DataProvider>
  );
}

export default App;
