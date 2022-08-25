import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Detail = (props) =>{

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const {removeFromDom} = props;
    const navigate = useNavigate();
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => setProduct({ ...res.data}))
        .catch(err => console.log(err));
    }, []);
    
    const deleteProduct = (productId) =>{
        axios.delete('http://localhost:8000/api/product/'+productId)
        .then(res => {
            removeFromDom(productId)
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='campoDetalle'>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/"+ product._id + "/edit/"}>Edit</Link>
            <button className='btnDelete' onClick={(e) => {deleteProduct(product._id); navigate('/')}}>Delete</button>
        </div>
    );
}
export default Detail;