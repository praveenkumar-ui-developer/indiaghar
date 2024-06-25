
import { useState } from 'react';
import Admin from './Admin/Admin';
import LoginPage from './Admin/Login';
import './App.css';
import ProductList from './products/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,Link} from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
function App() {
  const [loggedin,setLoggedin]=useState(false)
  const handleChildData = (data) => {
    setLoggedin(data)
    console.log('Data from child:', data);
    // You can perform any actions with the data here
  };
  
  return (
    <div className="App">
          {/* <Helmet>
        <title>IndiaGhar</title>
        <meta name="IndiaGhar" content="Discover IndiaGhar, products,amazon products,indiaghar,home products,vehicle products."/>

      </Helmet> */}
      <div className='lgo'>
      {/* <h1>Welcome to IndiaGhar</h1>
<h2>Find Your Dream Home in India</h2> */}

        <Link to='/'>
        <img className='logo' src='https://www.creativefabrica.com/wp-content/uploads/2019/02/Online-shop-shopping-shop-logo-by-DEEMKA-STUDIO-3.jpg' alt='logo' style={{height:"150px", }}/>
        </Link>
        <Link className='' to='/login'>
        <h4 className='tagline text-center'>IndiaGhar</h4>
        </Link>
        <div className='divider'></div>
      </div>

      <Routes >
        <Route path="/" element={<ProductList/>}/>
        <Route path="/admin" element={loggedin?<Admin />:<LoginPage onChildData={handleChildData}/>}/>
        <Route path="/login" element={<LoginPage  onChildData={handleChildData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
