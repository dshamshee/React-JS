import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
    return (
        <>
            <div className="mainContainer my-14 w-full flex justify-center py-5 font-[poppins]">
                <div className="InnerContainer w-[80%] flex flex-col items-center">
                    <div className="head w-[60%]">
                        <h1 className="text-3xl font-bold text-center text-orange-500">Projects</h1>
                        <p className="text-center mt-6">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem</p>
                    </div>
                    <div className="sections flex gap-10 my-8 ">
                        <a className="px-3 rounded-full py-2 bg-orange-500 text-white" href="">All Works</a>
                        <a className="px-3 py-2 rounded-full hover:bg-orange-400 hover:text-white " href="">Frontend</a>
                        <a className="px-3 py-2 rounded-full hover:bg-orange-400 hover:text-white " href="">Backend</a>
                        {/* <a href=""></a>
                        <a href=""></a> */}
                    </div>

                    <div className="ProjectCards grid grid-cols-2 gap-5">
                    <ProjectCard imgURL={"./images/BlogApp.jpeg"} head={"Blog App"} description={"A card component has a figure, a body part, and inside body there are title and actions parts"} />
                    <ProjectCard imgURL={"./images/NoteApp.webp"} head={"Note App"} description={"A card component has a figure, a body part, and inside body there are title and actions parts"} />
                    <ProjectCard imgURL={"./images/Scatch.jpeg"} head={"Scatch"} description={"A card component has a figure, a body part, and inside body there are title and actions parts"} />
                    <ProjectCard imgURL={"./images/TodoList.webp"} head={"ToDo List"} description={"A card component has a figure, a body part, and inside body there are title and actions parts"} />
                    </div>
                </div>
            </div>
        </>
    )

}