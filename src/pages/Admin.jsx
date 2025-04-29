import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function crud(){
    const [data, setData] = useState([]);
    const[loader, setLoader] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/admin')
        .then((res) =>{
            setData(res.data);
            setLoader(false);
        })
        .catch((error) => {
            console.log("Error faced" , error);
            setLoader(false);
        });
    }, []);
    if(loader){
        return(
            <h3>Please wait, menu is loading...</h3>
        )
    }

    function OnClickHandler(item) {
        navigate('/admin/edit', { state: { item } });
    }

    return(
        <>
        <h1>Hello i am crud</h1>
        <div className="container">
            <div className="menu">
            <h1>Menu</h1>
            {data.map((items, index) => (
                    <div className="menu-items" key={index}>
                        <ul style={{ listStyleType: "none" }}>
                            <li className="item-name">
                            <h3 className="name">{items.name}</h3>
                            <h4 className="price">{items.price}</h4>
                            <h5 className="description">{items.description}</h5>
                            </li>
                            <li className="edit-items">
                                <button onClick={() => OnClickHandler(items)}>Edit</button>
                            </li>
                        </ul>
                    </div>
                ))}
    </div>
            
        </div>
        </>
    )
}
export default crud