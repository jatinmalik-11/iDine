function Nav() {
    return (
        <>
            <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-5 py-4 z-10 bg-transparent text-white">
                <a href="#" className="font-extrabold text-3xl italic text-gold">Tastly</a>
                <div className="flex space-x-6 font-medium text-gold">
                    <a href="#">Home</a>
                    <a href="#map">Your Area</a>
                    <a href="#footer">Contact Us</a>
                </div>
                <a href="#categories">
                    <button className="bg-gradient-to-r from-gold to-red text-black rounded-full px-5 py-2.5 text-sm font-bold">Categories</button>
                </a>
            </nav>
        </>
    );
}

export default Nav;
