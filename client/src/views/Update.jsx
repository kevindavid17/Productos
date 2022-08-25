import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const Update = () =>{
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+id)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch(err => console.log(err))
    }, [id]);

    const handlerUpdateUser = e => {
        //Función para realizar una petición PUT y actualizar un producto
        e.preventDefault(); 
        axios.put('http://localhost:8000/api/product/'+ id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Updating an product</h1>
            <form onSubmit={handlerUpdateUser}>
                <div className='campo'>
                    <label>Title:</label>
                    <input type="text" className='txtTitle' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div className='campo'>
                    <label>Price</label>
                    <input type="text" className='txtPrice' value={price} onChange={ (e) => {setPrice(e.target.value)}} />
                </div>
                <div className='campo'>
                    <label>Description</label>
                    <input type="text"  className='txtDescription' value={description} onChange={ (e) => {setDescription(e.target.value)}} />
                </div>
                <button  className='btn' type="submit"  >Guardar</button>
            </form>
        </div>
    );
}
export default Update;