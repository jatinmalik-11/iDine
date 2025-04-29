import { useState } from 'react'
import axios from 'react'
import { useLocation } from 'react-router-dom'

function Edit(){
    const location = useLocation();
    const { item } = location.state;

    const[name, setName] = useState(item.name);
    const[price, setPrice] = useState(item.price);
    const[description, setDescription] = useState(item.description);

    
    return(
        <>
        <form action="POST">
            <h2>Name</h2>
            <input type="text" value= {name} onChange={(e) => setName(e.target.value)} />
            <h2>Price</h2>
            <input type="text" value= {price} onChange={(e) => setPrice(e.target.value)} />
            <h2>Description</h2>
            <input type="text" value= {description} onChange={(e) => setDescription(e.target.value)} />
            <br /><br />
            <button onClick={OnClickHandler}>ADD</button>
        </form>
        </>
    )   
}
export default Edit