import { Box } from "@mui/material";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Dataprovider from "./Context/Dataprovider";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import DetailView from "./Components/Details/DetailView";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <Dataprovider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/product/:id" element={<DetailView/>}/>
          <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </Box>
      </BrowserRouter> 
    </Dataprovider>
  );
}

export default App;
