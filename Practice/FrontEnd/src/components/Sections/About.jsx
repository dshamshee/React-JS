
export const About = () => {
    return (
        <>
            <div className="containerr bg-gray-100 w-full flex justify-center font-[poppins]">

                <div className="contentt flex flex-col items-center text-center py-8 w-[80%]">
                    <div className="head w-[50%]">
                        <h1 className="text-2xl text-[#7a3e26] w-full">About</h1>
                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem</p>
                    </div>

                    <div className="detailss flex gap-8 bg-purple-40 mt-14 p-2">

                        <div className="imag bg-purple-400 rounded w-[500px] h-[580px] bg-[url(./images/Danish.jpeg)] bg-cover bg-no-repeat">
                            {/* <h1>Image</h1> */}
                            {/* <img height={200} src="./images/Danish.jpg" alt="" /> */}
                        </div>

                        <div className="contentt w-[700px]">
                            <h1 className="text-start font-bold text-lg text-orange-400 ">About Me</h1>
                            <h1 className="text-start mt-4 text-2xl font-bold">Cloud Architect & Web Developer</h1>
                            <p className="text-start mt-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                            <p className="mt-8">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>

                            <div className="grid grid-cols-2 gap-10 text-start mt-10 bg-white shadow-lg px-8 py-5 rounded-xl">
                                <div className="name">
                                    <h1 className="font-semibold">Name</h1>
                                    <h1>Danish shamshee</h1>
                                </div>
                                <div className="phone">
                                    <h1 className="font-semibold">Phone</h1>
                                    <h1>9430856365</h1>
                                </div>
                                <div className="age">
                                    <h1 className="font-semibold">Age</h1>
                                    <h1>24 Years</h1>
                                </div>
                                <div className="email">
                                    <h1 className="font-semibold">Email</h1>
                                    <h1>danishshamshee@gmail.com</h1>
                                </div>
                                <div className="occupation">
                                    <h1 className="font-semibold">Occupation</h1>
                                    <h1>Developer</h1>
                                </div>
                                <div className="nationality">
                                    <h1 className="font-semibold">Nationality</h1>
                                    <h1>Indian</h1>
                                </div>
                            </div>
                            <img className=" w-[150px]" src="./images/Signature.png" alt="" />

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}