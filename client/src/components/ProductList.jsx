import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) =>{
    const { products,removeFromDom } = props;
    
    const deleteProduct = (productId) =>{
        axios.delete('http://localhost:8000/api/product/'+productId)
        .then(res => {
            removeFromDom(productId)
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>All Products:</h1>
            {
                products.map((product, idx) =>{
                    return <p key={idx}>
                        <Link to={"/"+product._id}>{product.title}</Link>
                        <button className='btnDelete' onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                        </p>
                })
            }
            
        </div>
    );
}
export default ProductList;