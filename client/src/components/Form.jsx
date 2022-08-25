import React, {useState} from 'react';
import axios from 'axios';

const Form = (props) => {
    const {createFromDom} = props;
    const[title, setTitle] = useState("");
    const[price, setPrice] = useState("");
    const[description, setDescription] = useState("");

    //variables para errores
    const [titleError, setTitleError] = useState("");
    const [priceError, setPriceError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [statusCreacion, setStatusCreation] = useState("");

    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new', {title,price,description, titleError,priceError,descriptionError,statusCreacion})
        .then(res => {
            console.log('Petición exitosa:', res);
            createFromDom(res.data.insertedProduct); 
            setTitleError("");
            setPriceError("");
            setDescriptionError("");
            setStatusCreation("Se ha registrado el producto correctamente")

        })
        .catch(err => {
            //console.log('Petición fallida:', err));
            const errorResponse = err.response.data.errors;

            if(Object.keys(errorResponse).includes('title')){
                setTitleError(errorResponse['title'].message);
                setStatusCreation("");
            }
            else{
                setTitleError("");
            }

            if (Object.keys(errorResponse).includes('price')){
                setPriceError(errorResponse['price'].message);
                setStatusCreation("");
            }
            else{
                setPriceError("");
            }

            if (Object.keys(errorResponse).includes('description')){
                setDescriptionError(errorResponse['description'].message);
                setStatusCreation("");
            }
            else{
                setDescriptionError("");
            }

    
        })    

    }
    return (
        <form className='frmPeticion' onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <div className='campo'>
                <label>Title: </label>
                <input type="text" className="txtTitle" onChange={(e) => setTitle(e.target.value)} value={title}></input>
            </div>
            <p className='txtError'>{titleError}</p>
            <div className='campo'>
                <label>Price: </label>
                <input type="text" className="txtPrice" onChange={(e) => setPrice(e.target.value)} value={price}></input>
            </div>
            <p className='txtError'>{priceError}</p>
            <div className='campo'>
                <label>Description: </label>
                <input type="text" className="txtDescription" onChange={(e) => setDescription(e.target.value)} value={description}></input>
            </div>
            <p className='txtError'>{descriptionError}</p>
            <div className='btnseccion'>
                <button type="submit" className='btn'>Create</button> 
            </div>
            <p className='txtCorrecto'>{statusCreacion}</p>
        </form>
        
    );
    
}
export default Form;
