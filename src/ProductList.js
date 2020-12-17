import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getProductsFromBackend} from './actions/products'
import {Link} from 'react-router-dom'

function ProductList() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(function() {
        async function getProducts() {
            await dispatch(getProductsFromBackend());
            setIsLoading(false);
        }

        if (isLoading) {
            getProducts();
        }
    }, [dispatch, isLoading])

    return (
        <div className="row">
            {products.map(product => (
                <div key={product.id} className="col-4">
                <div className="card">
                    <img className="card-img-top" src={product.photo_url} alt=""/>
                    <div className="card-body"> 
                        <div className="card-title"><Link to={"/" + product.id}>{product.name}</Link></div>
                        <div className="card-text"><p>${product.price}</p></div>
                        <div className="card-footer">
                        </div>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}

export default ProductList
