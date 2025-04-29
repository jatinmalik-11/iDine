function Landingpage() {
    return (
        <>
            <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://i.postimg.cc/NjjVJ8bq/Chat-GPT-Image-Apr-29-2025-10-16-34-PM.png')" }}>
         {/* Move navbar inside to overlay it */}
                <div className="h-full w-full flex items-center justify-center">
                    <h1 className="text-white text-5xl"></h1>
                </div>
            </div>
        </>
    );
}

export default Landingpage;
