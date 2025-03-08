
export const Navbar = () => {
    return (
        <>
            <div className="container font-[Poppins] fixed flex gap-5 justify-between items-center px-10 py-5 rounded-full w-[80%] bg-white shadow-lg z-50">

                <div className="logo"><h1 className="text-xl text-center"><span className="text-rose-500">D</span><span className="text-cyan-500">S</span></h1></div>

                <div className="center text-[16px] w-auto">
                    <ul className="flex flex-row justify-between w-[450px] gap-5 cursor-pointer ">
                        <li className="hover:text-orange-600">Home</li>
                        <li className="hover:text-orange-600">About</li>
                        <li className="hover:text-orange-600">Resume</li>
                        <li className="hover:text-orange-600">Contact</li>
                    </ul>
                </div>

                <div className="end">
                    <ul className="flex flex-row gap-5 cursor-pointer">
                        <i className=' text-lg hover:text-orange-600 bx bxl-github'></i>
                        <i className=' text-lg hover:text-orange-600 bx bxl-linkedin' ></i>
                        <i className=' text-lg hover:text-orange-600 bx bxl-twitter' ></i>
                        <i className=' text-lg hover:text-orange-600 bx bxl-instagram' ></i>
                    </ul>
                </div>
            </div>
        </>
    )
}