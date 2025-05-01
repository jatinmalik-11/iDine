import axios from 'axios'
import { useState, useEffect } from 'react'

function Admin() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [editedItem, setEditedItem] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:5000/admin')
            .then((res) => {
                setData(res.data);
                setLoader(false);
            })
            .catch(console.error);
    };

    const handleCardClick = (item) => {
        setSelectedItem(item);
        setEditedItem({ ...item });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedItem(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/admin/${editedItem._id}`, editedItem);
            fetchData(); // Refresh data after update
            closeModal();
        } catch (error) {
            console.error("Update failed:", error);
        }
    };

    const closeModal = () => {
        setSelectedItem(null);
        setEditedItem({});
    };

    if (loader) {
        return <h3 className="text-gold text-center p-8">Loading...</h3>;
    }

    return (
        <section id="hotelMenu">
            <div className="bg-black flex justify-center py-8 md:py-12 lg:py-20 mt-10">
                <h1 className="text-gold font-extrabold text-2xl md:text-3xl lg:text-4xl italic">Manage Menu</h1>
            </div>
            
            <div className="flex flex-col md:flex-row w-full min-h-screen">
            <div className="rightbar bg-black text-gold flex-1 p-4 sm:p-6 md:p-8 lg:p-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-12">
        {data.map((item, index) => (
            <div 
                key={index} 
                onClick={() => handleCardClick(item)}
                className="bg-black border border-gold/30 hover:border-gold rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-60 object-cover"
                />
                <div className="p-4 lg:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                        <h3 className="text-lg lg:text-xl font-semibold">{item.name}</h3>
                        <div className="bg-gradient-to-r from-gold to-red-600 text-black text-sm md:text-base rounded-full font-bold px-3 py-1 md:px-4 md:py-2">
                            ₹{item.price}
                        </div>
                    </div>
                    <p className="text-gray-300 text-xs md:text-sm">{item.description}</p>
                </div>
            </div>
        ))}
    </div>
</div>
                {selectedItem && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50"
                         onClick={closeModal}>
                        <div className="bg-black border-2 border-gold rounded-xl p-8 max-w-3xl w-full mx-4 relative"
                             onClick={(e) => e.stopPropagation()}>
                            <button className="absolute top-4 right-4 text-gold text-2xl hover:text-red-600"
                                    onClick={closeModal}>
                                &times;
                            </button>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-1/2">
                                    <img 
                                        src={editedItem.image} 
                                        alt={editedItem.name} 
                                        className="h-80 object-cover rounded-lg w-full"
                                    />
                                    <input
                                        type="text"
                                        name="image"
                                        value={editedItem.image || ''}
                                        onChange={handleInputChange}
                                        className="w-full mt-4 bg-black border border-gold p-2 rounded text-gold"
                                        placeholder="Image URL"
                                    />
                                </div>
                                <div className="flex flex-col justify-between w-full md:w-1/2">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={editedItem.name || ''}
                                            onChange={handleInputChange}
                                            className="text-3xl bg-black border-b border-gold mb-4 w-full text-gold font-bold"
                                        />
                                        <textarea
                                            name="description"
                                            value={editedItem.description || ''}
                                            onChange={handleInputChange}
                                            className="w-full bg-black border border-gold p-2 rounded text-gold h-32 mb-4"
                                            placeholder="Description"
                                        />
                                        <input
                                            type="number"
                                            name="price"
                                            value={editedItem.price || ''}
                                            onChange={handleInputChange}
                                            className="w-full bg-black border border-gold p-2 rounded text-gold"
                                            placeholder="Price"
                                        />
                                    </div>
                                    <div className="flex justify-end gap-4 mt-6">
                                        <button 
                                            onClick={closeModal}
                                            className="bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700"
                                        >
                                            Cancel
                                        </button>
                                        <button 
                                            onClick={handleUpdate}
                                            className="bg-gradient-to-r from-gold to-red-600 text-black font-bold px-6 py-2 rounded-full hover:scale-105 transition-transform"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Admin