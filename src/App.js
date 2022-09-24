import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Cart from './components/Cart/Cart';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Shipping from './components/Shipping/Shipping';
import Foods from './components/Foods/Foods';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import CheckOut from './components/CheckOut/CheckOut';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register />}></Route>

            <Route path='/cart'
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>}>
            </Route>

            <Route path='/shipping'
              element={
                <ProtectedRoute>
                  <Shipping />
                </ProtectedRoute>}>
            </Route>

            <Route path='/checkout'
              element={
                <ProtectedRoute>
                  <CheckOut />
                </ProtectedRoute>
              }>

            </Route>

            <Route path='/foods/details/:foodID' element={<Details></Details>}></Route>


            <Route path='*' element={<NotFound></NotFound>}></Route>

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
