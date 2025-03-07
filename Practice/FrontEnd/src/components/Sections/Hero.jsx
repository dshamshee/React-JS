
export const Hero = () => {
    return (
        <>
            <div className="container  w-[80%] flex h-screen font-[Poppins]">
                {/* Left Section */}
                <div className="left mt-64 w-[50%]">
                    {/* Heading Text */}
                    <div className="head">
                        <h1 className="text-5xl font-semibold">I'm Danish Shamshee</h1>
                        <h2 className="text-3xl font-semibold">a Web Developer</h2>
                        <p className="mt-4">Transforming ideas into elegant solutions through creative design and innovative development</p>
                    </div>
                    {/* Buttons */}
                    <div className="btnn mt-8">
                        <button className="border-1 cursor-pointer font-semibold bg-orange-600 text-white border-orange-600 px-5 rounded-full py-2">View My Work</button>
                        <button className="border-1 cursor-pointer font-semibold hover:bg-orange-600 hover:text-white border-orange-600 px-5 rounded-full py-2 ml-5">Let's Connect</button>
                    </div>
                    <div className="end flex gap-10 mt-6">
                        <div>
                            <h1 className="text-4xl font-bold">20+</h1>
                            <h2 className="">Minor Projects</h2>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold">15+</h1>
                            <h2>Major Projects</h2>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="right mt-42 w-[50%] h-auto bg-[url(./images/head_shape1.png)] bg-no-repeat">
                    <img src="./images/profile-1.webp" alt="" />
                </div>
            </div>
        </>
    )
}