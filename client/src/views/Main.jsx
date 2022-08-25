import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProducts(res.data);
        })
    }, []);

    const removeFromDom = (productId) => {
        setProducts(products.filter(product => product._id !== productId));
    }

    const createFromDom = (newProduct) => {
        setProducts([...products,newProduct]);
    }

    return (
        <div>
            <Form createFromDom={createFromDom} />
            <hr/>
            <ProductList products ={products} removeFromDom={removeFromDom}/>
        </div>
    );
}
export default Main;