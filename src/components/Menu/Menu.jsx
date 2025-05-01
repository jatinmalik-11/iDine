import axios from 'axios'
import { useState, useEffect } from 'react'

function Landingpage() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/admin')
            .then((res) => {
                setData(res.data);
                setLoader(false);
            })
            .catch((error) => {
                console.log("Error faced", error);
                setLoader(false);
            });
    }, []);

    const handleCardClick = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    if (loader) {
        return <h3 className="text-gold text-center p-8">Please wait, menu is loading...</h3>
    }

    return (
        <>
        <section id = "hotelMenu">
            {/* Header */}
            <div className="bg-black flex justify-center py-8 md:py-12 lg:py-20 mt-10">
                <h1 className="text-gold font-extrabold text-2xl md:text-3xl lg:text-4xl italic">Our Menu</h1>
            </div>
            
            <div className="flex flex-col md:flex-row w-full min-h-screen">
                {/* Sidebar */}
                <div className="hidden md:block bg-gradient-to-r from-gold to-red text-black w-full md:w-64 lg:w-80 sticky top-0 h-screen overflow-y-auto rounded-r-4xl">
                    <div className="p-4 lg:p-6">
                        <h1 className="text-black font-extrabold text-xl lg:text-2xl italic text-center mt-4 lg:mt-7">Categories</h1>
                        <ul className="text-black mt-6 lg:mt-10 space-y-4 lg:space-y-6 font-bold">
                            {['North Indian', 'Main Course', 'Snacks', 'Sweets & Dessert', 'Beverages'].map((category, index) => (
                                <li key={index} className="px-4 py-2 hover:text-md rounded-lg transition-colors">
                                    <h3 className="hover:text-white">{category}</h3>
                                    {index < 4 && <div className="border-t border-black/20 mt-4" />}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Menu Items Grid */}
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
                                        <button className="bg-gradient-to-r from-gold to-red-600 text-black text-sm md:text-base rounded-full font-bold px-3 py-1 md:px-4 md:py-2">
                                            ₹{item.price}
                                        </button>
                                    </div>
                                    <p className="text-gray-300 text-xs md:text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Item Detail Modal */}
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
                                <img 
                                    src={selectedItem.image} 
                                    alt={selectedItem.name} 
                                    className="w-full md:w-1/2 h-80 object-cover rounded-lg"
                                />
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-3xl text-gold font-bold mb-4">{selectedItem.name}</h2>
                                        <p className="text-gray-200 mb-4">{selectedItem.description}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-2xl font-bold text-gold">₹{selectedItem.price}</span>
                                        <button className="bg-gradient-to-r from-gold to-red-600 text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform">
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            </section>
        </>
    )
}

export default Landingpage