
export const Footer = () => {
    return (
        <>
            <div className="mainContainer w-full py-10 flex justify-center">
                <div className="innerContainer w-[80%] flex flex-col items-center gap-3">
                    <h1>&copy; Copyright DS All Rights Reserved</h1>
                    <div className="icons">
                        <i className=' text-2xl text-center cursor-pointer ml-2 hover:text-orange-600 bx bxl-github'></i>
                        <i className=' text-2xl text-center cursor-pointer ml-2 hover:text-orange-600 bx bxl-linkedin' ></i>
                        <i className=' text-2xl text-center cursor-pointer ml-2 hover:text-orange-600 bx bxl-twitter' ></i>
                        <i className=' text-2xl text-center cursor-pointer ml-2 hover:text-orange-600 bx bxl-instagram' ></i>
                    </div>
                    <h1>Designed by <span className="text-orange-400 font-semibold">Danish Shamshee</span></h1>
                </div>
            </div>
        </>
    )
}