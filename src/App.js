import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ProductDetails from './components/ProductDetails'
import ProductListing from './components/ProductLisiting'

const App = () => {
    return (
        // sugar concatde fragment tag
        <> 
            <Router>
                <Header />
                <Routes>
                    <Route  path="/" exact component={ProductListing} />
                    <Route exact path="/product/:productId" component={ProductDetails} />
                    <Route>404 not found</Route>
                </Routes>
            </Router>
        </>
    )
}

export default App