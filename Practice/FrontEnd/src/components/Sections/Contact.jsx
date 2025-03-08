
export const Contact = ()=>{
    return (
        <>
            <div className="mainContainer w-full py-5 bg-gray-100 flex justify-center font-[poppins]">
                <div className="innerContainer grid grid-cols-2 gap-10 w-[80%]">

                    <div className="left">
                        <h3 className="text-lg">Contact</h3>
                        <h1 className="mt-6 text-2xl font-bold">Let's build something amazing together! Whether you have a project idea, need technical advice, or just want to connect, feel free to reach out.</h1>
                        <h2 className="mt-6 text-lg font-semibold">Get in Touch</h2>
                        <div className="mt-3">
                            <h1><i class='text-xl mt-2 bx bx-envelope'></i> danishshamshee@gmail.com</h1>
                            <h1><i class='text-xl mt-2 bx bx-phone'></i> +91 9430856365</h1>
                            <h1><i class='text-xl mt-2 bx bx-location-plus'></i> Patna, India</h1>
                        </div>
                        <button className="btn btn-accent btn-xs px-5 mt-3 rounded-full font-semibold">Open Map</button>
                    </div>

                    <div className="right bg-white shadow-lg rounded-xl py-10 px-8">
                        <div>
                            <form className="flex flex-col gap-8">
                                <input className="rounded-md py-2 px-3 border-gray-300 input input-warning w-full" type="text" placeholder="Your Name" />
                                <input className="rounded-md py-2 px-3 border-gray-300 input input-warning w-full validator" required type="email" placeholder="example@gmail.com" />
                                <input className="rounded-md py-2 px-3 border-gray-300 input input-warning w-full" type="text" placeholder="Subject" />
                                <textarea className="rounded-md py-2 px-3 border-gray-300 input input-warning w-full h-[150px]" placeholder="Message" />
                                <button className="btn btn-success w-full rounded-md">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}