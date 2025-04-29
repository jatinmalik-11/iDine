import {} from 'react'
import axios from 'react'
import { useLocation } from 'react-router-dom'

function Edit(){
    const location = useLocation();
    const { item } = location.state;

    return(
        <>
        <h1>{item.name}</h1>
        <h3>{item.price}</h3>
        <h5>{item.description}</h5>
        </>
    )   
}
export default Edit