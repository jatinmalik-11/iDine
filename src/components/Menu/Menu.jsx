import axios from 'axios'
import { useState, useEffect } from 'react'

function Landingpage() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);

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

    if (loader) {
        return <h3 className="text-gold text-center p-8">Please wait, menu is loading...</h3>
    }

    return (
        <>
            {/* Header */}
            <div className="bg-black flex justify-center py-8 md:py-12 lg:py-20 mt-10">
                <h1 className="text-gold font-extrabold text-2xl md:text-3xl lg:text-4xl italic">Our Menu</h1>
            </div>
            
            <div className="flex flex-col md:flex-row w-full min-h-screen">
                {/* Sidebar - Hidden on mobile, visible from md upwards */}
                <div className="hidden md:block bg-gradient-to-r from-gold to-red text-black w-full md:w-64 lg:w-80 sticky top-0 h-screen overflow-y-auto  rounded-r-4xl">
                    <div className="p-4 lg:p-6">
                        <h1 className="text-black font-extrabold text-xl lg:text-2xl italic text-center mt-4 lg:mt-7">Categories</h1>
                        <ul className="text-black  mt-6 lg:mt-10 space-y-4 lg:space-y-6 font-bold">
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
                <div className="rightbar bg-black text-gold flex-1 p-4 sm:p-6 md:p-8 lg:p-20 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-12">
                        {data.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-black border border-gold/30 hover:border-gold rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
            </div>
        </>
    )
}

export default Landingpage