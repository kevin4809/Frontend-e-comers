import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { LoadingScreen, Navbarr, ProtectedRoutes } from "./components";
import { Home, Login, ProductDetail, Purchases } from './pages';
import './styles/styleHome.css'
import './styles/styleProductDetail.css'

function App() {

  const isLoading = useSelector(state => state.isLoading);
  return (
    <HashRouter>
      <Navbarr />
      <Container>
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
          </Route>


        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
