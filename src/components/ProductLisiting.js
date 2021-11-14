import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

const ProductListing = () => {
    const products = useSelector((state) => state)
    console.log(products)
    return (
        <Fragment>
            <div className="ui grid container">
                <h1>ProductListing</h1>
            </div>
        </Fragment>
    )
}

export default ProductListing