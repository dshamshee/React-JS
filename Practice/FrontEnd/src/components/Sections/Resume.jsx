
export const Resume = () => {
    return (
        <>
            <div className="ResumeContainer w-full flex justify-center py-5 font-[poppins]">
                <div className="Contentss w-[80%] flex flex-col ">
                    <div className="head w-[60%] mt-5 ml-[20%]">
                        <h1 className="text-center text-3xl underline underline-offset-4 font-semibold text-[#865239]">Resume</h1>
                        <p className="text-center mt-10">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem</p>
                    </div>

                    <div className="workExperience mt-10 w-full">
                        <h1 className="text-start text-2xl font-bold">Work  Experience</h1>
                        <p className="text-lg">Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>
                    </div>

                    <div className="timelinees mt-10 ">
                        <ul className="timeline timeline-vertical timeline-compact">
                            <li className="">
                                <div className="timeline-start font-semibold"><h1>Blog App </h1><span className="font-normal text-red-500">2025</span></div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box w-[70%] shadow-md py-5">
                                    <h1 className="text-sm font-semibold mb-3">ExpressJS, MongoDB, Ejs, Tailwind & Other packeges</h1>
                                    <h3>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</h3>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start font-semibold"><h1>Note App </h1><span className="font-normal text-red-500">2024</span></div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box w-[70%] shadow-md py-5">
                                    <h1 className="text-sm font-semibold mb-3">ExpressJS, MongoDB, Ejs, Tailwind & Other packeges</h1>
                                    <h3>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</h3>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start font-semibold"><h1>Scatch </h1><span className="font-normal text-red-500">2024</span></div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box w-[70%] shadow-md py-5">
                                    <h1 className="text-sm font-semibold mb-3">ExpressJS, MongoDB, Ejs, Tailwind & Other packeges</h1>
                                    <h3>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</h3>
                                </div>
                                <hr />
                            </li>
                            {/* <li>
                                <hr />
                                <div className="timeline-start">2007</div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">iPhone</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start">2015</div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">Apple Watch</div>
                            </li> */}
                        </ul>
                    </div>


                </div>
            </div>
        </>
    )
}