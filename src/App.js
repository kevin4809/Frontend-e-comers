import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { LoadingScreen, Navbar } from "./components";
import { Home, Login, ProductDetail, Favorite } from './pages';
import './styles/styleHome.css'
import './styles/styleProductDetail.css'

function App() {

  const isLoading = useSelector(state => state.isLoading);
  return (
    <HashRouter>
      <Navbar />
      <Container>
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
