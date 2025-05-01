function Landingpage() {
    return (
        <>
        <section id="home">
            <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat" style={{
                    backgroundImage: "url('https://i.postimg.cc/Df1xRp6z/Chat-GPT-Image-Apr-30-2025-11-03-53-AM-5.png')",
                }}>
                <a href="#next-section" className="absolute bottom-5 right-10 text-gold text-xl font-extrabold flex items-center space-x-2">
                    <span>Scroll Down</span>
                    <span className="animate-bounce">⬇</span>
                </a>
                <div className="h-full w-full flex items-center justify-center">

                </div>
            </div>
        </section>
        </>
    );
}

export default Landingpage;
