import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Errorpage from './Errorpage';
import Home from './Home';
import Layout from './Layout';
import ProductDetail from './ProductDetail';
import Products from './Products';
  
function RouteExample() {
    return (
        <Router>
            <Layout>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/art/:id' element={<ProductDetail/>}/>
            <Route path='*' element={<Errorpage/>}/>
            </Routes>
            </Layout>
        </Router>
    )
}

export default RouteExample
